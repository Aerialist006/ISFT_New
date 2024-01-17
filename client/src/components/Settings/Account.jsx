import React from "react";
import { Avatar, Button, Select, Option } from "@mui/joy";
import LabeledInput from "../../assets/LabeledInput";

const Account = () => {
  return (
    <>
      <div className="flex gap-4 items-center pb-8 pt-3">
        <Avatar variant="soft" style={{ height: "8rem", width: "8rem" }} />
        <div>
          <p className="font-bold text-2xl ">Lucas Lopez</p>
          <span className="text-md text-gray-600">ljairolopez@gmail.com</span>
          <p className="text-md font-semibold text-gray-600">2024-ISFT-0005</p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-4 gap-4">
          <LabeledInput
            name="Cédula"
            type="mask"
            mask="dni"
            placeholder="001-2345321-9"
          />
          <Select
            placeholder="Sexo"
            sx={{
              "--Input-placeholderOpacity": 10,
              fontWeight: 500,
              color: "#545e69",
            }}
          >
            <Option value={"M"}>Masculino</Option>
            <Option value={"F"}>Femenino</Option>
          </Select>
          <LabeledInput placeholder="Fecha de Nacimiento" type="date" />
          <LabeledInput placeholder="Nacionalidad" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <LabeledInput placeholder="Lugar de Nacimiento" />
          <LabeledInput
            name="Dirección"
            placeholder="Calle 3, Condominio Juan III"
          />
        </div>
        <div className="grid grid-cols-4 gap-4">
          <LabeledInput
            name="Teléfono"
            type="mask"
            mask="tel"
            placeholder="(809) 345-3219"
          />
          <LabeledInput
            name="Correo Electrónico"
            type="email"
            placeholder="jhondoe@gmail.com"
          />
          <LabeledInput name="Sector" placeholder="Alma Rosa" />
          <LabeledInput name="Provincia" placeholder="Santo Domingo" />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <Select
            placeholder="Iglesia"
            sx={{
              "--Input-placeholderOpacity": 10,
              fontWeight: 500,
              color: "#545e69",
            }}
          >
            <Option value={"1"}>Los Tres Ojos</Option>
            <Option value={"2"}>Lomisa</Option>
          </Select>
          <LabeledInput name="Pastor" placeholder="David Tavárez" />
          <LabeledInput name="Cargo Iglesia" placeholder="Educación" />
        </div>

        <div className="flex justify-end gap-3">
          <Button size="lg">CAMBIAR CLAVE</Button>
          <Button size="lg" color="success">GUARDAR</Button>
        </div>
      </div>
    </>
  );
};

export default Account;
