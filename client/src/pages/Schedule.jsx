import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UseScript from "../assets/customHooks/UseScript";
import { Table } from "@mui/joy";
import LiveClockUpdate from "../assets/LiveClock";
const Schedule = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [clock, setClock] = useState(false);
  const navigate = useNavigate();
  const classes = [
    {
      name: "Introducción a la Psicología Bíblica",
      time: "8:00-10:00",
      meet: "https://meet.google.com/pna-sgth-ygs",
      group: "https://chat.whatsapp.com/H5BfKiuNNq169sMfyR2gJn",
    },
    {
      name: "Mayordomía Cristiana",
      time: "10:00-12:00",
      meet: "https://meet.google.com/pna-sgth-ygs",
      group: "https://chat.whatsapp.com/H5BfKiuNNq169sMfyR2gJn",
    },
    {
      name: "Almuerzo",
      time: "12:00-13:00",
      meet: "https://meet.google.com/pna-sgth-ygs",
      group: "https://chat.whatsapp.com/H5BfKiuNNq169sMfyR2gJn",
    },
    {
      name: "Introducción al Ministerio Pastoral",
      time: "13:00-15:00",
      meet: "https://meet.google.com/pna-sgth-ygs",
      group: "https://chat.whatsapp.com/H5BfKiuNNq169sMfyR2gJn",
    },
    {
      name: "Cómo entender la Biblia",
      time: "15:00-17:00",
      meet: "https://meet.google.com/pna-sgth-ygs",
      group: "https://chat.whatsapp.com/H5BfKiuNNq169sMfyR2gJn",
    },
  ];
  useEffect(() => {
    const mobileMediaQuery = window.matchMedia("(max-width: 767px)");
    const handleMobileChange = (event) => {
      setIsMobile(event.matches);
    };
    mobileMediaQuery.addEventListener("change", handleMobileChange);
    setIsMobile(mobileMediaQuery.matches);

    const ClockQuery = window.matchMedia("(max-width: 940px)");
    const handleClockQuery = (event) => {
      setClock(event.matches);
    };
    ClockQuery.addEventListener("change", handleClockQuery);
    setClock(mobileMediaQuery.matches);
    return () => {
      mobileMediaQuery.removeEventListener("change", handleMobileChange);
      ClockQuery.removeEventListener("change", handleClockQuery);
    };
  }, []);
  return (
    <>
      <div
        className={`flex justify-between  ${
          isMobile ? "flex-col pb-3" : "flex-row pb-8 items-center"
        } `}
      >
        <p className={`${isMobile ? "text-3xl" : "text-4xl"} font-semibold`}>
          Horario
        </p>
      </div>

      <div
        className={`flex ${
          isMobile ? "flex-col-reverse gap-3" : "flex-row gap-6"
        }`}
      >
        <div
          className={`flex flex-col ${
            !isMobile ? "w-1/4 gap-6" : "w-full gap-3"
          }`}
        >
          <div className="rounded-xl flex overflow-auto p-2 bg-white h-2/3">
            <Table
              borderAxis="bothBetween"
              hoverRow={true}
              variant="plain"
              style={{ zIndex: 0 }}
              stickyHeader={true}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      width: 110,
                      fontWeight: "600",
                      color: "#5A5A72",
                    }}
                  >
                    Hora
                  </th>
                  <th
                    style={{
                      fontWeight: "600",
                      color: "#5A5A72",
                    }}
                  >
                    Materia
                  </th>
                </tr>
              </thead>
              <tbody>
                {classes.map((val, key) => {
                  return (
                    <tr>
                      <td>{val.time}</td>
                      <td>
                        <div className="flex justify-between items-center">
                          <p>{val.name}</p>
                          <div className="flex gap-1 justify-center items-center">
                            <button
                              className="w-8 h-8"
                              onClick={() => window.open(val.group)}
                            >
                              <img
                                src="https://cdn-icons-png.flaticon.com/512/4138/4138132.png"
                                alt="WhatsApp Group"
                              />
                            </button>
                            <button
                              className="w-7 h-7"
                              onClick={() => window.open(val.meet)}
                            >
                              <img
                                src="https://static-00.iconduck.com/assets.00/google-meet-icon-1770x2048-a382abi2.png"
                                alt="Google Meet"
                              />
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
          <div className="h-1/3 flex flex-col gap-4">
            <div
              className={`rounded-xl flex p-2 items-center bg-white ${
                isMobile ? "hidden" : "h-4/5"
              }`}
            >
              <div className="flex items-center gap-2">
                <img
                  src="https://images.vexels.com/media/users/3/127663/isolated/preview/2722dcca19ac53408b775240e7305735-flat-clock-icon.png"
                  className={`lg:h-28 md:h-20 ${clock ? "hidden" : null}`}
                />
                <LiveClockUpdate mobile={true} />
              </div>
            </div>
            <div
              className={`h-1/5 text-xl font-semibold flex items-center justify-center`}
            >
              <p>Periodo Ene-Mar 2024</p>
            </div>
          </div>
        </div>
        <div
          className={` rounded-xl p-2 bg-white ${
            !isMobile ? "w-3/4" : "w-full"
          }`}
        >
          <iframe
            src="https://embed.styledcalendar.com/#qHeucIjeED9Y7wvZRpua"
            title="Styled Calendar"
            class="styled-calendar-container"
            style={{
              width: "100%",
              height: `${!isMobile ? "75vh" : "40vh"}`,
              border: "none",
              "&::WebkitScrollbar": { maxWidth: "0.5rem", maxHeight: "0.5rem" },
              "&::WebkitScrollbarTrack": { background: "#00000000" },
              "&::WebkitScrollbarThumb": {
                background: "#D1D1D1",
                borderRadius: "20px",
              },
            }}
            data-cy="calendar-embed-iframe"
          ></iframe>
          <UseScript url="https://embed.styledcalendar.com/assets/parent-window.js" />
        </div>
      </div>
    </>
  );
};

export default Schedule;
