import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Projects } from "@/components/projects";
import { Process } from "@/components/process";
import { Proof } from "@/components/proof";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Process />
        <Proof />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
