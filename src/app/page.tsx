import Hero from "@/components/Hero";
import ProjectsGrid from "@/components/ProjectsGrid";
import Timeline from "@/components/Timeline";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { LanguageProvider } from "@/context/LanguageContext";

export default function Home() {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-white selection:bg-emerald-100 selection:text-emerald-900 relative overflow-x-hidden">
        <LanguageSwitcher />
        <Hero />
        <TechStack />
        <ProjectsGrid />
        <Timeline />
        <Footer />
      </main>
    </LanguageProvider>
  );
}
