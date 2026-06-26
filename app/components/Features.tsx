import Icon from "./Icon";

const ITEMS = [
  { icon: "sprout", t: "Entorno natural", d: "Olivos, vegetación y sierra alrededor." },
  { icon: "route", t: "Accesos listos", d: "Caminos y conexión a la carretera." },
  { icon: "droplet", t: "Servicios", d: "Infraestructura básica planeada." },
  { icon: "shield-check", t: "Acceso controlado", d: "Privacidad y tranquilidad." },
];

export default function Features() {
  return (
    <section
      id="proyecto"
      className="lo-pad"
      style={{
        background: "var(--surface-sunken)",
        padding: "84px 32px",
        borderTop: "1px solid var(--border-subtle)",
        borderBottom: "1px solid var(--border-subtle)",
      }}
    >
      <div
        className="lo-4col"
        style={{
          maxWidth: "var(--container-xl)",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 28,
        }}
      >
        {ITEMS.map((it) => (
          <div key={it.t}>
            <div style={{ color: "var(--olive-600)", marginBottom: 16 }}>
              <Icon name={it.icon} size={30} stroke={1.5} />
            </div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 21,
                fontWeight: 600,
                color: "var(--text-primary)",
                marginBottom: 5,
              }}
            >
              {it.t}
            </div>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 14,
                lineHeight: 1.55,
                color: "var(--text-secondary)",
                margin: 0,
              }}
            >
              {it.d}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
