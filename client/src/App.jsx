import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Home from "./pages/home";
import React, { useEffect, useState } from "react";
import "./App.css";
import MainPage from "./components/MainPage";
import SubjectView from "./pages/SubjectView";
import Login from "./pages/Login";
import LoginM from "./pages/LoginM";
import Settings from "./pages/Settings";
import Schedule from "./pages/Schedule";
import SubjectViewStudent from "./pages/SubjectViewStudent";
import { CssVarsProvider, extendTheme } from "@mui/joy/styles";
import Calificaciones from "./pages/Calificaciones";

function App() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mobileMediaQuery = window.matchMedia("(max-width: 960px)");
    const handleMobileChange = (event) => {
      setIsMobile(event.matches);
    };
    mobileMediaQuery.addEventListener("change", handleMobileChange);
    setIsMobile(mobileMediaQuery.matches);
    return () => {
      mobileMediaQuery.removeEventListener("change", handleMobileChange);
    };
  }, []);

  const theme = extendTheme({
    fontFamily: {
      display: "Poppins", // applies to `h1`–`h4`
      body: "Poppins", // applies to `title-*` and `body-*`
    },
  });

  return (
    <>
      <CssVarsProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/login"/>}/>
            <Route path="/dashboard" element={<MainPage Main={Home} />} />
            <Route path="/publicar" element={<MainPage Main={SubjectView} />} />
            <Route path="/ver" element={<MainPage Main={SubjectViewStudent} />} />
            <Route path="/horario" element={<MainPage Main={Schedule} />} />
            <Route path="/calificaciones" element={<MainPage Main={Calificaciones} />} />
            <Route path="/settings" element={<MainPage Main={Settings} />} />
            <Route path="/login" Component={!isMobile ? Login : LoginM} />
          </Routes>
        </BrowserRouter>
      </CssVarsProvider>
    </>
  );
}

export default App;
