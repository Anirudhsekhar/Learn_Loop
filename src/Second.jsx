import React from "react";
import Card from "./Card";
import secContent from "./Extra/secContent"

function secDisplay(thing) {
  return (
    <Card
      heading={thing.heading}
      key={thing.id}
      img={thing.img}
      para={thing.para}
    />
  );
}

function Second() {
  return (
    <div>
      <div className="bigBox" id="bigBox">
        <h2 className="secText secHeading">How Learn Loop Works</h2>
        <p className="secText secPara">
          Learning and sharing skills has never been easier. Follow <br></br>
          these simple steps to start your journey.
        </p>
        {secContent.map(secDisplay)}
      </div>
    </div>
  );
}

export default Second;
