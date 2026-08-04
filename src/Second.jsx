import React from "react";
import Card from "./Card";
import secContent from "./Extra/secContent";
import "./Style/Second.css"

function secDisplay(thing) {
  return (
    <Card
      heading={thing.heading}
      key={thing.id}
      img={thing.img}
      para={thing.para}
      id={thing.id}
    />
  );
}

function Second() {
  return (
    <div>
      <div className="bigBox" id="bigBox">
        <h2 className="secText secHeading">How <span style={{fontWeight:"bold"}}>Learn Loop</span> Works</h2>
        <p className="secText secPara">
          Learning and sharing skills has never been easier. Follow <br></br>
          these simple steps to start your journey.
        </p>
        <div className="secParent" >{secContent.map(secDisplay)}</div>
      </div>
    </div>
  );
}

export default Second;
