import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getCartThunk } from "../../redux/actions";
// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
// components
import UserModal from "./user-modal/UserModal";
// assets
import logo from "../../assets/images/ecommerce-logo-png-11.png";

//import MenuCar from "./MenuCar";
import "./menu.css";

const Menu = () => {
  const dispatch = useDispatch();
  // Login State
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  // Car State
  const [isCarOpen, setisCarOpen] = useState(false);

  const openCart = () => {
    setisCarOpen(!isCarOpen);
    dispatch(getCartThunk());
  };
  return (
    <div className="Menu">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="icons">
        <span onClick={() => setIsUserModalOpen(true)}>
          <FontAwesomeIcon icon={faUser} />
        </span>
        <span>
          <FontAwesomeIcon icon={faCartShopping} onClick={openCart} />
        </span>
        {isUserModalOpen && (
          <UserModal setIsUserModalOpen={setIsUserModalOpen} />
        )}
      </div>
      {/* <MenuCar isCarOpen={isCarOpen} setisCarOpen={setisCarOpen} /> */}
    </div>
  );
};

export default Menu;
