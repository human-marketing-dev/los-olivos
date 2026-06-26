"use client";

import Header from "./Header";
import Hero from "./Hero";

export default function LandingClient() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.pageYOffset - 64;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <>
      <Header onCta={() => scrollTo("contacto")} />
      <Hero
        onPrimary={() => scrollTo("contacto")}
        onSecondary={() => scrollTo("concepto")}
      />
    </>
  );
}
