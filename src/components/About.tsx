import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-32 px-6">
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
              Efficiency
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm passionate about streamlining processes and creating systems 
              that enable organizations to operate at their full potential.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With experience in both retail operations and organizational 
              management, I bring a unique perspective to solving complex 
              operational challenges.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My approach combines analytical thinking with a deep understanding 
              of human dynamics to build processes that work for everyone.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
