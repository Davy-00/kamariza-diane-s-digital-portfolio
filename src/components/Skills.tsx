import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Operations",
    skills: ["Process Improvement (Lean)", "SOP Development", "Inventory Management", "Vendor Management"],
  },
  {
    title: "Tools",
    skills: ["Microsoft Excel", "Google Workspace", "Trello / Asana", "Slack / Microsoft Teams"],
  },
  {
    title: "Analytics & Delivery",
    skills: ["KPI Reporting", "Project Management", "Power BI (Basics)", "Documentation & Reporting"],
  },
];

const Skills = () => {
  return (
    <section className="py-24 px-6">
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
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            A practical toolkit built through hands-on operations work, structured delivery, and continuous improvement.
          </p>
        </motion.div>

        <div className="mt-16 space-y-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-medium mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, index) => (
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
