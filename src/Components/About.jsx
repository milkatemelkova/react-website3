import React from "react";
import aboutImage from "../images/about.png";

function About() {
  return (
    <div id="about">
      <div className="about-text">
        <h1>UPCOMING EVENT</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde facilis
          porro excepturi placeat voluptatem sequi aperiam labore? Tenetur quo
          deleniti voluptates.
        </p>
        <button>Read More</button>
      </div>
      <div className="about-image">
        <img src={aboutImage} alt="" />
      </div>
    </div>
  );
}

export default About;
