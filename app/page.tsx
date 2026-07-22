import About from "@/components/About";
import Areas from "@/components/Areas";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PatientCare from "@/components/PatientCare";
import Process from "@/components/Process";
import Services from "@/components/Services";
import StructuredData from "@/components/StructuredData";

export default function Home() {
  return (
    <>
      <StructuredData />

      <main className="min-h-screen overflow-x-hidden bg-[#ffffff] pb-[4.4rem] text-slate-950 md:pb-0">
        <Navbar />
        <Hero />
        <PatientCare />
        <Services />
        <Areas />
        <Process />
        <About />
        <FAQ />
        <Contact />
        <Footer />
      </main>
    </>
  );
}