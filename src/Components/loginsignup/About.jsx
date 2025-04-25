import React from "react";
import "./About.css";
import pic from "../Assests/react.png";

export default function About() {
  return (
    <div>
      <div className="about">
        <div className="box">
          <div className="leftHead">
            <h3>Glad You are Here!</h3>
            <h3>About Me</h3>
            <p>
              With over 3+ years of hands-on experience in both front-end and
              back-end technologies, I craft elegant and efficient web
              applications that deliver seamless user experiences. I specialize
              in technologies like HTML, CSS, JavaScript, React, Node.js, and
              more. Whether building robust APIs or creating dynamic, responsive
              websites, I thrive on solving challenges and optimizing
              performance.
            </p>
            <h5>
              I'm convinced that listening to music helps me design faster-but
              only if it's a good playlist
            </h5>
          </div>
          <div className="box1">
            <div className="images">
              <img src={pic} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
