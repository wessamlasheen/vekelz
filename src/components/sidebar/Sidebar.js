import ListGroup from "react-bootstrap/ListGroup";
import "./sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faTableCellsLarge,
  faCarRear,
  faBasketShopping,
  faCartShopping,
  faScissors,
  faCalendarMinus,
  faCommentDots,
  faGear,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <ListGroup className="sidebar d-flex flex-column justify-content-between ">
      <div className="side-top">
        <ListGroup.Item as={Link} to="/vekelz">
          <FontAwesomeIcon icon={faTableCellsLarge} className="me-2" />
          dashboard
        </ListGroup.Item>
        <ListGroup.Item as={Link}>
          <FontAwesomeIcon icon={faCircleUser} className="me-2" />
          Assets
        </ListGroup.Item>
        <ListGroup.Item as={Link} to="/booking">
          <FontAwesomeIcon icon={faCarRear} className="me-2" />
          Booking
        </ListGroup.Item>
        <ListGroup.Item as={Link}>
          <FontAwesomeIcon icon={faBasketShopping} className="me-2" />
          Sell Cars
        </ListGroup.Item>
        <ListGroup.Item as={Link}>
          <FontAwesomeIcon icon={faCartShopping} className="me-2" />
          buy cars
        </ListGroup.Item>
        <ListGroup.Item as={Link}>
          <FontAwesomeIcon icon={faScissors} className="me-2" />
          services
        </ListGroup.Item>
        <ListGroup.Item as={Link}>
          <FontAwesomeIcon icon={faCalendarMinus} className="me-2" />
          callender
        </ListGroup.Item>
        <ListGroup.Item as={Link}>
          <FontAwesomeIcon icon={faCommentDots} className="me-2" />
          message
        </ListGroup.Item>
      </div>
      <div className="side-bottom">
        <ListGroup.Item as={Link}>
          <FontAwesomeIcon icon={faGear} className="me-2" />
          settings
        </ListGroup.Item>
        <ListGroup.Item as={Link}>
          <FontAwesomeIcon icon={faArrowRightFromBracket} className="me-2" />
          logout
        </ListGroup.Item>
      </div>
    </ListGroup>
  );
}

export default Sidebar;
