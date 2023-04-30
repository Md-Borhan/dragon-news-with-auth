import React from "react";
import Quiz1 from "../../../../../assets/qZone1.png";
import Quiz2 from "../../../../../assets/qZone2.png";
import Quiz3 from "../../../../../assets/qZone3.png";

const Quiz = () => {
  return (
    <div className="bg-light p-1 mt-4">
      <h4 className="py-3 px-2">Q-Zone</h4>
      <img src={Quiz1} alt="" />
      <img src={Quiz2} alt="" />
      <img src={Quiz3} alt="" />
    </div>
  );
};

export default Quiz;
