import React from "react";
import { image } from "../data/user";

function About() {
  return (
    <div id="about">
      <h2>About</h2>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;


