import React, { useState } from "react";
// comp
import First from "./First";
import OurInstructor from "./OurInstructor";
import AskTeam from "./AskTeam";
import Footer from "../Footer/Footer";
import InstrServices from "./InstrServices";
import Stepper from "./Stepper/Stepper";
// style
import "./Team.css";

// img
import img1 from "./TeamImage/img1.jpg";
import img2 from "./TeamImage/img2.jpg";
import img3 from "./TeamImage/img3.jpg";


const Team = () => {
  const [services, setServices] = useState([
    {
      img: img1,
      name: "Teach your way",
      text: "Publish the course you want, in the way you want, and always have of control your own content.",
    },
    {
      img: img2,
      name: "Inspire learners",
      text: "Teach what you know and help learners explore their interests, gain new skills, and advance their careers.",
    },
    {
      img: img3,
      name: "Get rewarded",
      text: "Expand your professional network, build your expertise, and earn money on each paid enrollment.",
    },
  ]);

  return (
    <div className="team" id="team">
      <First />
      <InstrServices services={services} />
      <Stepper />
      <OurInstructor />
      <AskTeam />
      <Footer />
    </div>
  );
};

export default Team;
