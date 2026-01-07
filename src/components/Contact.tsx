import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-sm tracking-[0.3em] text-muted-foreground uppercase">
            Get in Touch
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-display font-light tracking-tight">
            Let's Connect
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            I'm always open to discussing new opportunities, collaborations, 
            or simply connecting with fellow professionals.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col md:flex-row flex-wrap items-center justify-center gap-4 md:gap-6"
        >
          <a
            href="mailto:dianekamariza139@gmail.com"
            className="group flex items-center gap-3 px-6 py-4 border border-border rounded-full hover:border-foreground transition-colors duration-300"
          >
            <Mail className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            <span className="text-muted-foreground group-hover:text-foreground transition-colors">
              dianekamariza139@gmail.com
            </span>
          </a>

          <a
            href="tel:+250798610543"
            className="group flex items-center gap-3 px-6 py-4 border border-border rounded-full hover:border-foreground transition-colors duration-300"
          >
            <Phone className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            <span className="text-muted-foreground group-hover:text-foreground transition-colors">
              +250 798 610 543
            </span>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-4 border border-border rounded-full hover:border-foreground transition-colors duration-300"
          >
            <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            <span className="text-muted-foreground group-hover:text-foreground transition-colors">
              LinkedIn
            </span>
          </a>

          <div className="flex items-center gap-3 px-6 py-4 text-muted-foreground">
            <MapPin className="w-5 h-5" />
            <span>Kigali, Rwanda</span>
          </div>
        </motion.div>

        {/* Availability notice */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 p-8 border border-border rounded-2xl text-center"
        >
          <h3 className="text-lg font-medium mb-2">Open to Opportunities</h3>
          <p className="text-muted-foreground">
            Currently available for full-time positions and exciting collaborations.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
