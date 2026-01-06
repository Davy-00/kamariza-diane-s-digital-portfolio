import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const CVDownload = () => {
  const handleDownload = () => {
    // Create CV content
    const cvContent = `
KAMARIZA DIANE
Operations Manager & Internal Operations Specialist

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CONTACT
Email: kamariza.diane@email.com
Location: Kigali, Rwanda

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PROFESSIONAL SUMMARY
Results-driven Operations Manager with expertise in streamlining processes, 
optimizing workflows, and driving organizational efficiency. Passionate about 
creating systems that empower teams to perform at their best.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

EXPERIENCE

IWANYU
Operations Manager | June 2025 — Present
• Leading internal operations and process optimization initiatives
• Implementing efficient workflows and operational strategies
• Managing cross-functional teams and stakeholder relationships
• Driving continuous improvement across all operational areas

PHONES STOR
Internal Operations Specialist | 2024 — January 2025
• Managed day-to-day operational activities and inventory systems
• Streamlined internal processes for improved efficiency
• Coordinated with teams to ensure smooth operations
• Developed and maintained operational documentation

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SKILLS
• Process Optimization
• Team Leadership
• Strategic Planning
• Project Management
• Inventory Management
• Data Analysis
• Workflow Design
• Cross-functional Collaboration

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    `.trim();

    // Create blob and download
    const blob = new Blob([cvContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Kamariza_Diane_CV.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-sm tracking-[0.3em] text-muted-foreground uppercase">
            Resume
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-display font-light tracking-tight">
            Download My CV
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Get a complete overview of my professional experience and qualifications.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-10"
          >
            <Button
              onClick={handleDownload}
              size="lg"
              className="group px-8 py-6 text-base rounded-full bg-foreground text-background hover:bg-foreground/90 transition-all duration-300"
            >
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Download CV
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CVDownload;
