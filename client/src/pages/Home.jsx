import React, { useEffect, useState } from "react";
import SubjectCard from "../components/SubjectCard";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const data = [
    { color: "#404346 ", code: "ILC 101", name: "Crecimiento Espiritual" },
    { color: "#566573", code: "PAS 201", name: "Formacion Espiritual" },
    { color: "#0A67CF", code: "PAS 213", name: "Homiletica" },
    { color: "#34495E", code: "ILC 101", name: "Crecimiento Espiritual" },
    { color: "#275589", code: "HIS 212", name: "Historia Eclesiastica I" },
    { color: "#404346 ", code: "ILC 101", name: "Crecimiento Espiritual" },
    { color: "#566573", code: "PAS 201", name: "Formacion Espiritual" },
    { color: "#0A67CF", code: "PAS 213", name: "Homiletica" },
    { color: "#34495E", code: "ILC 101", name: "Crecimiento Espiritual" },
    { color: "#275589", code: "HIS 212", name: "Historia Eclesiastica I" },
    { color: "#404346 ", code: "ILC 101", name: "Crecimiento Espiritual" },
    { color: "#566573", code: "PAS 201", name: "Formacion Espiritual" },
    { color: "#0A67CF", code: "PAS 213", name: "Homiletica" },
    { color: "#34495E", code: "ILC 101", name: "Crecimiento Espiritual" },
    { color: "#275589", code: "HIS 212", name: "Historia Eclesiastica I" },
  ];

  const [expanded, setExpanded] = useState(true);
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

  const currdate = Date();
  return (
    <>
      <div
        className={`flex  justify-between  ${
          isMobile ? "flex-col pb-3" : "flex-row pb-8 items-center"
        } `}
      >
        <p className={`${isMobile ? "text-3xl" : "text-4xl"} font-semibold`}>Dashboard</p>
        <p className="text-gray-400">{currdate.substring(0, 16)}</p>
      </div>
      <div className={`flex flex-wrap ${isMobile ? "gap-4" : "gap-6"}`}>
        {data.map((val, key) => {
          return (
            <SubjectCard color={val.color} code={val.code} name={val.name} />
          );
        })}
      </div>
    </>
  );
};

export default Home;
