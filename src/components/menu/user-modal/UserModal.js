import React, { useState } from "react";
// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
//img
import user from "../../../assets/images/user1.png";
// external libraries
// import { motion } from "framer-motion";
//componets
import LogIn from "../log-in/LogIn";
import SignUp from "../sign-up/SingUp";
// eliminas estos estilos
import "./userModal.css";

const UserModal = ({ setIsUserModalOpen }) => {
  const [signUp, setSignUp] = useState(false);

  // animation obj
  //   const dropIn = {
  //     hidden: { y: "-100vh", opacity: 0 },
  //     visible: {
  //       y: "0",
  //       opacity: 1,
  //       transition: {
  //         duration: 0.1,
  //         type: "spring",
  //         damping: 25,
  //         stiffness: 500,
  //       },
  //     },
  //     exit: { y: "100vh", opacity: 0 },
  //   };
  const openModalSignUp = () => {
    setSignUp(true);
  };
  //   <motion.div
  return (
    <div
      className="modalUser"
      //   variants={dropIn}
      //   initial="hidden"
      //   animate="visible"
      //   exit="exit"
    >
      <div className="mainContainer">
        <button className="close" onClick={() => setIsUserModalOpen(false)}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <div className="imgContainer">
          <img src={user} alt="userProfile"></img>
        </div>
        {signUp ? (
          <SignUp setIsUserModalOpen={setIsUserModalOpen} />
        ) : (
          <LogIn
            setIsUserModalOpen={setIsUserModalOpen}
            openModalSignUp={openModalSignUp}
          />
        )}
      </div>
    </div>
  );
};

export default UserModal;
