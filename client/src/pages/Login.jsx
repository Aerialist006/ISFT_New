import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Input, Checkbox, Button } from "@mui/joy";

const Login = () => {
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
    <div className="flex bg-gray-200 px-48 py-16 h-dvh w-dvw justify-center items-center ">
      <div className="flex h-full w-full bg-white rounded-2xl">
        <div className="h-full items-center justify-center flex  w-1/2 lg:p-20 md:p-8">
          <img className="max-w-full" src="/logoseminario1.png" alt="" />
        </div>
        <div className="flex lg:px-24 md:px-10 w-1/2 items-center justify-center flex-col">
          <div className="text-4xl font-semibold">¡Bienvenido!</div>
          <div className="text-center text-sm">
            Ingrese sus detalles a continuación
          </div>
          <div className="py-8  flex flex-col w-full gap-4">
            <Input placeholder="Código" size="lg" variant="outlined" />
            <Input placeholder="Contraseña" size="lg" variant="outlined" />
            <div className="text-xs flex flex-col transition-all text-gray-600 hover:text-black items-center">
              <p className="font-semibold">¿Olvidaste tu contraseña?</p>
              <p className="group-hover:">Recuperala Aquí</p>
            </div>
          </div>

          <Button style={{ width: "100%" }} onClick={() => navigate("/")}>Iniciar Sesión</Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
