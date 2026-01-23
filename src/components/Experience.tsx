import { motion } from "framer-motion";

const experiences = [
  {
    company: "Merry360X",
    website: "https://merry360x.com",
    role: "Software Developer & Embedded Systems Engineer",
    period: "2026 — Present",
    description:
      "Developing software solutions and embedded systems for merry360x.com. Building scalable applications, working on IoT integration projects, and creating robust systems bridging software and hardware technologies.",
  },
  {
    company: "Merry360 Global",
    website: "https://merry360global.com",
    role: "Software Developer & Embedded Systems Engineer",
    period: "2025 — Present",
    description:
      "Developing innovative software solutions and embedded systems for merry360global.com. Building scalable web applications, implementing IoT systems, and creating intelligent hardware-software integrations for global digital platforms.",
  },
  {
    company: "Iwanyu",
    website: "https://iwanyu.store",
    role: "Full-Stack Developer",
    period: "2023 — Present",
    description:
      "Developing and maintaining e-commerce platform (iwanyu.store), implementing features for product catalog management, shopping cart functionality, and user experience optimization. Building responsive web applications using modern technologies.",
  },
  {
    company: "SpplyPlus",
    website: "https://spplyplus.store",
    role: "Full-Stack Developer",
    period: "2021 — 2022",
    description:
      "Developed and maintained e-commerce platform (spplyplus.store), implementing features for inventory management, payment processing, and customer experience optimization. Built responsive web applications using modern frameworks and technologies.",
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
            Professional experience in software development, embedded systems engineering, and building scalable digital solutions.
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
              <h3 className="mt-2 text-2xl font-display font-medium">
                {exp.website ? (
                  <a 
                    href={exp.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-foreground/80 transition-colors inline-flex items-center gap-2"
                  >
                    {exp.company}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ) : (
                  exp.company
                )}
              </h3>
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
