import "./carbooking.css";
import { faHeart, faRetweet, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import car1 from "../../imgs/carBokking1.png";
import car2 from "../../imgs/Silver-SUV.png";
import car3 from "../../imgs/carBooking3.png";
import { useState } from "react";

function Cardbooking(e) {
  const [car, setCars] = useState([
    {
      id: 1,
      name: "mercedes",
      subTitle: "couple",
      url: car2,
      num: 4,
      type: "manual",
      price: 800,
    },
    {
      id: 2,
      name: "porche",
      subTitle: "mini",
      url: car1,
      num: 2,
      type: "automatic",
      price: 500,
      active: true,
    },
    {
      id: 3,
      name: "bmw",
      subTitle: "couple",
      url: car2,
      num: 1,
      type: "manual",
      price: 200,
    },
    {
      id: 4,
      name: "toyota",
      subTitle: "full",
      url: car3,
      num: 3,
      type: "automatic",
      price: 1000,
    },
    {
      id: 5,
      name: "mercedes",
      subTitle: "couple",
      url: car3,
      num: 7,
      type: "automatic",
      price: 1800,
    },
    {
      id: 6,
      name: "porche",
      subTitle: "couple",
      url: car1,
      num: 9,
      type: "manual",
      price: 500,
    },
    {
      id: 7,
      name: "yaris",
      subTitle: "micro",
      url: car3,
      num: 6,
      type: "automatic",
      price: 900,
    },
    {
      id: 8,
      name: "corella",
      subTitle: "half",
      url: car1,
      num: 2,
      type: "manual",
      price: 6800,
    },
    {
      id: 9,
      name: "mercedes",
      subTitle: "mini",
      url: car2,
      num: 7,
      type: "manual",
      price: 700,
    },
  ]);

  let res = car.map((ele) => {
    return (
      <div key={ele.id} className="col-lg-4 col-sm-6 mb-3">
        <div className="card-box">
          <div className="card-header d-flex justify-content-between align-items-center">
            <div className="header-data">
              <h3>{ele.name}</h3>
              <span>{ele.subTitle}</span>
            </div>
            <div className="heart">
              {ele.active ? (
                <FontAwesomeIcon icon={faHeart} className="active-red" />
              ) : (
                <FontAwesomeIcon icon={faHeart} />
              )}
            </div>
          </div>
          <img src={ele.url} alt="" />
          <div className="card-footer d-flex justify-content-between align-items-center">
            <div className="footer-data">
              <span>
                <FontAwesomeIcon icon={faUser} />
                {ele.num}
              </span>
              <span>
                <FontAwesomeIcon icon={faRetweet} />
                {ele.type}
              </span>
            </div>
            <div className="footer-price">
              <span className="price">
                ${ele.price}
                <span>/d</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <>{res}</>;
}
export default Cardbooking;
