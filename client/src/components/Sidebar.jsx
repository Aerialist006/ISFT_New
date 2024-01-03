import { Settings, ChevronLast, ChevronFirst } from "lucide-react";
import { useContext, createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/joy/Avatar";

const SidebarContext = createContext();

export default function Sidebar({ children, email, name, last }) {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
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
    <aside
      className={` h-dvh ${expanded ? (isMobile ? "w-screen" : "w-full") : ""}`}
    >
      <nav
        className={`h-full flex flex-col bg-white border-r shadow-sm  ${
          !expanded ? "items-center" : ""
        }`}
      >
        <div className="p-3 md:pt-10 md:px-4 pb-2 flex justify-between items-center">
          <img
            src="https://img.logoipsum.com/243.svg"
            className={`overflow-hidden transition-all ${
              expanded ? "w-32" : "w-0"
            }`}
            alt="Logo ISFT"
          />
          <button
            onClick={() => {
              setExpanded((curr) => !curr);
            }}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded, setExpanded }}>
          <ul className="flex-1 px-0 md:px-4">{children}</ul>
        </SidebarContext.Provider>

        <div className="border-t flex p-3 md:p-4 ">
          <div className="flex items-center overflow-hidden transition-all gap-3">
            <div className="flex-none">
              <Avatar>
                {!name && !last
                  ? "U"
                  : name.substring(0, 1) + last.substring(0, 1)}
              </Avatar>
            </div>
            <div
              className={`flex justify-between items-center ${
                expanded ? (isMobile ? "w-screen" : "gap-12") : "hidden"
              }`}
            >
              <div className="leading-4">
                <h4 className="font-semibold">
                  {!name && !last ? "Username" : name + " " + last}
                </h4>
                <span className="text-xs text-gray-600">{email}</span>
              </div>
              <button
                onClick={() => {
                  if (isMobile) setExpanded(false);
                  navigate("/settings");
                }}
                className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
              >
                <Settings />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text, active, alert, route }) {
  const { expanded, setExpanded } = useContext(SidebarContext);
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
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
    <li
      className={`
      const firstli = {'relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
        active
          ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
          : "hover:bg-indigo-50 text-gray-600"
      }'}
    `}
      onClick={() => {
        if (isMobile) setExpanded(false);
        navigate(route);
      }}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
            expanded ? "" : "top-2"
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-indigo-100 text-indigo-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </div>
      )}
    </li>
  );
}
