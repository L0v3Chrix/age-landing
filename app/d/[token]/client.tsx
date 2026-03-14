"use client";

export function DossierClient() {
  return (
    <button
      className="pdf-btn"
      onClick={() => window.print()}
      style={{
        position: "fixed",
        bottom: 24,
        right: 24,
        background: "#0c0a0c",
        border: "1px solid #1e1c1e",
        borderRadius: 10,
        color: "rgba(255,255,255,0.5)",
        fontSize: 13,
        fontWeight: 700,
        fontFamily: "inherit",
        padding: "12px 20px",
        cursor: "pointer",
        zIndex: 50,
        transition: "border-color 0.2s, color 0.2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "#f59e0b";
        e.currentTarget.style.color = "#fff";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "#1e1c1e";
        e.currentTarget.style.color = "rgba(255,255,255,0.5)";
      }}
    >
      Download as PDF
    </button>
  );
}
