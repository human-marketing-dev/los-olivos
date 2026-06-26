import Icon from "./Icon";

const COLS = [
  {
    icon: "trending-up",
    eyebrow: "Para el inversionista",
    title: "Plusvalía que madura",
    body: "Un desarrollo nuevo en una zona en crecimiento. La tierra trabaja mientras tú esperas.",
    points: [
      "Plusvalía proyectada al alza",
      "Escasez real de lotes campestres",
      "Patrimonio tangible y heredable",
    ],
    variant: "deep" as const,
  },
  {
    icon: "leaf",
    eyebrow: "Para vivir",
    title: "Un refugio natural",
    body: "Espacio para respirar, construir a tu ritmo y volver al campo sin alejarte de todo.",
    points: [
      "Naturaleza, aire y silencio",
      "Pensado para la familia",
      "A 40 minutos de Monterrey",
    ],
    variant: "brand" as const,
  },
];

export default function ValueProps() {
  return (
    <section
      id="vida"
      className="lo-pad"
      style={{ background: "var(--surface-page)", padding: "110px 32px" }}
    >
      <div style={{ maxWidth: "var(--container-lg)", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div className="lo-eyebrow" style={{ color: "var(--olive-600)" }}>
            Un mismo lugar, dos decisiones
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(30px,4vw,48px)",
              fontWeight: 500,
              margin: "12px 0 0",
              letterSpacing: "-0.01em",
            }}
          >
            Dos formas de mirar Los Olivos
          </h2>
        </div>
        <div
          className="lo-2col"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 24,
          }}
        >
          {COLS.map((c) => (
            <div
              key={c.title}
              style={{
                background:
                  c.variant === "deep"
                    ? "var(--surface-brand-deep)"
                    : "var(--surface-brand)",
                color: "var(--text-on-brand)",
                borderRadius: "var(--radius-2xl)",
                padding: "40px 38px",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: "var(--radius-lg)",
                  background: "rgba(255,255,255,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--olive-100)",
                  marginBottom: 22,
                }}
              >
                <Icon name={c.icon} size={26} stroke={1.6} />
              </div>
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 11.5,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.16em",
                  color: "var(--olive-200)",
                }}
              >
                {c.eyebrow}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 30,
                  fontWeight: 600,
                  color: "var(--white)",
                  margin: "8px 0 12px",
                }}
              >
                {c.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 15.5,
                  lineHeight: 1.6,
                  color: "var(--olive-100)",
                  margin: "0 0 22px",
                }}
              >
                {c.body}
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 11,
                }}
              >
                {c.points.map((p) => (
                  <li
                    key={p}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 11,
                      fontFamily: "var(--font-sans)",
                      fontSize: 14.5,
                      color: "var(--white)",
                    }}
                  >
                    <span style={{ color: "var(--gold-300)" }}>
                      <Icon name="check" size={17} stroke={2.2} />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
