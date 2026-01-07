import Navigation from "@/components/Navigation";
import Experience from "@/components/Experience";

const ExperiencePage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="pt-20">
        <Experience />
      </div>
    </div>
  );
};

export default ExperiencePage;
