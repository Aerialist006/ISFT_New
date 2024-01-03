import React from "react";
import { useNavigate } from "react-router-dom";

const SubjectCard = ({ color, code, name }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate("/publicar");
      }}
      className="h-28 w-72 p-4 rounded-xl flex gap-3 group cursor-pointer "
      style={{ backgroundColor: color }}
    >
      <div className=" bg-white bg-opacity-20 h-full w-20 rounded-md text-xl font-semibold text-white flex items-center justify-center group-hover:bg-opacity-30 group-hover:text-2xl group-hover:transition-all transition-all ">
        {code.substring(4, 7)}
      </div>
      <div className="flex flex-col justify-center transition-all">
        <span className="text-white text-opacity-40 transition-all group-hover:hidden group-hover:h-0 group-hover:transition-all">
          {code}
        </span>
        <p className="text-white font-medium transition-all group-hover:text-lg group-hover:transition-all">
          {name}
        </p>
      </div>
    </div>
  );
};

export default SubjectCard;
