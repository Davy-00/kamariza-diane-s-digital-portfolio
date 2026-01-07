import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="pt-20">
        <Contact />
      </div>
    </div>
  );
};

export default ContactPage;
