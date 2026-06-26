import Image from "next/image";
import Icon from "./Icon";

const POINTS = [
  {
    icon: "leaf",
    t: "Vida campestre",
    d: "Despierta entre olivos, encinos y el silencio del campo.",
  },
  {
    icon: "sun",
    t: "Tranquilidad",
    d: "El ritmo cambia. Aquí se respira hondo y se vive sin prisa.",
  },
  {
    icon: "mountain",
    t: "Naturaleza",
    d: "Sierra, vegetación y cielo abierto como telón de cada día.",
  },
];

export default function About() {
  return (
    <section
      id="concepto"
      className="lo-pad"
      style={{ background: "var(--surface-page)", padding: "110px 32px" }}
    >
      <div
        className="lo-about"
        style={{
          maxWidth: "var(--container-xl)",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 64,
          alignItems: "center",
        }}
      >
        <div className="lo-about-media" style={{ position: "relative" }}>
          <div
            style={{
              position: "relative",
              borderRadius: "var(--radius-2xl)",
              overflow: "hidden",
              boxShadow: "var(--shadow-lg)",
              aspectRatio: "4 / 3.2",
            }}
          >
            <Image
              src="/assets/img/about.webp"
              alt="Vida campestre en Los Olivos"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div
            className="lo-about-badge"
            style={{
              position: "absolute",
              right: -22,
              bottom: -22,
              background: "var(--surface-brand-deep)",
              color: "var(--text-on-dark)",
              borderRadius: "var(--radius-xl)",
              padding: "20px 26px",
              boxShadow: "var(--shadow-card)",
              maxWidth: 230,
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 30,
                fontWeight: 600,
                color: "var(--white)",
                lineHeight: 1,
              }}
            >
              40 min
            </div>
            <div
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 13,
                color: "var(--olive-100)",
                marginTop: 6,
                lineHeight: 1.45,
              }}
            >
              de Monterrey — el campo sin alejarte de la ciudad.
            </div>
          </div>
        </div>

        <div>
          <div className="lo-eyebrow" style={{ color: "var(--olive-600)" }}>
            Sobre Los Olivos
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(30px,4vw,50px)",
              fontWeight: 500,
              margin: "12px 0 20px",
              letterSpacing: "-0.01em",
              lineHeight: 1.04,
            }}
          >
            Un escape al campo,
            <br />
            <span style={{ fontStyle: "italic", color: "var(--olive-600)" }}>
              sin alejarte de todo.
            </span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 17,
              lineHeight: 1.7,
              color: "var(--text-secondary)",
              margin: "0 0 18px",
              maxWidth: 480,
            }}
          >
            Los Olivos es un desarrollo residencial campestre pensado para
            quienes buscan reencontrarse con la naturaleza. Un lugar donde el
            día empieza con aire limpio y termina con el cielo abierto — a solo
            unos minutos de la ciudad.
          </p>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 17,
              lineHeight: 1.7,
              color: "var(--text-secondary)",
              margin: "0 0 34px",
              maxWidth: 480,
            }}
          >
            Más que un terreno, es la decisión de vivir distinto: con espacio,
            calma y raíces que crecen contigo.
          </p>
          <div
            className="lo-about-points"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 22,
            }}
          >
            {POINTS.map((p) => (
              <div key={p.t}>
                <div
                  style={{ color: "var(--olive-600)", marginBottom: 10 }}
                >
                  <Icon name={p.icon} size={26} stroke={1.6} />
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 19,
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    marginBottom: 4,
                  }}
                >
                  {p.t}
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 13.5,
                    lineHeight: 1.5,
                    color: "var(--text-secondary)",
                    margin: 0,
                  }}
                >
                  {p.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
