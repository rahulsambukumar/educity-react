import React from "react";
import "./Programs.css";
import program_1 from "../../assets/program-1.jpg";
import program_4 from "../../assets/program4.jpg";
import program_3 from "../../assets/program-3.jpg";
import graduate from "../../assets/graduate.png";
import higher_education from "../../assets/higher-education.png";
import university from "../../assets/university.png";
function Programs() {
  return (
    <>
      <div className="programs">
        <div className="program">
          <img src={program_1} alt="" />
          <div className="caption">
            <img src={graduate} />
            <p>Post Graduation</p>
          </div>
        </div>
        <div className="program">
          <img src={program_4} alt="" />
          <div className="caption">
            <img src={higher_education} />
            <p>Bachelors Degree</p>
          </div>
        </div>
        <div className="program">
          <img src={program_3} alt="" />
          <div className="caption">
            <img src={university} />
            <p>Masters Degree</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Programs;
