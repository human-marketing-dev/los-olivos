import Image from "next/image";
import Icon from "./Icon";

const AMENITIES = [
  { slug: "sendero", icon: "footprints", name: "Sendero" },
  { slug: "asadores", icon: "utensils", name: "Asadores" },
  { slug: "firepit", icon: "flame", name: "Firepit" },
  { slug: "areas-de-estar", icon: "users", name: "Áreas de estar" },
  { slug: "playground", icon: "blocks", name: "Playground", wide: true },
  { slug: "canal", icon: "waves", name: "Canal" },
  { slug: "cruce", icon: "signpost", name: "Cruce" },
];

export default function Amenities() {
  return (
    <section
      id="amenidades"
      className="lo-pad"
      style={{
        background: "var(--surface-sunken)",
        padding: "92px 32px",
        borderTop: "1px solid var(--border-subtle)",
      }}
    >
      <div style={{ maxWidth: "var(--container-xl)", margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
            marginBottom: 30,
          }}
        >
          <div style={{ maxWidth: 640 }}>
            <div className="lo-eyebrow" style={{ color: "var(--olive-600)" }}>
              Amenidades
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px,3.4vw,44px)",
                fontWeight: 500,
                margin: "10px 0 0",
                letterSpacing: "-0.01em",
                lineHeight: 1.04,
              }}
            >
              Siete formas de vivir el campo
            </h2>
          </div>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 15.5,
              lineHeight: 1.6,
              color: "var(--text-secondary)",
              margin: 0,
              maxWidth: 320,
            }}
          >
            Espacios para caminar, reunirse y volver a la naturaleza — a unos
            pasos de tu lote.
          </p>
        </div>

        <div
          className="lo-amenity-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 16,
          }}
        >
          {AMENITIES.map((a) => (
            <div
              key={a.slug}
              className={a.wide ? "lo-amenity-wide" : undefined}
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "var(--radius-xl)",
                height: 210,
                gridColumn: a.wide ? "span 2" : "span 1",
              }}
            >
              <Image
                src={`/assets/img/amenities/${a.slug}.webp`}
                alt={a.name}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                style={{
                  objectFit: "cover",
                  objectPosition: "center 30%",
                  transition: "transform var(--dur-slow) var(--ease-out)",
                }}
                className="amenity-img"
              />
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(27,35,19,0) 40%, rgba(27,35,19,0.78) 100%)",
                }}
              />
              <div
                style={{
                  position: "relative",
                  height: "100%",
                  display: "flex",
                  alignItems: "flex-end",
                  gap: 11,
                  padding: "18px 18px",
                }}
              >
                <span style={{ color: "var(--gold-300)", marginBottom: 1 }}>
                  <Icon name={a.icon} size={20} stroke={1.8} />
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    fontSize: 23,
                    color: "var(--white)",
                    margin: 0,
                    lineHeight: 1,
                  }}
                >
                  {a.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
