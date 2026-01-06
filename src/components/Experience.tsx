import { motion } from "framer-motion";

const experiences = [
  {
    company: "Iwanyu",
    role: "Operations Manager",
    period: "June 2025 — Present",
    description:
      "Leading internal operations and process optimization initiatives, implementing efficient workflows and driving organizational excellence.",
  },
  {
    company: "Phones Stor",
    role: "Internal Operations Specialist",
    period: "2024 — January 2025",
    description:
      "Managed day-to-day operational activities, streamlined internal processes, and coordinated cross-functional teams for optimal efficiency.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-32 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-sm tracking-[0.3em] text-muted-foreground uppercase">
            Experience
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-display font-light tracking-tight">
            Work History
          </h2>
        </motion.div>

        <div className="mt-16 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative pl-8 border-l border-border hover:border-foreground transition-colors duration-300"
            >
              <div className="absolute left-0 top-0 w-2 h-2 -translate-x-[5px] rounded-full bg-muted-foreground group-hover:bg-foreground transition-colors duration-300" />
              
              <span className="text-sm text-muted-foreground">{exp.period}</span>
              <h3 className="mt-2 text-2xl font-display font-medium">{exp.company}</h3>
              <p className="mt-1 text-muted-foreground">{exp.role}</p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
