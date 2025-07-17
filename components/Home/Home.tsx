import About from "./About/About";
import Blog from "./Blog/Blog";
import Hero from "./Hero/Hero";
import Project from "./Project/Project";
import Review from "./Review/Review";
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
      <Review />
      <Blog />
    </div>
  );
};

export default Home;
