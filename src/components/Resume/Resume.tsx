import React, { useMemo, useState } from "react";

export default function Resume() {
  const [showBuildNote, setShowBuildNote] = useState(false);

  const tagline = useMemo(
    () => "A résumé that reads like a highlight reel.",
    []
  );

  return (
    <main style={styles.page}>
      <section style={styles.card}>
        <header style={styles.header}>
          <div style={styles.badge}>RESUME</div>
          <h1 style={styles.title}>Credentials, but make it cinematic.</h1>
          <p style={styles.subtitle}>{tagline}</p>
        </header>

        <div style={styles.grid}>
          <div style={styles.panel}>
            <h2 style={styles.panelTitle}>Quick Stats</h2>
            <ul style={styles.list}>
              <li style={styles.listItem}>
                <span style={styles.bullet} /> Impact-driven projects
              </li>
              <li style={styles.listItem}>
                <span style={styles.bullet} /> Clean UI + solid logic
              </li>
              <li style={styles.listItem}>
                <span style={styles.bullet} /> “Ship it” energy
              </li>
            </ul>
          </div>

          <div style={styles.panel}>
            <h2 style={styles.panelTitle}>Action</h2>
            <button
              type="button"
              onClick={() => setShowBuildNote((v) => !v)}
              style={styles.button}
            >
              Click to Reveal 🔥
            </button>

            {showBuildNote && (
              <div style={styles.notice}>
                <p style={styles.noticeText}>
                  <span style={styles.noticeKicker}>Page to be built.</span>{" "}
                  Polished timeline, skills, and downloadable PDF coming soon.
                </p>
              </div>
            )}
          </div>
        </div>

        <footer style={styles.footer}>
          <span style={styles.footerChip}>Premium placeholder</span>
          <span style={styles.footerText}>Designed to look finished—even when it isn’t.</span>
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
      "radial-gradient(1200px 800px at 70% 5%, rgba(16,185,129,0.18), transparent 60%)," +
      "radial-gradient(900px 700px at 10% 20%, rgba(236,72,153,0.18), transparent 55%)," +
      "linear-gradient(180deg, #070A12 0%, #050712 100%)",
    color: "#EAF0FF",
    fontFamily:
      'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
  },
  card: {
    width: "min(900px, 100%)",
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
    padding: "8px 12px",
    borderRadius: 999,
    fontWeight: 800,
    letterSpacing: "0.18em",
    fontSize: 12,
    color: "rgba(255,255,255,0.9)",
    background:
      "linear-gradient(90deg, rgba(236,72,153,0.25), rgba(16,185,129,0.22))",
    border: "1px solid rgba(255,255,255,0.14)",
    textTransform: "uppercase",
  },
  title: {
    margin: "14px 0 8px",
    fontSize: 40,
    lineHeight: 1.08,
    letterSpacing: "-0.03em",
  },
  subtitle: {
    margin: 0,
    maxWidth: 680,
    fontSize: 16,
    lineHeight: 1.6,
    color: "rgba(234,240,255,0.78)",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 14,
    marginTop: 18,
  },
  panel: {
    borderRadius: 16,
    padding: 16,
    background: "rgba(10, 14, 28, 0.65)",
    border: "1px solid rgba(255,255,255,0.10)",
  },
  panelTitle: {
    margin: "0 0 12px",
    fontSize: 14,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "rgba(234,240,255,0.85)",
  },
  list: { margin: 0, paddingLeft: 0, listStyle: "none", display: "grid", gap: 10 },
  listItem: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    color: "rgba(234,240,255,0.78)",
    fontSize: 14,
  },
  bullet: {
    width: 10,
    height: 10,
    borderRadius: 999,
    background: "linear-gradient(180deg, #EC4899, #10B981)",
    boxShadow: "0 0 16px rgba(236,72,153,0.28)",
    flex: "0 0 auto",
  },
  button: {
    width: "100%",
    cursor: "pointer",
    border: "none",
    borderRadius: 14,
    padding: "12px 16px",
    fontWeight: 900,
    letterSpacing: "0.02em",
    color: "#071022",
    background: "linear-gradient(90deg, #F472B6 0%, #34D399 55%, #60A5FA 100%)",
    boxShadow: "0 14px 30px rgba(16,185,129,0.18)",
  },
  notice: {
    marginTop: 12,
    borderRadius: 14,
    padding: "12px 12px",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.10)",
  },
  noticeText: {
    margin: 0,
    color: "rgba(234,240,255,0.86)",
    fontSize: 14,
    lineHeight: 1.6,
  },
  noticeKicker: {
    fontWeight: 900,
    color: "#34D399",
  },
  footer: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: 10,
    marginTop: 22,
    paddingTop: 14,
    borderTop: "1px solid rgba(255,255,255,0.10)",
  },
  footerChip: {
    padding: "6px 10px",
    borderRadius: 999,
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.10)",
    color: "rgba(234,240,255,0.75)",
    fontSize: 12,
    fontWeight: 700,
  },
  footerText: { color: "rgba(234,240,255,0.70)", fontSize: 13 },
};
