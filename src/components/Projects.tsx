import { motion } from "framer-motion";
import smokeDetection from "@/assets/smoke-detection.jpg";
import gasDetector from "@/assets/gas-detector.jpg";
import tempHumidity from "@/assets/temp-humidity.jpg";
import robotCar from "@/assets/robot-car.jpg";

const projects = [
  {
    title: "Arduino Smoke Detection System",
    description: "Built an intelligent smoke detection system using MQ-2 gas sensor with Arduino. Features real-time PPM measurement display on LCD screen with buzzer alarm for hazardous smoke levels.",
    image: smokeDetection,
    technologies: ["Arduino", "MQ-2 Sensor", "LCD Display", "C++"],
  },
  {
    title: "Gas & Smoke Sensor Module",
    description: "Developed a compact gas and smoke detection module with MQ series sensors. Integrated multiple sensor inputs for comprehensive air quality monitoring in embedded systems.",
    image: gasDetector,
    technologies: ["Arduino", "Gas Sensors", "Embedded C", "IoT"],
  },
  {
    title: "Temperature & Humidity Monitor",
    description: "Created an environmental monitoring system using DHT11/DHT22 sensors. Displays real-time temperature and humidity readings on LCD with data logging capabilities.",
    image: tempHumidity,
    technologies: ["Arduino", "DHT Sensor", "LCD I2C", "Sensors"],
  },
  {
    title: "Autonomous Robot Car",
    description: "Engineered a 4-wheel drive obstacle-avoiding robot using ultrasonic sensors. Implemented autonomous navigation algorithms with motor control and sensor fusion.",
    image: robotCar,
    technologies: ["Arduino", "Ultrasonic Sensor", "Motor Drivers", "Robotics"],
  },
];

const Projects = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm tracking-[0.3em] text-muted-foreground uppercase">
            Portfolio
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-display font-light tracking-tight">
            Embedded Systems Projects
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Showcasing hands-on experience with Arduino, IoT systems, and hardware-software integration projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group border border-border rounded-2xl overflow-hidden hover:border-foreground/50 transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-video bg-secondary">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-medium mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs border border-border rounded-full text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
