import Navigation from "@/components/Navigation";
import Skills from "@/components/Skills";

const SkillsPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="pt-20">
        <Skills />
      </div>
    </div>
  );
};

export default SkillsPage;
