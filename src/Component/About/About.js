import React, { Component } from 'react'
// style
import "./About.css";
// img
import img1 from "./aboutImage/girll.webp";
import img2 from "./aboutImage/group.webp";


export class About extends Component {
  constructor(props){
    super(props);
    this.state={
    h1: "About us",
    describe:
      "History at its most interesting is complex, a fascinating whirl of events, personalities, and forces, and few periods of history offer us such captivating complexity as Europe's 19th century the often-broadly defined period from the French Revolution to World War I that formed the foundation of the modern world.",
   } 
   
    
  } 
  
  handlechange = () => {
      this.setState({
        h1: "History of Company",
        describe:
          " Teaching Company is the hshh kwing developer and marketer of engaging, premium-quality college level courses for lifelong learners to enjoy via audio or video streaming, mobile apps, downloads, or discs delivered to the home. Under The Great Courses brand, the company is ranked #246 on the Internet Retailer 500.",
      });
    };

  render() {
     return (
       <section id="about">
         <div>
           <div className="container">
             <div className="row">
               <div className="col-lg-6 textss" data-aos="fade-right"
                 ><h4>THE BEST... </h4>
                 <h1>{this.state.h1} </h1>
                 <p>{this.state.describe}</p>
                 <div className="btn">
                   <button onClick={this.handlechange}>our history</button>
                 </div>
               </div>

               <div className="col-lg-6 images">
                 <div className="img1">
                   <img src={img1} />
                 </div>
                 <div className="img2">
                   <img src={img2} />
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>
     );
  }
}

export default About


