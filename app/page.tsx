import LandingClient from "./components/LandingClient";
import About from "./components/About";
import Features from "./components/Features";
import ValueProps from "./components/ValueProps";
import MasterPlan from "./components/MasterPlan";
import Amenities from "./components/Amenities";
import Gallery from "./components/Gallery";
import Location from "./components/Location";
import LeadForm from "./components/LeadForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <LandingClient />
      <About />
      <Features />
      {/* <ValueProps /> */}
      <MasterPlan />
      <Amenities />
      <Gallery />
      <Location />
      <LeadForm />
      <section style={{ background: "var(--surface-page)", padding: "16px 32px 56px" }}>
        <div
          style={{
            maxWidth: 720,
            margin: "0 auto",
            background: "var(--surface-brand-deep)",
            borderRadius: "var(--radius-2xl)",
            padding: "44px 52px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 32,
            flexWrap: "wrap",
            boxShadow: "var(--shadow-lg)",
          }}
        >
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 16 }}>
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--olive-300)",
              }}
            >
              Desarrollado por
            </span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/camvi78-logo-white.webp"
              alt="Camvi 78"
              style={{ height: 64, width: "auto", opacity: 0.95, display: "block", transform: "translateY(-5px)" }}
            />
          </div>
          <a
            href="https://camvi78.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 14,
              fontWeight: 600,
              padding: "12px 26px",
              borderRadius: "var(--radius-pill)",
              border: "1px solid rgba(255,255,255,0.28)",
              background: "rgba(255,255,255,0.08)",
              color: "var(--white)",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            Visitar Camvi 78
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
