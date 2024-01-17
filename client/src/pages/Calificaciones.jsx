import React from "react";

const Calificaciones = () => {
  const download = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href =
      "https://drive.google.com/file/d/1VTl9mz6KNXrAUHcS8QLGblpDomWz76-N/view?usp=drive_link";
    downloadLink.target = "_blank";
    downloadLink.download = "archivo_descargado.png"; // Cambia el nombre y la extensión según tu necesidad
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  return <button onClick={download}>Descarga</button>;
};

export default Calificaciones;
