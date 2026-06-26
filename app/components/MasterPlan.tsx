import Image from "next/image";

const LEGEND = [
  "Glorieta de acceso",
  "Caseta de vigilancia",
  "Cruce seguro",
  "Canal central",
  "Senderos",
  "Firepit",
  "Asadores",
  "Juegos infantiles",
  "Cancha de pádel",
  "Dogpark",
  "Estacionamiento",
  "Zona comercial",
];

export default function MasterPlan() {
  return (
    <section
      id="masterplan"
      className="lo-pad"
      style={{ background: "var(--surface-page)", padding: "104px 32px" }}
    >
      <div style={{ maxWidth: "var(--container-xl)", margin: "0 auto" }}>
        <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 40px" }}>
          <div className="lo-eyebrow" style={{ color: "var(--olive-600)" }}>
            Master plan
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(30px,4vw,50px)",
              fontWeight: 500,
              margin: "10px 0 14px",
              letterSpacing: "-0.01em",
              lineHeight: 1.04,
            }}
          >
            Todo el desarrollo, de un vistazo
          </h2>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 16.5,
              lineHeight: 1.6,
              color: "var(--text-secondary)",
              margin: 0,
            }}
          >
            Un trazado pensado para la convivencia y la naturaleza: parque lineal
            con amenidades, accesos controlados y lotes con vista.
          </p>
        </div>

        <div
          style={{
            background: "var(--surface-card)",
            border: "1px solid var(--border-subtle)",
            borderRadius: "var(--radius-2xl)",
            boxShadow: "var(--shadow-md)",
            padding: "clamp(16px,3vw,40px)",
          }}
        >
          <div style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" as "touch" }}>
            <Image
              src="/assets/img/master-plan.webp"
              alt="Master plan de Los Olivos con sus amenidades"
              width={2400}
              height={1350}
              style={{ display: "block", width: "100%", minWidth: 680, height: "auto" }}
            />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            justifyContent: "center",
            marginTop: 28,
          }}
        >
          {LEGEND.map((l) => (
            <span
              key={l}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontFamily: "var(--font-sans)",
                fontSize: 13,
                color: "var(--olive-800)",
                background: "var(--surface-brand-soft)",
                border: "1px solid var(--olive-100)",
                borderRadius: "var(--radius-pill)",
                padding: "6px 14px",
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "var(--olive-500)",
                  display: "inline-block",
                }}
              />
              {l}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
