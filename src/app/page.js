import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import CodingProfiles from "@/components/CodingProfiles";
import Contact from "@/components/Contact";
import ScrollProgress from "@/components/ScrollProgress";
import Preloader from "@/components/Preloader";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Preloader />
      <ScrollToTop />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <CodingProfiles />
      <Contact />
    </main>
  );
}
