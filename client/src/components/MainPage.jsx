import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainPage = ({ Main }) => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mobileMediaQuery = window.matchMedia("(max-width: 767px)"); // Adjust the breakpoint as needed
    const handleMobileChange = (event) => {
      setIsMobile(event.matches);
    };
    mobileMediaQuery.addEventListener("change", handleMobileChange);
    setIsMobile(mobileMediaQuery.matches);
    return () => {
      mobileMediaQuery.removeEventListener("change", handleMobileChange);
    };
  }, []);
  return (
    <div className="flex">
      <Navbar />
      <main className=" h-dvh w-full bg-slate-100 overflow-y-scroll ">
        <div className={isMobile ? "p-3" : "p-6 pt-10"}>
          <Main />
        </div>
      </main>
    </div>
  );
};

export default MainPage;
