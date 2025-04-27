import React from "react";
import "./Campus.css";
import classroom from "../../assets/classroom.png";
import lab from "../../assets/computerlab.png";
import friends from "../../assets/friends.png";
import library from "../../assets/library.jpg";
import white_arrow from "../../assets/white-arrow.png";
function Campus() {
  return (
    <>
      <div className="campus">
        <div className="gallery">
          <img src={classroom} alt="" />
          <img src={lab} alt="" />
          <img src={friends} alt="" />
          <img src={library} alt="" />
        </div>
        <button className="btn dark-btn">
          See More here <img src={white_arrow} alt="" />
        </button>
      </div>
    </>
  );
}
export default Campus;
