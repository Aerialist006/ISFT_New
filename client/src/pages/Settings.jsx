import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import AccountMobile from "../components/Settings/AccountMobile";
import Account from "../components/Settings/Account";

const Settings = () => {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const mobileMediaQuery = window.matchMedia("(max-width: 767px)");
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
    <>
      <div
        className={`flex  justify-between  ${
          isMobile ? "flex-col pb-3" : "flex-row pb-8 items-center"
        } `}
      >
        <p className={`${isMobile ? "text-3xl" : "text-4xl"} font-semibold`}>
          Configuración
        </p>
      </div>
      <div className={`bg-white rounded-xl ${isMobile ? "p-3" : "p-8"}`}>{isMobile ? <AccountMobile /> : <Account />}</div>
    </>
  );
};

export default Settings;
