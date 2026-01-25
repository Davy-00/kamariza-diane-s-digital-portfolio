import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { jsPDF } from "jspdf";
import profilePhoto from "@/assets/profile-photo.jpeg";

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
    doc.text("Software Developer & Embedded Systems Engineer", 20, y);
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
    doc.text("Email: kamarizadiana007@gmail.com", 20, y);
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
      "Passionate Software Developer and Embedded Systems Engineer dedicated to creating innovative solutions that bridge software and hardware. Expertise in full-stack development, IoT systems, and embedded programming with experience building e-commerce platforms and intelligent hardware-software integrations.",
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
    
    // MERRY360X
    doc.setFontSize(12);
    doc.setTextColor(...primaryColor);
    doc.text("MERRY360X", 20, y);
    doc.setFontSize(10);
    doc.setTextColor(...mutedColor);
    doc.text("(merry360x.com)", 46, y);
    y += 6;
    doc.text("Software Developer & Embedded Systems Engineer | 2026 — Present", 20, y);
    y += 6;
    doc.text("• Developing software solutions and embedded systems", 25, y);
    y += 5;
    doc.text("• Building scalable applications and IoT integration projects", 25, y);
    y += 5;
    doc.text("• Creating robust systems bridging software and hardware technologies", 25, y);
    y += 12;
    
    // MERRY360 GLOBAL
    doc.setFontSize(12);
    doc.setTextColor(...primaryColor);
    doc.text("MERRY360 GLOBAL", 20, y);
    doc.setFontSize(10);
    doc.setTextColor(...mutedColor);
    doc.text("(merry360global.com)", 58, y);
    y += 6;
    doc.text("Software Developer & Embedded Systems Engineer | 2025 — Present", 20, y);
    y += 6;
    doc.text("• Developing innovative software solutions and embedded systems", 25, y);
    y += 5;
    doc.text("• Building scalable web applications and implementing IoT systems", 25, y);
    y += 5;
    doc.text("• Creating intelligent hardware-software integrations", 25, y);
    y += 12;
    
    // IWANYU
    doc.setFontSize(12);
    doc.setTextColor(...primaryColor);
    doc.text("IWANYU", 20, y);
    doc.setFontSize(10);
    doc.setTextColor(...mutedColor);
    doc.text("(iwanyu.store)", 38, y);
    y += 6;
    doc.text("Full-Stack Developer | 2023 — Present", 20, y);
    y += 6;
    doc.text("• Developing and maintaining e-commerce platform", 25, y);
    y += 5;
    doc.text("• Implementing product catalog, shopping cart, and user experience features", 25, y);
    y += 5;
    doc.text("• Building responsive web applications using modern technologies", 25, y);
    y += 12;
    
    // SPPLYPLUS
    doc.setFontSize(12);
    doc.setTextColor(...primaryColor);
    doc.text("SPPLYPLUS", 20, y);
    doc.setFontSize(10);
    doc.setTextColor(...mutedColor);
    doc.text("(spplyplus.store)", 44, y);
    y += 6;
    doc.text("Full-Stack Developer | 2021 — 2022", 20, y);
    y += 6;
    doc.text("• Developed e-commerce platform with inventory and payment processing", 25, y);
    y += 5;
    doc.text("• Implemented customer experience optimization features", 25, y);
    y += 5;
    doc.text("• Built responsive applications using modern frameworks", 25, y);
    y += 15;
    
    // Divider
    doc.line(20, y, 190, y);
    y += 10;
    
    // Check if we need a new page
    if (y > 240) {
      doc.addPage();
      y = 20;
    }
    
    // Skills
    doc.setFontSize(14);
    doc.setTextColor(...primaryColor);
    doc.text("TECHNICAL SKILLS", 20, y);
    y += 8;
    
    doc.setFontSize(11);
    doc.setTextColor(...mutedColor);
    const skills = [
      "Full-Stack Development • Embedded Systems • IoT Systems • Arduino Programming",
      "Web Applications • E-commerce Platforms • Hardware-Software Integration",
      "Sensor Integration • Robotics • Real-time Monitoring Systems • C/C++",
      "React • TypeScript • JavaScript • Modern Web Frameworks"
    ];
    skills.forEach(skill => {
      doc.text(skill, 20, y);
      y += 6;
    });
    
    y += 10;
    
    // Projects
    doc.setFontSize(14);
    doc.setTextColor(...primaryColor);
    doc.text("NOTABLE PROJECTS", 20, y);
    y += 8;
    
    doc.setFontSize(11);
    doc.setTextColor(...mutedColor);
    
    doc.setFontSize(10);
    doc.setTextColor(...primaryColor);
    doc.text("• Arduino Smoke Detection System", 20, y);
    y += 5;
    doc.setTextColor(...mutedColor);
    doc.text("  Built intelligent smoke detection with MQ-2 sensor, LCD display, PPM measurement", 20, y);
    y += 7;
    
    doc.setTextColor(...primaryColor);
    doc.text("• Temperature & Humidity Monitor", 20, y);
    y += 5;
    doc.setTextColor(...mutedColor);
    doc.text("  Environmental monitoring system with DHT sensors and real-time LCD display", 20, y);
    y += 7;
    
    doc.setTextColor(...primaryColor);
    doc.text("• Autonomous Robot Car", 20, y);
    y += 5;
    doc.setTextColor(...mutedColor);
    doc.text("  4-wheel drive obstacle-avoiding robot with ultrasonic sensors and motor control", 20, y);
    y += 7;
    
    doc.setTextColor(...primaryColor);
    doc.text("• E-commerce Platforms", 20, y);
    y += 5;
    doc.setTextColor(...mutedColor);
    doc.text("  Built multiple full-featured online stores with inventory and payment systems", 20, y);
    
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
