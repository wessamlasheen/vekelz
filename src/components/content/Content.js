import { faGripLines, faTableCells } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cardbooking from "../carCard/Carbooking";
import "./content.css";
function Booking() {
  return (
    <div className="content-sec">
      <h4 className="my-3">booking</h4>
      <div className="head-content d-flex justify-content-between">
        <div className="drop-down">
          <form>
            <select className="me-3">
              <option>new</option>
              <option>used</option>
            </select>
            <select>
              <option>toyota</option>
              <option>corella</option>
            </select>
          </form>
        </div>
        <div className="icons">
          <div className="icon1 d-inline-block me-3">
            <FontAwesomeIcon icon={faTableCells} />
          </div>
          <div className="icon2 d-inline-block">
            <FontAwesomeIcon icon={faGripLines} />
          </div>
        </div>
      </div>
      <div className="cars-data">
        <div className="row mt-4">
          <Cardbooking />
        </div>
      </div>
    </div>
  );
}
export default Booking;
