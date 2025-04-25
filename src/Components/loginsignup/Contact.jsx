import React from "react";
import "../loginsignup/Contact.css";
import workPic from "../Assests/images.jpg";

export default function Contact() {
  return (
    <div>
      <div className="contact">
        <div className="contact-box">
          <div className="left1">
            <img src={workPic} alt="" className="contactImg" />
          </div>
          <div className="right1">
            <h2>Contact Us</h2>
            <form className="contactBox-Form">
              <input type="text" name="Name" placeholder="Name" />
              <br />
              <input type="email" name="Email" placeholder="Email" />
              <br />
              <div className="message">
                <textarea
                  name="message"
                  id="msg"
                  placeholder="Enter your message"
                  cols="23"
                ></textarea>
              </div>

              <br />
              <div className="submitContact">
                <input type="submit" value="SUBMIT" className="summit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
