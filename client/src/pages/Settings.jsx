import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Avatar } from "@mui/joy";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab, { tabClasses } from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";

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
      <Tabs
        orientation={isMobile ? "horizontal" : "vertical"}
        style={{ backgroundColor: "transparent", height: "80vh" }}
      >
        <TabList
          disableUnderline
          sx={{
            p: 0.5,
            gap: 0.5,
            borderRadius: "xl",
            bgcolor: "background.level1",
            [`& .${tabClasses.root}[aria-selected="true"]`]: {
              boxShadow: "sm",
              bgcolor: "background.surface",
            },
          }}
        >
          {!isMobile ? (
            <Tab
              disableIndicator
              variant="plain"
              color="neutral"
              disabled
              style={{ gap: "0.75rem" }}
            >
              <Avatar
                variant="soft"
                style={{ height: "6rem", width: "6rem" }}
              />
              <div>
                <p className="pt-4 font-bold text-lg ">Lucas Lopez</p>
                <span className="text-xs text-gray-600">
                  ljairolopez@gmail.com
                </span>
              </div>
            </Tab>
          ) : null}
          <Tab
            disableIndicator
            variant="plain"
            color="neutral"
            style={{ justifyContent: "end" }}
          >
            General
          </Tab>
          <Tab
            disableIndicator
            variant="plain"
            color="neutral"
            style={{ justifyContent: "end" }}
          >
            Preferencias
          </Tab>
        </TabList>
        {!isMobile ? (
          <TabPanel
            value={0}
            style={{
              backgroundColor: "rgba(241,245,248,255)",
              borderRadius: "1rem",
            }}
          >
            <p>Bienvenido al Panel de Configuracion</p>
            <p>Selecciona una de las pestañas para empezar</p>
          </TabPanel>
        ) : null}
        <TabPanel
          value={1}
          style={{ backgroundColor: "white", borderRadius: "1rem" }}
        >General</TabPanel>
        <TabPanel
          value={2}
          style={{ backgroundColor: "white", borderRadius: "1rem" }}
        >Preferencias</TabPanel>
      </Tabs>
    </>
  );
};

export default Settings;
