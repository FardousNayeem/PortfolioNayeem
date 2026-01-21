import React, { useState } from "react";

export default function Projects() {
  const [showBuildNote, setShowBuildNote] = useState(false);

  return (
    <main style={styles.page}>
      <section style={styles.card}>
        <header style={styles.header}>
          <div style={styles.badge}>PROJECTS</div>
          <h1 style={styles.title}>Work that speaks in pixels.</h1>
          <p style={styles.subtitle}>
            Curated builds, bold ideas, and unapologetically clean execution.
          </p>
        </header>

        <div style={styles.ctaRow}>
          <button
            type="button"
            onClick={() => setShowBuildNote((v) => !v)}
            style={styles.button}
          >
            Click to Preview ✨
          </button>

          <span style={styles.hint}>Tap the button. Feel the drip.</span>
        </div>

        {showBuildNote && (
          <div style={styles.notice}>
            <div style={styles.noticeGlow} />
            <p style={styles.noticeText}>
              <span style={styles.noticeKicker}>Status:</span> Page to be built.
              <br />
              <span style={styles.noticeSub}>
                Coming in hot with case studies, screenshots, and flex.
              </span>
            </p>
          </div>
        )}

        <footer style={styles.footer}>
          <span style={styles.footerDot} />
          <span style={styles.footerText}>Under construction, but already elite.</span>
        </footer>
      </section>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    display: "grid",
    placeItems: "center",
    padding: "48px 16px",
    background:
      "radial-gradient(1200px 800px at 20% 10%, rgba(124,58,237,0.25), transparent 55%)," +
      "radial-gradient(1000px 700px at 90% 20%, rgba(59,130,246,0.22), transparent 55%)," +
      "linear-gradient(180deg, #070A12 0%, #050712 100%)",
    color: "#EAF0FF",
    fontFamily:
      'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
  },
  card: {
    width: "min(880px, 100%)",
    borderRadius: 20,
    padding: 28,
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.12)",
    boxShadow: "0 20px 60px rgba(0,0,0,0.45)",
    backdropFilter: "blur(10px)",
  },
  header: { marginBottom: 18 },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    padding: "8px 12px",
    borderRadius: 999,
    fontWeight: 700,
    letterSpacing: "0.18em",
    fontSize: 12,
    color: "rgba(255,255,255,0.9)",
    background:
      "linear-gradient(90deg, rgba(124,58,237,0.35), rgba(59,130,246,0.25))",
    border: "1px solid rgba(255,255,255,0.14)",
    textTransform: "uppercase",
  },
  title: {
    margin: "14px 0 8px",
    fontSize: 42,
    lineHeight: 1.08,
    letterSpacing: "-0.03em",
  },
  subtitle: {
    margin: 0,
    maxWidth: 640,
    fontSize: 16,
    lineHeight: 1.6,
    color: "rgba(234,240,255,0.78)",
  },
  ctaRow: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: 12,
    marginTop: 18,
  },
  button: {
    cursor: "pointer",
    border: "none",
    borderRadius: 14,
    padding: "12px 16px",
    fontWeight: 800,
    letterSpacing: "0.02em",
    color: "#071022",
    background: "linear-gradient(90deg, #A78BFA 0%, #60A5FA 50%, #34D399 100%)",
    boxShadow: "0 14px 30px rgba(99,102,241,0.25)",
    transform: "translateY(0)",
  },
  hint: {
    fontSize: 13,
    color: "rgba(234,240,255,0.7)",
  },
  notice: {
    position: "relative",
    marginTop: 18,
    borderRadius: 16,
    padding: "16px 16px",
    background: "rgba(10, 14, 28, 0.7)",
    border: "1px solid rgba(255,255,255,0.12)",
    overflow: "hidden",
  },
  noticeGlow: {
    position: "absolute",
    inset: -2,
    background:
      "radial-gradient(600px 160px at 20% 0%, rgba(124,58,237,0.30), transparent 60%)," +
      "radial-gradient(500px 140px at 85% 10%, rgba(59,130,246,0.26), transparent 55%)",
    filter: "blur(10px)",
    opacity: 0.9,
    pointerEvents: "none",
  },
  noticeText: {
    position: "relative",
    margin: 0,
    fontSize: 15,
    lineHeight: 1.6,
    color: "rgba(234,240,255,0.9)",
  },
  noticeKicker: {
    fontWeight: 900,
    color: "#A78BFA",
    marginRight: 6,
  },
  noticeSub: { color: "rgba(234,240,255,0.72)" },
  footer: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginTop: 22,
    paddingTop: 14,
    borderTop: "1px solid rgba(255,255,255,0.10)",
    color: "rgba(234,240,255,0.70)",
    fontSize: 13,
  },
  footerDot: {
    width: 10,
    height: 10,
    borderRadius: 999,
    background: "linear-gradient(180deg, #A78BFA, #60A5FA)",
    boxShadow: "0 0 18px rgba(167,139,250,0.45)",
  },
  footerText: { margin: 0 },
};
