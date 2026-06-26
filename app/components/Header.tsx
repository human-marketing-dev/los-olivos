"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Icon from "./Icon";

const NAV = [
  { label: "Concepto", href: "#concepto" },
  { label: "Master plan", href: "#masterplan" },
  { label: "Amenidades", href: "#amenidades" },
  { label: "Galería", href: "#galeria" },
  { label: "Ubicación", href: "#ubicacion" },
];

interface HeaderProps {
  onCta: () => void;
}

export default function Header({ onCta }: HeaderProps) {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: solid
          ? "rgba(251,250,245,0.94)"
          : "linear-gradient(180deg, rgba(20,27,13,0.72) 0%, rgba(20,27,13,0.40) 60%, rgba(20,27,13,0) 100%)",
        backdropFilter: solid ? "saturate(140%) blur(12px)" : "none",
        WebkitBackdropFilter: solid ? "saturate(140%) blur(12px)" : "none",
        borderBottom: solid ? "1px solid var(--border-subtle)" : "none",
        transition:
          "background var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--container-xl)",
          margin: "0 auto",
          padding: "16px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a href="#" style={{ display: "flex", alignItems: "center" }}>
          <Image
            src={solid ? "/assets/logo/los-olivos-logo.png" : "/assets/logo/los-olivos-logo-white.png"}
            alt="Los Olivos · Residencial Campestre"
            width={220}
            height={56}
            style={{ height: 52, width: "auto" }}
            priority
          />
        </a>
        <nav style={{ display: "flex", alignItems: "center", gap: 30 }}>
          {NAV.map((n) => (
            <span key={n.href} className="lo-nav-link">
              <a
                href={n.href}
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 14,
                  fontWeight: 500,
                  color: solid
                    ? "var(--text-secondary)"
                    : "rgba(255,255,255,0.92)",
                  textDecoration: "none",
                  letterSpacing: "0.01em",
                  whiteSpace: "nowrap",
                }}
              >
                {n.label}
              </a>
            </span>
          ))}
          <button
            onClick={onCta}
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 14,
              fontWeight: 600,
              padding: "10px 20px",
              borderRadius: "var(--radius-pill)",
              border: solid ? "none" : "1px solid rgba(255,255,255,0.4)",
              cursor: "pointer",
              background: solid ? "var(--olive-600)" : "rgba(255,255,255,0.15)",
              color: "var(--white)",
              transition: "background var(--dur-fast) var(--ease-standard)",
              whiteSpace: "nowrap",
            }}
          >
            Agendar visita
          </button>
        </nav>
      </div>
    </header>
  );
}
