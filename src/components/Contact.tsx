import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6">
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
          className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8"
        >
          <a
            href="mailto:kamariza.diane@email.com"
            className="group flex items-center gap-3 px-6 py-4 border border-border rounded-full hover:border-foreground transition-colors duration-300"
          >
            <Mail className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            <span className="text-muted-foreground group-hover:text-foreground transition-colors">
              kamariza.diane@email.com
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

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-32 pt-8 border-t border-border text-center"
        >
          <p className="text-sm text-muted-foreground">
            © 2025 Kamariza Diane. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
