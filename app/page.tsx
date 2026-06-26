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
      <ValueProps />
      <MasterPlan />
      <Amenities />
      <Gallery />
      <Location />
      <LeadForm />
      <Footer />
    </main>
  );
}
