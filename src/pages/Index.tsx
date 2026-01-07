import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import CVDownload from "@/components/CVDownload";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <CVDownload />
      <Contact />
    </Layout>
  );
};

export default Index;
