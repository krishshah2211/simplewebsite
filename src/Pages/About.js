import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import '../styles/About.css'
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom"></div>
      <h1> ABOUT US</h1>
<p>This a Nice Pizza Shop</p>
    </div>
  );
}

export default About;
