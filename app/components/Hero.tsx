import Image from "next/image";
import Icon from "./Icon";

interface HeroProps {
  onPrimary: () => void;
  onSecondary: () => void;
}

const STATS = [
  { k: "Lotes desde", v: "980 m²" },
  { k: "De Monterrey", v: "40 min" },
  { k: "Entrega", v: "Inmediata" },
];

export default function Hero({ onPrimary, onSecondary }: HeroProps) {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        background: "var(--olive-900)",
        color: "var(--text-on-dark)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Image
        src="/assets/img/hero-acceso.webp"
        alt="Acceso a Los Olivos al atardecer"
        fill
        sizes="100vw"
        style={{ objectFit: "cover", objectPosition: "center 40%" }}
        priority
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(27,35,19,0.92) 0%, rgba(27,35,19,0.78) 34%, rgba(40,50,29,0.42) 64%, rgba(40,50,29,0.20) 100%)",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(27,35,19,0.55) 0%, rgba(27,35,19,0) 26%, rgba(27,35,19,0) 70%, rgba(27,35,19,0.5) 100%)",
        }}
      />
      <Image
        src="/assets/logo/los-olivos-mark.png"
        alt=""
        aria-hidden
        width={620}
        height={620}
        style={{
          position: "absolute",
          right: "-6%",
          top: "50%",
          transform: "translateY(-50%)",
          opacity: 0.07,
          filter: "brightness(0) invert(1)",
          pointerEvents: "none",
        }}
      />
      <div
        className="lo-hero-inner"
        style={{
          position: "relative",
          maxWidth: "var(--container-xl)",
          margin: "0 auto",
          padding: "140px 32px 64px",
          width: "100%",
        }}
      >
        <div style={{ maxWidth: 760 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              color: "var(--olive-200)",
              marginBottom: 26,
            }}
          >
            <Icon name="map-pin" size={16} />
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.24em",
                fontSize: 12,
              }}
            >
              Allende · Nuevo León
            </span>
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 500,
              color: "var(--white)",
              fontSize: "clamp(44px, 6vw, 82px)",
              lineHeight: 1.02,
              letterSpacing: "-0.015em",
              margin: 0,
            }}
          >
            Tu refugio en el campo,
            <br />
            <span
              style={{
                fontStyle: "italic",
                fontWeight: 500,
                color: "var(--olive-200)",
              }}
            >
              a un paso de la ciudad.
            </span>
          </h1>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(16px,1.5vw,20px)",
              lineHeight: 1.6,
              color: "var(--olive-100)",
              maxWidth: 560,
              margin: "24px 0 38px",
            }}
          >
            Lotes campestres entre olivos y sierra. Un patrimonio que crece
            contigo — naturaleza, familia y plusvalía en un mismo lugar.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <button
              onClick={onPrimary}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                fontFamily: "var(--font-sans)",
                fontSize: 16,
                fontWeight: 600,
                padding: "14px 28px",
                borderRadius: "var(--radius-pill)",
                border: "none",
                cursor: "pointer",
                background: "var(--gold-500)",
                color: "var(--olive-950)",
                transition: "background var(--dur-fast) var(--ease-standard)",
              }}
            >
              Agendar una visita
              <Icon name="arrow-right" size={18} />
            </button>
            <button
              onClick={onSecondary}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 16,
                fontWeight: 600,
                padding: "14px 28px",
                borderRadius: "var(--radius-pill)",
                border: "1px solid rgba(255,255,255,0.4)",
                cursor: "pointer",
                background: "rgba(255,255,255,0.10)",
                color: "var(--white)",
                transition: "background var(--dur-fast) var(--ease-standard)",
              }}
            >
              Conoce el proyecto
            </button>
          </div>
          <div
            style={{
              display: "flex",
              gap: 48,
              marginTop: 64,
              flexWrap: "wrap",
            }}
          >
            {STATS.map((s) => (
              <div key={s.k}>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 34,
                    fontWeight: 600,
                    color: "var(--white)",
                    lineHeight: 1,
                  }}
                >
                  {s.v}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 12,
                    textTransform: "uppercase",
                    letterSpacing: "0.14em",
                    color: "var(--olive-300)",
                    marginTop: 7,
                  }}
                >
                  {s.k}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
