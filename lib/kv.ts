import { kv } from "@vercel/kv";

export interface DossierRecord {
  token: string;
  lead: {
    businessName: string;
    websiteUrl: string | null;
    businessType: string;
    problem: string;
    teamSize: string;
    triedBefore: string[];
    vision: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  research: {
    headline: string;
    subheadline: string;
    aboutContent: string;
    story: string;
    founder: string;
    reviews: string;
    press: string;
    competitors: string;
  };
  dossier: DossierContent;
  createdAt: string;
  expiresAt: string;
}

export interface DossierContent {
  heroHeadline: string;
  heroSubheadline: string;
  introBody: string;
  diagnosis: {
    headline: string;
    body: string;
  };
  agents: {
    emoji: string;
    name: string;
    role: string;
    detail: string;
  }[];
  agentActivityLog: {
    time: string;
    agent: string;
    action: string;
    status: "done" | "live" | "you";
  }[];
  before: string[];
  after: string[];
  closingHeadline: string;
  closingBody: string;
  ctaText: string;
}

const TTL_SECONDS = 1209600; // 14 days

function kvKey(token: string) {
  return `dossier:${token}`;
}

export async function storeDossier(record: DossierRecord): Promise<void> {
  await kv.set(kvKey(record.token), JSON.stringify(record), { ex: TTL_SECONDS });
}

export async function fetchDossier(token: string): Promise<DossierRecord | null> {
  const raw = await kv.get<string>(kvKey(token));
  if (!raw) return null;
  // kv.get auto-parses JSON, so raw may already be an object
  if (typeof raw === "string") return JSON.parse(raw) as DossierRecord;
  return raw as unknown as DossierRecord;
}
