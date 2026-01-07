import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { jsPDF } from "jspdf";
import profilePhoto from "@/assets/profile-photo.jpg";

const CVDownload = () => {
  const handleDownload = async () => {
    const doc = new jsPDF();
    
    // Set up fonts and colors
    const primaryColor = [51, 51, 51] as const;
    const mutedColor = [102, 102, 102] as const;
    
    // Load profile image
    const loadImage = (src: string): Promise<string> => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = () => {
          const canvas = document.createElement("canvas");
          canvas.width = img.width;
          canvas.height = img.height;
          const ctx = canvas.getContext("2d");
          if (ctx) {
            ctx.drawImage(img, 0, 0);
            resolve(canvas.toDataURL("image/jpeg"));
          } else {
            reject(new Error("Failed to get canvas context"));
          }
        };
        img.onerror = reject;
        img.src = src;
      });
    };

    try {
      const imageData = await loadImage(profilePhoto);
      
      // Add circular profile photo (positioned in top right)
      doc.addImage(imageData, "JPEG", 155, 15, 35, 35);
    } catch (error) {
      console.log("Could not load profile image:", error);
    }
    
    let y = 20;
    
    // Header
    doc.setFontSize(24);
    doc.setTextColor(...primaryColor);
    doc.text("KAMARIZA DIANE", 20, y);
    y += 10;
    
    doc.setFontSize(12);
    doc.setTextColor(...mutedColor);
    doc.text("Operations Manager & Internal Operations Specialist", 20, y);
    y += 25; // Extra space to clear the photo
    
    // Divider (positioned below the photo)
    doc.setDrawColor(200, 200, 200);
    doc.line(20, y, 190, y);
    y += 10;
    
    // Contact
    doc.setFontSize(14);
    doc.setTextColor(...primaryColor);
    doc.text("CONTACT", 20, y);
    y += 8;
    
    doc.setFontSize(11);
    doc.setTextColor(...mutedColor);
    doc.text("Email: dianekamariza139@gmail.com", 20, y);
    y += 6;
    doc.text("Phone: +250 798 610 543", 20, y);
    y += 6;
    doc.text("Location: Kigali, Rwanda", 20, y);
    y += 15;
    
    // Divider
    doc.line(20, y, 190, y);
    y += 10;
    
    // Professional Summary
    doc.setFontSize(14);
    doc.setTextColor(...primaryColor);
    doc.text("PROFESSIONAL SUMMARY", 20, y);
    y += 8;
    
    doc.setFontSize(11);
    doc.setTextColor(...mutedColor);
    const summary = doc.splitTextToSize(
      "Results-driven Operations Manager with expertise in streamlining processes, optimizing workflows, and driving organizational efficiency. Passionate about creating systems that empower teams to perform at their best.",
      170
    );
    doc.text(summary, 20, y);
    y += summary.length * 6 + 10;
    
    // Divider
    doc.line(20, y, 190, y);
    y += 10;
    
    // Experience
    doc.setFontSize(14);
    doc.setTextColor(...primaryColor);
    doc.text("EXPERIENCE", 20, y);
    y += 10;
    
    // IWANYU
    doc.setFontSize(12);
    doc.setTextColor(...primaryColor);
    doc.text("IWANYU", 20, y);
    y += 6;
    doc.setFontSize(10);
    doc.setTextColor(...mutedColor);
    doc.text("Operations Manager | June 2025 — Present", 20, y);
    y += 6;
    doc.text("• Leading internal operations and process optimization initiatives", 25, y);
    y += 5;
    doc.text("• Implementing efficient workflows and operational strategies", 25, y);
    y += 5;
    doc.text("• Managing cross-functional teams and stakeholder relationships", 25, y);
    y += 5;
    doc.text("• Driving continuous improvement across all operational areas", 25, y);
    y += 12;
    
    // DREAM CITY
    doc.setFontSize(12);
    doc.setTextColor(...primaryColor);
    doc.text("DREAM CITY", 20, y);
    y += 6;
    doc.setFontSize(10);
    doc.setTextColor(...mutedColor);
    doc.text("Shop Assistant | 2024 — January 2025", 20, y);
    y += 6;
    doc.text("• Assisted customers with electronic device purchases and inquiries", 25, y);
    y += 5;
    doc.text("• Provided product recommendations based on customer needs", 25, y);
    y += 5;
    doc.text("• Managed inventory and maintained organized product displays", 25, y);
    y += 5;
    doc.text("• Ensured excellent customer service in a fast-paced retail environment", 25, y);
    y += 15;
    
    // Divider
    doc.line(20, y, 190, y);
    y += 10;
    
    // Skills
    doc.setFontSize(14);
    doc.setTextColor(...primaryColor);
    doc.text("SKILLS", 20, y);
    y += 8;
    
    doc.setFontSize(11);
    doc.setTextColor(...mutedColor);
    const skills = [
      "Process Optimization • Team Leadership • Strategic Planning • Project Management",
      "Inventory Management • Data Analysis • Workflow Design • Cross-functional Collaboration"
    ];
    skills.forEach(skill => {
      doc.text(skill, 20, y);
      y += 6;
    });
    
    // Save PDF
    doc.save("Kamariza_Diane_CV.pdf");
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
