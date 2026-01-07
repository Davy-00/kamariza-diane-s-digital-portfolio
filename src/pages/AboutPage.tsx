import Navigation from "@/components/Navigation";
import About from "@/components/About";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="pt-20">
        <About />
      </div>
    </div>
  );
};

export default AboutPage;
