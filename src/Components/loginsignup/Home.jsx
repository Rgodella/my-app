import React from "react";
import "./Home.css";
import pic from "../Assests/rgodella1.png";

export default function Home() {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("rgodella_cv.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "rgodella_cv.pdf";
        alink.click();
      });
    });
  };
  return (
    <div>
      <div className="container1">
        <div>
          <h4 className="h2-name">HELLO!</h4>
          <h2 className="h2-name1">I Am Rahul Godella</h2>
          <h2 className="h2-name2">FULL STACK DEVELOPER</h2>
          <p className="text">
            I have 3+ years of experience as a Full Stack Developer. I
            specialize in backend development, complemented by front-end
            technology skills. I Aim to leverage my development and
            problem-solving expertise to contribute to innovative solutions in a
            dynamic team environment.
          </p>
          <button onClick={onButtonClick} className="resume-btn">
            Resume
          </button>
        </div>
        <div>
          <img src={pic} alt="" className="profile" />
        </div>
      </div>
    </div>
  );
}
