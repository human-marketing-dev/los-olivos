import Image from "next/image";
import Icon from "./Icon";

const COLS = [
  {
    h: "Proyecto",
    items: [
      ["Concepto", "#concepto"],
      ["Master plan", "#masterplan"],
      ["Amenidades", "#amenidades"],
      ["Galería", "#galeria"],
    ],
  },
  {
    h: "Contacto",
    items: [
      ["info@humanmarketing.mx", "#contacto"],
      ["81 1234 5678", "#contacto"],
      ["Allende, N.L.", "#ubicacion"],
    ],
  },
];

const SOCIAL = [
  { icon: "instagram", href: "https://instagram.com", label: "Instagram" },
  { icon: "facebook", href: "https://facebook.com", label: "Facebook" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--olive-950)",
        color: "var(--olive-100)",
        padding: "64px 32px 40px",
      }}
    >
      <div style={{ maxWidth: "var(--container-xl)", margin: "0 auto" }}>
        <div
          className="lo-foot-top"
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 40,
            paddingBottom: 44,
            borderBottom: "1px solid rgba(255,255,255,0.10)",
          }}
        >
          <div>
            <Image
              src="/assets/logo/los-olivos-logo-white.png"
              alt="Los Olivos · Residencial Campestre"
              width={440}
              height={120}
              style={{ height: 112, width: "auto" }}
            />
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 13.5,
                lineHeight: 1.6,
                color: "var(--olive-300)",
                maxWidth: 320,
                marginTop: 22,
                marginBottom: 0,
              }}
            >
              Desarrollo residencial campestre en Allende, Nuevo León. Un
              patrimonio que crece contigo.
            </p>
            <div
              style={{ display: "flex", gap: 12, marginTop: 22 }}
            >
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.16)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--olive-100)",
                    textDecoration: "none",
                  }}
                >
                  <Icon name={s.icon} size={19} stroke={1.8} />
                </a>
              ))}
            </div>
          </div>
          <div
            className="lo-foot-cols"
            style={{ display: "flex", gap: 72 }}
          >
            {COLS.map((c) => (
              <div key={c.h}>
                <div
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 12,
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.16em",
                    color: "var(--olive-400)",
                    marginBottom: 16,
                  }}
                >
                  {c.h}
                </div>
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
                  {c.items.map(([label, href]) => (
                    <li key={label}>
                      <a
                        href={href}
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: 14,
                          color: "var(--olive-200)",
                          textDecoration: "none",
                        }}
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
            paddingTop: 26,
            fontFamily: "var(--font-sans)",
            fontSize: 12.5,
            color: "var(--olive-400)",
          }}
        >
          <span>
            © 2026 Los Olivos · Residencial Campestre. Desarrolla CamiVi78.
          </span>
          <span>SEO by Human Marketing®</span>
        </div>
      </div>
    </footer>
  );
}
