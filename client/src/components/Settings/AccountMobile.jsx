import React from "react";
import { Avatar, Button, Select, Option } from "@mui/joy";
import LabeledInput from "../../assets/LabeledInput";


const AccountMobile = () => {
  return (
    <>
      <div className="flex gap-3 items-center pb-4 pt-3">
        <Avatar variant="soft" style={{ height: "3.5rem", width: "3.5rem" }} />
        <div>
          <p className="font-bold text-lg ">Lucas Lopez</p>
          <span className="text-xs text-gray-600">ljairolopez@gmail.com</span>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <LabeledInput
          placeholder="Código"
          disabled
          defaultValue="2024-ISFT-00005"
          size="sm"
        />
        <div className="grid grid-cols-2 gap-3">
          <LabeledInput
            size="sm"
            name="Cédula"
            type="mask"
            mask="dni"
            placeholder="001-2345321-9"
          />
          <Select
            size="sm"
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
        </div>
        <LabeledInput placeholder="Fecha de Nacimiento" type="date" size="sm" />
        <LabeledInput placeholder="Lugar de Nacimiento" size="sm" />
        <LabeledInput placeholder="Nacionalidad" size="sm" />
        <LabeledInput
          size="sm"
          name="Teléfono"
          type="mask"
          mask="tel"
          placeholder="(809) 345-3219"
        />
        <LabeledInput
          size="sm"
          name="Correo Electrónico"
          type="email"
          placeholder="jhondoe@gmail.com"
        />
        <LabeledInput
          size="sm"
          name="Dirección"
          placeholder="Calle 3, Condominio Juan III"
        />
        <div className="grid grid-cols-2 gap-3">
          <LabeledInput size="sm" name="Sector" placeholder="Alma Rosa" />
          <LabeledInput
            size="sm"
            name="Provincia"
            placeholder="Santo Domingo"
          />
        </div>
        <Select
          size="sm"
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
        <LabeledInput size="sm" name="Pastor" placeholder="David Tavárez" />
        <LabeledInput size="sm" name="Cargo Iglesia" placeholder="Educación" />
        <div className="flex justify-between">
          <Button>CAMBIAR CLAVE</Button>
          <Button color="success">GUARDAR</Button>
        </div>
      </div>
    </>
  );
};

export default AccountMobile;
