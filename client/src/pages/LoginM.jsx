import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "@mui/joy";
import LabeledInput from "../assets/LabeledInput"

const LoginM = () => {
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
    <div className="flex bg-gray-200 px-6 py-16 h-dvh w-dvw justify-center items-center ">
      <div className="flex h-full w-full bg-white rounded-2xl items-center justify-center flex-col px-6">
        <img className="w-16 pb-4" src="/logoseminario1.png" alt="" />
        <div className="text-4xl font-semibold">¡Bienvenido!</div>
        <div className="text-center text-sm">
          Ingrese sus detalles a continuación
        </div>
        <div className="py-8  flex flex-col w-full gap-4">
          <LabeledInput placeholder="Código" size="md" variant="outlined" />
          <LabeledInput placeholder="Contraseña" size="md" variant="outlined" />
          <div className="text-xs flex flex-col transition-all text-gray-600 hover:text-black items-center">
            <p className="font-semibold">¿Olvidaste tu contraseña?</p>
            <p className="group-hover:">Recuperala Aquí</p>
          </div>
        </div>

        <Button style={{ width: "100%" }} onClick={() => navigate("/dashboard")}>Iniciar Sesión</Button>
      </div>
    </div>
  );
};

export default LoginM;
