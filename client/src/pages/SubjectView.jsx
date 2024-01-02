import React, { useState, useEffect } from "react";
import Table from "@mui/joy/Table";
import Button from "@mui/joy/Button";
import Sheet from "@mui/joy/Sheet";

const SubjectView = () => {
  const students = [
    { name: "Juan", id: "1" },
    { name: "Jaime", id: "2" },
    { name: "Juanito", id: "3" },
    { name: "Jimena", id: "4" },
    { name: "Juana", id: "5" },
    { name: "Jennifer", id: "6" },
    { name: "Jose", id: "7" },
    { name: "Jorge", id: "8" },
    { name: "Josefina", id: "9" },
    { name: "Julian", id: "10" },
  ];
  const criteria = [
    { name: "Asistencia", id: "1", maxGrad: "10" },
    { name: "Examen", id: "2", maxGrad: "10" },
    { name: "Practica", id: "3", maxGrad: "10" },
    { name: "Laboratorio", id: "4", maxGrad: "10" },
    { name: "Examen Final", id: "5", maxGrad: "10" },
    { name: "Asistencia", id: "6", maxGrad: "10" },
    { name: "Examen", id: "7", maxGrad: "10" },
    { name: "Practica", id: "8", maxGrad: "10" },
    { name: "Laboratorio", id: "9", maxGrad: "10" },
    { name: "Examen Final", id: "10", maxGrad: "10" },
  ];

  const criteriacalif = [
    { idStu: "3", idCrit: "10", grad: "9" },
    { idStu: "4", idCrit: "4", grad: "1" },
    { idStu: "2", idCrit: "3", grad: "9" },
    { idStu: "6", idCrit: "7", grad: "10" },
    { idStu: "10", idCrit: "10", grad: "1f" },
  ];
  const [error, setError] = useState(false);
  const [rvalue, setRValue] = useState(true);
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

  const handleChange = (e) => {
    console.log(rvalue);
    if (e.target.value > rvalue) {
      setError(true);
    }
  };
  let result;
  return (
    <>
      <div
        className={`font-semibold ${isMobile ? "text-2xl " : "text-4xl pb-8 pt-4"}`}
      >
        MATEMÁTICAS
      </div>
      <div className=" rounded-xl p-2 bg-white ">
        <div className="overflow-auto max-h-1-2 z-20">
          <Table
            style={{
              tableLayout: "fixed",
            }}
            borderAxis="bothBetween"
            hoverRow={true}
            variant="plain"
            stickyHeader={true}
          >
            <thead>
              <tr>
                <th
                  style={{ width: isMobile ? 120 : 150 }}

                >
                  Estudiantes
                </th>
                {criteria.map((val, key) => {
                  return (
                    <th
                      style={{
                        width: isMobile ? 120 : 150,
                        fontWeight: "600",
                        color: "#5A5A72",
                        position: "sticky",
                        zIndex: 0,
                      }}
                    >
                      {val.name + " - " + val.maxGrad}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {students.map((val1, key) => {
                return (
                  <tr>
                    <th className=" border-solid border-black">{val1.name}</th>
                    {criteria.map((val2, key) => {
                      return (
                        <td>
                          <input
                            className="w-full h-full bg-transparent outline-none"
                            onKeyPress={(event) => {
                              if (!/[0-9]/.test(event.key)) {
                                event.preventDefault();
                              }
                            }}
                            onLoad={
                              (result = criteriacalif.find(
                                (e) =>
                                  e.idStu === val1.id && e.idCrit == val2.id
                              ))
                            }
                            defaultValue={result ? result.grad : ""}
                            min={0}
                            type="number"
                            max={val2.maxGrad}
                          />
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
      {isMobile ? (
        <div>
          <div className="w-full flex justify-between pt-4">
            <Button color="success" size="sm">
              PUBLICAR
            </Button>
            <Button color="neutral" size="sm">
              DESCARTAR
            </Button>
            <Button size="sm">GUARDAR</Button>
          </div>
        </div>
      ) : (
        <div>
          <div className="w-full flex justify-between pt-4">
            <Button color="success">PUBLICAR NOTAS</Button>
            <div className="flex gap-4">
              <Button color="neutral">DESCARTAR CAMBIOS</Button>
              <Button>GUARDAR CAMBIOS</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SubjectView;
