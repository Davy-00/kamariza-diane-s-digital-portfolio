import { motion } from "framer-motion";

const skills = [
  "Process Optimization",
  "Team Leadership",
  "Strategic Planning",
  "Project Management",
  "Inventory Management",
  "Data Analysis",
  "Workflow Design",
  "Cross-functional Collaboration",
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-sm tracking-[0.3em] text-muted-foreground uppercase">
            Expertise
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-display font-light tracking-tight">
            Skills & Capabilities
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap gap-3"
        >
          {skills.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="px-5 py-2.5 border border-border rounded-full text-sm text-muted-foreground hover:text-foreground hover:border-foreground transition-colors duration-200 cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
