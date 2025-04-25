import React from "react";
import "../loginsignup/Projects.css";
import bankImg from "../Assests/kBank.jpg";

export default function Projects() {
  return (
    <div>
      <div className="projects">
        <div className="left-proj">
          <div className="img1">
            <img src={bankImg} alt="" className="bankImg" />
          </div>
        </div>
        <div className="right-proj">
          <div className="content1">
            <h4>HomeLoan & CarLoan</h4>
            <p>
              Built the HomeLoan and CarLoan Application from the scratch using
              node.js and react.js
            </p>
            <p>
              Designed and implemented reusable React components to create a
              modular architecture, enhancing maintainability and scalability of
              the application.
            </p>
            <p>
              Implemented user authentication and authorization features,
              securing sensitive loan application data and ensuring compliance
              with security standards.
            </p>
            <p>
              Take a Look at my work by clicking the link below to explore the
              UI and code I creafted for the HomeLoan and CarLoan applications.
              <a
                href="https://karnatakabank.com/personal/loans/home-loans"
                target="_blank"
              >
                https://karnatakabank.com/personal/loans/home-loans
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
