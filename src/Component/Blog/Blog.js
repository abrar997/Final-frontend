import React, { useState } from "react";
// img
import imgg1 from "./BlogIamges/b1.webp";
import imgg2 from "./BlogIamges/b2.webp";
import imgg3 from "./BlogIamges/b3.webp";
import imgg4 from "./BlogIamges/b4.webp";
// style
import "./Blog.css";



const Blog = () => {
  const [blog, setBlog] = useState([
    {
      img: imgg1,
      name: "different between html,html5 css,css3",
      source: "17 October, 2019 | By Mark Wiens",
      text: "Computers have become ubiquitous in almost every facet of our lives. At work, desk jockeys spend hours in front of their desktops, while delivery",
    },
    {
      img: imgg2,
      name: "new version react",
      source: "31 October, 1997 | By ME",
      text: "Computers have become ubiquitous in almost every facet of our lives. At work, desk jockeys spend hours in front of their desktops, while delivery",
    },
    {
      img: imgg3,
      name: "different between react and angular",
      source: "4 march, 2018 | By Mark Wiens",
      text: "Computers have become ubiquitous in almost every facet of our lives. At work, desk jockeys spend hours in front of their desktops, while delivery",
    },
    {
      img: imgg4,
      name: "different between vue js and  node js",
      source: "1 january, 1999 | By tamtam ",
      text: "Computers have become ubiquitous in almost every facet of our lives. At work, desk jockeys spend hours in front of their desktops, while delivery",
    },
  ]);


  return (
    <div className="Blogs">
      <div className="container">
        <div className="row">
          <div data-aos="fade-right">
            <h1> Latest Posts From Blog</h1>
            <p>
              There is a moment in the life of any aspiring astronomer that it
              is time to buy that first telescope. It’s exciting to think about
              setting up your own viewing station.
            </p>
          </div>
          <div className="cards d-flex">
            {blog.map((blog, inda) => {
              return (
                <div
                  className="card col-lg-3 col-sm-6 col-xs-6 col-md-6"
                  key={inda}
                >
                  <img src={blog.img} />
                  <h6> {blog.source} </h6>
                  <h3> {blog.name} </h3>
                  <hr />
                  <p>{blog.text} </p>
                  {/* <button>see more</button> */}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
