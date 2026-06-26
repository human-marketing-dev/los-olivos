"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Icon from "./Icon";

const GALLERY = [
  { src: "/assets/img/gallery/g-acceso-frontal.webp", cap: "Acceso principal" },
  { src: "/assets/img/gallery/g-aerea.webp", cap: "Glorieta de acceso · vista aérea" },
  { src: "/assets/img/gallery/g-acceso-lateral.webp", cap: "Caseta y pórtico de acceso" },
  { src: "/assets/img/gallery/g-alameda.webp", cap: "Parque lineal y alameda" },
  { src: "/assets/img/gallery/g-portico.webp", cap: "Pórtico de acceso" },
];

interface GalleryItem {
  src: string;
  cap: string;
}

export default function Gallery() {
  const [open, setOpen] = useState<GalleryItem | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section
      id="galeria"
      className="lo-pad"
      style={{
        background: "var(--surface-sunken)",
        padding: "104px 32px",
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
            marginBottom: 36,
          }}
        >
          <div style={{ maxWidth: 620 }}>
            <div className="lo-eyebrow" style={{ color: "var(--olive-600)" }}>
              Galería
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(30px,4vw,50px)",
                fontWeight: 500,
                margin: "10px 0 0",
                letterSpacing: "-0.01em",
                lineHeight: 1.04,
              }}
            >
              Así se vive Los Olivos
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
            Renders del proyecto: accesos, parque lineal y áreas comunes.
          </p>
        </div>

        <div
          className="lo-gallery-top"
          style={{
            display: "grid",
            gridTemplateColumns: "1.7fr 1fr",
            gap: 16,
            marginBottom: 16,
          }}
        >
          <GalleryFrame item={GALLERY[0]} onOpen={setOpen} style={{ minHeight: 300 }} />
          <div style={{ display: "grid", gridTemplateRows: "1fr 1fr", gap: 16 }}>
            <GalleryFrame item={GALLERY[1]} onOpen={setOpen} />
            <GalleryFrame item={GALLERY[2]} onOpen={setOpen} />
          </div>
        </div>
        <div
          className="lo-gallery-bot"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}
        >
          <GalleryFrame item={GALLERY[3]} onOpen={setOpen} style={{ minHeight: 240 }} />
          <GalleryFrame item={GALLERY[4]} onOpen={setOpen} style={{ minHeight: 240 }} />
        </div>
      </div>

      {open && (
        <div
          onClick={() => setOpen(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 200,
            background: "rgba(20,27,13,0.86)",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
          }}
        >
          <button
            onClick={() => setOpen(null)}
            aria-label="Cerrar"
            style={{
              position: "absolute",
              top: 22,
              right: 24,
              width: 46,
              height: 46,
              borderRadius: "50%",
              background: "rgba(251,250,245,0.14)",
              border: "1px solid rgba(251,250,245,0.3)",
              color: "var(--white)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon name="x" size={22} />
          </button>
          <figure
            onClick={(e) => e.stopPropagation()}
            style={{ margin: 0, maxWidth: 1100, width: "100%" }}
          >
            <img
              src={open.src}
              alt={open.cap}
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "80vh",
                objectFit: "contain",
                borderRadius: "var(--radius-lg)",
                display: "block",
              }}
            />
            <figcaption
              style={{
                textAlign: "center",
                marginTop: 16,
                fontFamily: "var(--font-sans)",
                fontSize: 14,
                color: "var(--olive-100)",
                letterSpacing: "0.02em",
              }}
            >
              {open.cap}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}

function GalleryFrame({
  item,
  onOpen,
  style,
}: {
  item: GalleryItem;
  onOpen: (item: GalleryItem) => void;
  style?: React.CSSProperties;
}) {
  return (
    <button
      onClick={() => onOpen(item)}
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "var(--radius-xl)",
        cursor: "pointer",
        border: "none",
        padding: 0,
        background: "var(--olive-100)",
        boxShadow: "var(--shadow-sm)",
        transition: "box-shadow var(--dur-base) var(--ease-out)",
        minHeight: 200,
        ...style,
      }}
    >
      <Image
        src={item.src}
        alt={item.cap}
        fill
        sizes="(max-width: 900px) 100vw, (max-width: 1280px) 60vw, 768px"
        style={{ objectFit: "cover" }}
      />
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(27,35,19,0) 55%, rgba(27,35,19,0.62) 100%)",
        }}
      />
      <span
        style={{
          position: "absolute",
          left: 16,
          bottom: 14,
          right: 44,
          textAlign: "left",
          fontFamily: "var(--font-sans)",
          fontSize: 13.5,
          fontWeight: 500,
          color: "var(--white)",
        }}
      >
        {item.cap}
      </span>
      <span
        style={{
          position: "absolute",
          right: 12,
          bottom: 12,
          width: 30,
          height: 30,
          borderRadius: "50%",
          background: "rgba(251,250,245,0.18)",
          border: "1px solid rgba(251,250,245,0.35)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--white)",
        }}
      >
        <Icon name="maximize" size={15} stroke={2} />
      </span>
    </button>
  );
}
