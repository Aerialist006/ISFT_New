import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Settings, ChevronLast, ChevronFirst, LogOut, Blocks } from "lucide-react";
import Avatar from "@mui/joy/Avatar";

const Footer = ({ email, name, last, role }) => {
  const [expanded, setExpanded] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
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
    <aside
    
      style={{
        height: `${isMobile ? { height: window.innerHeight } : "100vh"}`,
      }}
    >
      <nav className={`h-full flex flex-col bg-white border-r shadow-sm `}>
        <div className="p-4 sm:p-4 md:pt-10 pb-2 flex items-center justify-between">
          <button
            onClick={() => {
              setExpanded((curr) => !curr);
            }}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <ChevronLast /> : <ChevronFirst />}
          </button>
          <button
            onClick={() => {
              navigate("/logout")
            }}
            className={`p-1.5 rounded-lg flex gap-3 bg-gray-50 hover:bg-gray-100 ${expanded ? "block" : "hidden"}`}
          >
            Log Out
            <LogOut />
          </button>
        </div>
        <div
          className={`overflow-hidden transition-all flex flex-col items-center px-12 ${
            expanded ? "block" : "hidden"
          }`}
        >
          <Avatar variant="soft" style={{ height: "8rem", width: "8rem" }}/>
          <p className="pt-4 font-bold text-lg ">{name + " " + last}</p>
          <span className="text-xs text-gray-600">{email}</span>
          
        </div>
      </nav>
    </aside>
  );
};

export default Footer;
