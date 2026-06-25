import { Nav } from "./components/nav";
import { Hero } from "./components/hero";
import { Experience } from "./components/experience";
import { MenuSection } from "./components/menu-section";
import { Gallery } from "./components/gallery";
import { Spaces } from "./components/spaces";
import { Events } from "./components/events";
import { Reservation } from "./components/reservation";
import { Location } from "./components/location";
import { Footer } from "./components/footer";
import { SiteProvider } from "./components/site-provider";

export default function Page() {
  return (
    <SiteProvider>
      <Nav />
      <main>
        <Hero />
        <Experience />
        <MenuSection />
        <Gallery />
        <Spaces />
        <Events />
        <Reservation />
        <Location />
      </main>
      <Footer />
    </SiteProvider>
  );
}
