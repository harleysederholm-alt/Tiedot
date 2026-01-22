import Hero from "@/components/Hero";
import ProjectsGrid from "@/components/ProjectsGrid";
import Timeline from "@/components/Timeline";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-emerald-900/10 via-transparent to-cyan-900/10 pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <ProjectsGrid />
        <Timeline />
        <TechStack />
        <Footer />
      </div>
    </main>
  );
}
