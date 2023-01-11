import {
  faBolt,
  faBomb,
  faDroplet,
  faExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "./dashboardcard.css";

function Dashboardcard() {
  const [dashcard, setDashCard] = useState([
    {
      id: 1,
      icon: faBolt,
      name: "energy",
      progressColor: "white",
      num: 157,
      active: true,
      classWhite: "blue",
    },
    {
      id: 2,
      icon: faExclamation,
      name: "range",
      progressColor: "#fd7c81",
      num: 50,
      classWhite: "orange",
    },
    {
      id: 3,
      icon: faDroplet,
      name: "break fluid",
      progressColor: "#9d63f3",
      num: 50,
      classWhite: "purple",
    },
    {
      id: 4,
      icon: faBomb,
      name: "tire wear",
      progressColor: "#f3cd19",
      num: 35,
      classWhite: "yellow",
    },
  ]);

  const res = dashcard.map((ele) => {
    return (
      <div className="col-lg-3 mb-3" key={ele.id}>
        <div
          className="dashcard-box"
          style={{
            backgroundColor: ele.active ? "#a162f7" : "white",
            color: ele.active ? "white" : "black",
          }}
        >
          <div className="icon-progress">
            <FontAwesomeIcon
              icon={ele.icon}
              style={{ color: ele.progressColor }}
            />
          </div>
          <h5>{ele.name}</h5>
          <div className={"myprogress" + " " + ele.classWhite}>
            <span className="progress-left">
              <span
                className="progress-bar"
                style={{ borderColor: ele.progressColor }}
              ></span>
            </span>
            <span className="progress-right">
              <span
                className="progress-bar"
                style={{ borderColor: ele.progressColor }}
              ></span>
            </span>
            <div
              className="progress-value"
              style={{ color: ele.active ? "white" : "black" }}
            >
              {ele.num}%
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <>{res}</>;
}
export default Dashboardcard;
