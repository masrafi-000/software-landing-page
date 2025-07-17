"use client";

import { useEffect } from "react";
import About from "./About/About";
import Blog from "./Blog/Blog";
import Hero from "./Hero/Hero";
import Project from "./Project/Project";
import Review from "./Review/Review";
import Services from "./Services/Services";
import Software from "./Software/Software";
import WhyChoose from "./WhyChoose/WhyChoose";

import AOS from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

  useEffect(() => {
    const initAOS = async () => {
      await import('aos')
      AOS.init({
        duration: 1000,
        once: true,
        easing: 'ease',
        mirror:false,
        anchorPlacement: 'top-bottom',
      })

    }

    initAOS()
  }, [])

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
