import About from "./About/About";
import Hero from "./Hero/Hero";
import Project from "./Project/Project";
import Services from "./Services/Services";
import Software from "./Software/Software";
import WhyChoose from "./WhyChoose/WhyChoose";

const Home = () => {
  return (
    <div className="overflow-hidden  ">
      <Hero />
      <Services />
      <About />
      <WhyChoose />
      <Software />
      <Project />
    </div>
  );
};

export default Home;
