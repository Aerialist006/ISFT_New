import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import React, { useEffect, useState } from "react";
import "./App.css";
import MainPage from "./components/MainPage";
import SubjectView from "./pages/SubjectView";
import Login from "./pages/Login";
import LoginM from "./pages/LoginM";
import Settings from "./pages/Settings";
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';

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
      display: 'Poppins', // applies to `h1`–`h4`
      body: 'Poppins', // applies to `title-*` and `body-*`
    },
  })

  return (
    <>
      <CssVarsProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage Main={Home} />} />
            <Route path="/publicar" element={<MainPage Main={SubjectView} />} />
            <Route path="/settings" element={<MainPage Main={Settings} />} />
            <Route path="/login" Component={!isMobile ? Login : LoginM} />
          </Routes>
        </BrowserRouter>
      </CssVarsProvider>
    </>
  );
}

export default App;
