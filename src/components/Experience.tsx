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
    company: "Dream City",
    role: "Shop Assistant",
    period: "2024 — January 2025",
    description:
      "Assisted customers with electronic device purchases, provided product recommendations, managed inventory, and ensured excellent customer service in a fast-paced retail environment.",
  },
];

const Experience = () => {
  return (
    <section className="py-24 px-6 bg-secondary/30">
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
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            A journey of growth, learning, and delivering results across different roles and industries.
          </p>
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

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 p-8 border border-border rounded-2xl text-center"
        >
          <p className="text-muted-foreground">
            Interested in my background?{" "}
            <a href="/resume" className="text-foreground underline underline-offset-4 hover:no-underline">
              Download my full CV
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
