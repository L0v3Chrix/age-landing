const BRAVE_API_KEY = process.env.BRAVE_API_KEY;

interface ResearchBundle {
  headline: string;
  subheadline: string;
  aboutContent: string;
  story: string;
  founder: string;
  reviews: string;
  press: string;
  competitors: string;
}

// --- Website scraper ---
async function scrapeWebsite(url: string): Promise<{ headline: string; subheadline: string; aboutContent: string }> {
  try {
    const res = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; AGEBot/1.0)" },
      signal: AbortSignal.timeout(8000),
    });
    const html = await res.text();

    // Extract headline from <h1> or <title>
    const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
    const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
    const headline = stripTags(h1Match?.[1] || titleMatch?.[1] || "").trim().slice(0, 200);

    // Extract subheadline from first <h2> or meta description
    const h2Match = html.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i);
    const metaDesc = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([\s\S]*?)["']/i);
    const subheadline = stripTags(h2Match?.[1] || metaDesc?.[1] || "").trim().slice(0, 300);

    // Extract about content from paragraphs
    const paragraphs: string[] = [];
    const pRegex = /<p[^>]*>([\s\S]*?)<\/p>/gi;
    let match;
    while ((match = pRegex.exec(html)) !== null && paragraphs.length < 6) {
      const text = stripTags(match[1]).trim();
      if (text.length > 40) paragraphs.push(text);
    }
    const aboutContent = paragraphs.join(" ").slice(0, 500);

    return { headline, subheadline, aboutContent };
  } catch {
    return { headline: "", subheadline: "", aboutContent: "" };
  }
}

function stripTags(html: string): string {
  return html.replace(/<[^>]*>/g, "").replace(/&amp;/g, "&").replace(/&nbsp;/g, " ").replace(/&#\d+;/g, "").replace(/\s+/g, " ");
}

// --- Brave Search ---
async function braveSearch(query: string): Promise<string> {
  if (!BRAVE_API_KEY) return "";
  try {
    const res = await fetch(
      `https://api.search.brave.com/res/v1/web/search?q=${encodeURIComponent(query)}&count=5`,
      {
        headers: {
          Accept: "application/json",
          "Accept-Encoding": "gzip",
          "X-Subscription-Token": BRAVE_API_KEY,
        },
        signal: AbortSignal.timeout(6000),
      }
    );
    const data = await res.json();
    const results = data.web?.results || [];
    return results
      .slice(0, 3)
      .map((r: { title?: string; description?: string }) => `${r.title}: ${r.description}`)
      .join("\n");
  } catch {
    return "";
  }
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// --- Main research function ---
export async function runResearch(
  businessName: string,
  websiteUrl: string | null,
  businessType: string
): Promise<ResearchBundle> {
  // Phase 1: Scrape website (can run in parallel with first search)
  const websitePromise = websiteUrl ? scrapeWebsite(websiteUrl) : Promise.resolve({ headline: "", subheadline: "", aboutContent: "" });

  // Phase 2: Brave Search queries with 1.1s rate limiting
  const queries = [
    `"${businessName}" history story`,
    `"${businessName}" reviews OR testimonials`,
    `"${businessName}" founder OR owner`,
    `"${businessName}" news OR press OR featured`,
    `${businessName} ${businessType} competitors`,
  ];

  const searchResults: string[] = [];
  for (let i = 0; i < queries.length; i++) {
    if (i > 0) await sleep(1100);
    searchResults.push(await braveSearch(queries[i]));
  }

  const website = await websitePromise;

  return {
    headline: website.headline,
    subheadline: website.subheadline,
    aboutContent: website.aboutContent,
    story: searchResults[0],
    founder: searchResults[2],
    reviews: searchResults[1],
    press: searchResults[3],
    competitors: searchResults[4],
  };
}
