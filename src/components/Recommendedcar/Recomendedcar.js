import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import recomenCar1 from "../../imgs/recomendCar1.png";
import recomendCar2 from "../../imgs/recommendCar2.png";
import recomendCar3 from "../../imgs/recomendCar3.png";

import "./recommendedcar.css";
import { useState } from "react";
function Recommendedcar() {
  const [carRecommended, setCarRecommended] = useState([
    {
      id: 1,
      percent: 64,
      Fname: "mini coper",
      url: recomenCar1,
      speed: 123,
      price: 32,
      color: "#e1dfa4",
    },
    {
      id: 2,
      percent: 74,
      url: recomendCar2,
      Fname: "porsch 911 carrera ",
      speed: 130,
      price: 28,
      color: "#e3ecf1",
    },
    {
      id: 3,
      percent: 74,
      url: recomendCar3,
      Fname: "porsch 911 carrera",
      speed: 130,
      price: 28,
      color: "#f4e4e5",
    },
  ]);
  const res = carRecommended.map((ele) => {
    return (
      <div key={ele.id} className="col-lg-4 col-sm-6">
        <div className="car-box" style={{ backgroundColor: ele.color }}>
          <h6>
            <FontAwesomeIcon icon={faArrowsRotate} />
            {ele.percent}% recommended
          </h6>
          <img src={ele.url} alt="" />
          <h5>{ele.Fname}</h5>
          <div className="recomend-footer d-flex justify-content-between">
            <div className="footer-data">
              <FontAwesomeIcon icon={faArrowsRotate} />
              <span>{ele.speed}k/h</span>
              <FontAwesomeIcon icon={faArrowsRotate} />
              <FontAwesomeIcon icon={faCar} />
            </div>
            <span className="price" style={{ fontSize: "14px" }}>
              ${ele.price}/h
            </span>
          </div>
        </div>
      </div>
    );
  });

  return <>{res}</>;
}
export default Recommendedcar;
