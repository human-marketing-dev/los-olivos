import Image from "next/image";
import Icon from "./Icon";

const FACTS = [
  {
    icon: "map-pin",
    t: "Allende, Nuevo León",
    d: "Corazón de la región citrícola, al sureste de Monterrey.",
  },
  {
    icon: "navigation",
    t: "A 40 minutos",
    d: "Desde el sur de Monterrey por la carretera nacional.",
  },
  {
    icon: "mountain",
    t: "Entorno de sierra",
    d: "Clima templado, naturaleza y vistas abiertas.",
  },
];

export default function Location() {
  return (
    <section
      id="ubicacion"
      className="lo-pad"
      style={{
        background: "var(--surface-brand-deep)",
        color: "var(--text-on-dark)",
        padding: "104px 32px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Image
        src="/assets/logo/los-olivos-mark.png"
        alt=""
        aria-hidden
        width={360}
        height={360}
        style={{
          position: "absolute",
          left: -90,
          bottom: -80,
          opacity: 0.06,
          filter: "brightness(0) invert(1)",
        }}
      />
      <div
        className="lo-loc"
        style={{
          position: "relative",
          maxWidth: "var(--container-xl)",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 56,
          alignItems: "center",
        }}
      >
        <div>
          <div
            className="lo-eyebrow"
            style={{ color: "var(--olive-200)" }}
          >
            Ubicación
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(30px,4vw,50px)",
              fontWeight: 500,
              color: "var(--white)",
              margin: "12px 0 18px",
              letterSpacing: "-0.01em",
              lineHeight: 1.04,
            }}
          >
            En Allende, el campo
            <br />
            <span style={{ fontStyle: "italic", color: "var(--olive-200)" }}>
              a la puerta de la ciudad.
            </span>
          </h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 20,
              margin: "8px 0 32px",
            }}
          >
            {FACTS.map((f) => (
              <div
                key={f.t}
                style={{ display: "flex", gap: 14, alignItems: "flex-start" }}
              >
                <span
                  style={{
                    flex: "none",
                    width: 42,
                    height: 42,
                    borderRadius: "var(--radius-md)",
                    background: "rgba(255,255,255,0.10)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--gold-300)",
                  }}
                >
                  <Icon name={f.icon} size={20} stroke={1.7} />
                </span>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 20,
                      fontWeight: 600,
                      color: "var(--white)",
                    }}
                  >
                    {f.t}
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 14.5,
                      lineHeight: 1.55,
                      color: "var(--olive-100)",
                      margin: "2px 0 0",
                      maxWidth: 360,
                    }}
                  >
                    {f.d}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Allende,+Nuevo+Leon"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              fontFamily: "var(--font-sans)",
              fontSize: 15,
              fontWeight: 600,
              color: "var(--olive-950)",
              background: "var(--gold-400)",
              padding: "13px 24px",
              borderRadius: "var(--radius-pill)",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            Ver en Google Maps{" "}
            <Icon name="arrow-up-right" size={17} stroke={2.2} />
          </a>
        </div>

        <div
          className="lo-map"
          style={{
            position: "relative",
            borderRadius: "var(--radius-2xl)",
            overflow: "hidden",
            background:
              "linear-gradient(160deg, #46583A 0%, var(--olive-800) 100%)",
            border: "1px solid rgba(255,255,255,0.12)",
            aspectRatio: "4 / 3.4",
            boxShadow: "var(--shadow-card)",
          }}
        >
          <svg
            viewBox="0 0 400 340"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            style={{ display: "block" }}
            aria-label="Mapa de Nuevo León con Allende marcado"
          >
            <g fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="1.5">
              <path d="M-20,250 C90,210 150,250 230,210 C300,175 360,200 430,160" />
              <path d="M-20,285 C90,245 150,285 230,245 C300,210 360,235 430,195" />
              <path d="M-20,215 C90,175 150,215 230,175 C300,140 360,165 430,125" />
              <path d="M-20,180 C90,140 150,180 230,140 C300,105 360,130 430,90" />
            </g>
            <path
              d="M150,40 L205,46 L212,72 L240,80 L236,104 L262,120 L250,150 L276,168 L262,196 L238,206 L246,236 L220,250 L226,286 L196,300 L188,276 L160,286 L150,262 L120,270 L112,242 L134,224 L120,196 L140,172 L122,150 L142,120 L128,96 L150,78 Z"
              fill="rgba(171,188,140,0.16)"
              stroke="rgba(205,178,97,0.55)"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
            <g>
              <circle cx="168" cy="150" r="4.5" fill="rgba(255,255,255,0.9)" />
              <text
                x="178"
                y="148"
                fill="rgba(255,255,255,0.82)"
                fontFamily="var(--font-sans)"
                fontSize="11"
                fontWeight="500"
              >
                Monterrey
              </text>
            </g>
            <path
              d="M168,150 C182,176 188,196 196,214"
              fill="none"
              stroke="rgba(205,178,97,0.7)"
              strokeWidth="2"
              strokeDasharray="3 5"
              strokeLinecap="round"
            />
            <g transform="translate(196,214)">
              <ellipse cx="0" cy="9" rx="9" ry="3" fill="rgba(0,0,0,0.25)" />
              <path
                d="M0,8 C-9,-6 -13,-12 -7,-19 C-2.5,-24 6.5,-24 11,-19 C17,-12 9,-6 0,8 Z"
                transform="translate(0,-2)"
                fill="var(--gold-400)"
                stroke="#fff"
                strokeWidth="1.4"
              />
              <circle cx="2" cy="-15" r="4.4" fill="var(--olive-900)" />
              <text
                x="14"
                y="-10"
                fill="#fff"
                fontFamily="var(--font-sans)"
                fontSize="13"
                fontWeight="700"
              >
                Allende
              </text>
              <text
                x="14"
                y="6"
                fill="rgba(255,255,255,0.7)"
                fontFamily="var(--font-sans)"
                fontSize="9.5"
                letterSpacing="0.5"
              >
                LOS OLIVOS
              </text>
            </g>
          </svg>
          <div
            style={{
              position: "absolute",
              top: 16,
              left: 18,
              fontFamily: "var(--font-sans)",
              fontSize: 11,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              color: "rgba(255,255,255,0.65)",
            }}
          >
            Nuevo León · México
          </div>
        </div>
      </div>
    </section>
  );
}
