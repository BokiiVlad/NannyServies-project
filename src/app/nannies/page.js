"use client";
import { useState } from "react";
import HeaderMain from "../components/HeaderMain/HeaderMain.jsx";
import NannysList from "../components/NannysList/NannysList.jsx";

const Nannies = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <section>
      <HeaderMain
        isLoginOpen={isLoginOpen}
        setIsLoginOpen={setIsLoginOpen}
      />
      <NannysList />
    </section>
  );
};

export default Nannies;
