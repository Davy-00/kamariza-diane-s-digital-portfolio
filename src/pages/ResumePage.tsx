import Navigation from "@/components/Navigation";
import CVDownload from "@/components/CVDownload";

const ResumePage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="pt-20">
        <CVDownload />
      </div>
    </div>
  );
};

export default ResumePage;
