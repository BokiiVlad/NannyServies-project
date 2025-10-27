"use client";

import React from "react";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";

const Modals = ({
  isLoginOpen,
  setIsLoginOpen,
  isRegisterOpen,
  setIsRegisterOpen,
}) => {
  return (
    <>
      {isLoginOpen && <LoginModal onClose={() => setIsLoginOpen(false)} />}
      {isRegisterOpen && (
        <RegisterModal onClose={() => setIsRegisterOpen(false)} />
      )}
    </>
  );
};

export default Modals;
