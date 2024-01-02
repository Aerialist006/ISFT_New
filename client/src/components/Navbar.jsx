import React, { useState, useEffect } from "react";
import Sidebar, { SidebarItem } from "./Sidebar";
import {
  BookOpenCheck,
  LayoutDashboard,
  CalendarDays,
  CheckCheck,
} from "lucide-react";

const Navbar = () => {
  const [expanded, setExpanded] = useState(true);
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
    <div className={`flex min-h-screen sticky `}>
      <Sidebar email="ljairolopez@gmail.com" name="Lucas" last="Lopez">
        <SidebarItem
          icon={<LayoutDashboard size={20} />}
          text="Dashboard"
          route="/"
        />
        <SidebarItem
          icon={<BookOpenCheck size={20} />}
          text="Calificaciones"
          route="/calificaciones"
        />
        <SidebarItem
          icon={<CalendarDays size={20} />}
          text="Calendario"
          route="/calendario"
        />
        <SidebarItem
          icon={<CheckCheck size={20} />}
          text="ToDo"
          route="/todo"
        />
      </Sidebar>
    </div>
  );
};

export default Navbar;
