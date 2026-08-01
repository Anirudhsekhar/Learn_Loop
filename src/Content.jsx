import React from "react";
import "./Style/Content.css";
import first_img from "./assets/First_img.png"

function Content() {
  return (
    <div className="Conetent1">
      <div className="Content_box">
        <h2 className="text" id="conHeading">
          Every Student <br></br>Has a Skill <br></br> Worth <br></br>Sharing
        </h2>
        <p className="text" id="conText">
          Whether you're a beginner or an expert,<br></br> Learn Loop helps you
          connect, collaborate, and<br></br> exchange skills with fellow
          students.
        </p>
        <div className="Content_image">
          <img src={first_img} id="first_img"/>
        </div>
      </div>
    </div>
  );
}

export default Content;
