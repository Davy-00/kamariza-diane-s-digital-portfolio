import { motion } from "framer-motion";
import { Target, Users, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Quality-Focused",
    description: "Committed to writing clean, maintainable code and delivering robust solutions.",
  },
  {
    icon: Users,
    title: "Collaborative",
    description: "Strong team player with excellent communication skills across technical and non-technical teams.",
  },
  {
    icon: Lightbulb,
    title: "Innovative",
    description: "Creative problem-solver with expertise in emerging technologies and embedded systems.",
  },
];

const About = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <span className="text-sm tracking-[0.3em] text-muted-foreground uppercase">
              About Me
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-display font-light tracking-tight">
              Driven by
              <br />
              Innovation
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a passionate software developer and embedded systems engineer dedicated to creating innovative solutions that bridge software and hardware.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With experience developing web applications, e-commerce platforms, and embedded systems, I bring a comprehensive approach to building technology that solves real-world problems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My expertise spans full-stack development, IoT systems, and embedded programming, allowing me to create seamless integrations between digital and physical systems.
            </p>
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <h3 className="text-2xl font-display font-light tracking-tight text-center mb-12">
            Core Values
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 border border-border rounded-2xl hover:border-foreground/50 transition-colors"
              >
                <value.icon className="w-8 h-8 mx-auto text-muted-foreground" />
                <h4 className="mt-4 text-lg font-medium">{value.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
