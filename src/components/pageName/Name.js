import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShapes } from "@fortawesome/free-solid-svg-icons";
import "./name.css";
function Name(props) {
  return (
    <div className="main-title">
      <div className="container-fluid d-flex align-items-center">
        <FontAwesomeIcon icon={faShapes} className="title-icon" />
        <h5 className="title">{props.title}</h5>
      </div>
    </div>
  );
}
export default Name;
