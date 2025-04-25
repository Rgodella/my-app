import React from "react";
import css from "../Assests/css.png";
import html from "../Assests/html.png";
import js from "../Assests/javascript.png";
import react from "../Assests/react.png";
import rest from "../Assests/rest.png";
import node from "../Assests/node.png";
import express from "../Assests/express.png";
import mongo from "../Assests/mongo1.png";
import sql from "../Assests/sql.png";
import git from "../Assests/github.png";
import "./Skills.css";

export default function Skills() {
  return (
    <div>
      <div className="skills">
        <div className="header">Full-Stack Warrior</div>
        <div className="skills-x1">
          <div className="skill">
            <img src={js} alt="" className="logoImg" />
            Javascript
          </div>
          <div className="skill">
            <img src={html} alt="" className="logoImg" />
            HTML5
          </div>
          <div className="skill">
            <img src={css} alt="" className="logoImg" />
            CSS3
          </div>
          <div className="skill">
            <img src={react} alt="" className="logoImg" />
            React
          </div>
          <div className="field">Front End</div>
        </div>
        <div className="skills-x2">
          <div className="skill">
            <img src={node} alt="" className="logoImg" />
            Node.Js
          </div>
          <div className="skill">
            <img src={express} alt="" className="logoImg" />
            Express.Js
          </div>
          <div className="skill">
            <img src={rest} alt="" className="logoImg" />
            REST API
          </div>
          <div className="skill">
            <img src={git} alt="" className="logoImg" />
            Github
          </div>
          <div className="field">Back End</div>
        </div>
        <div className="skills-x3">
          <div className="skill">
            <img src={sql} alt="" className="logoImg" />
            SQL
          </div>
          <div className="skill">
            <img src={mongo} alt="" className="logoImg" />
            mongoDB
          </div>
        </div>
      </div>
    </div>
  );
}
