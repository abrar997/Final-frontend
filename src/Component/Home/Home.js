import React from "react";
import Services from "../Services/Services";
import Courses from "../Courses/Courses";
import About from "../About/About";
import Companys from "../Companys/Companys";
import Instro from "../Instro/Instro";
import Latest from "../Latest/Latest";
import Opinion from "../Opinion/Opinion";
import Blog from "../Blog/Blog";
import Footer from '../Footer/Footer'
import NewSection from "../newSection/NewSection";
const Home = () => {
  return (
    <>
    <div>
      {/*  */}
      <NewSection />

      {/* services cards */}
      <Services />
      {/* name of companies */}
      <Companys />
      {/* courses */}
      <Courses />
      {/* about */}
      <About />
      {/* our student say */}
      <Latest />
      {/* Opinion */}
      <Opinion />
      {/* Blog */}
      <Blog />
      {/* instructor */}
      <Instro />
      {/* footer */}
      <Footer />      

      </div>

 </> );
};

export default Home;
