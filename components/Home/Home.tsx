import About from "./About/About";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div className="overflow-hidden  ">
      <Hero />
      <Services />
      <About />
    </div>
  );
};

export default Home;
