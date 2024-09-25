import React from "react";
import { SWATCHES } from "../constants/Constants";
import { LuEraser } from "react-icons/lu";
const Toolbar = ({
  setBrushColor,
  brushColor,
  isEraser,
  setBrushStroke,
  setReset,
  setIsEraser,
}) => {
  return (
    <div className="flex flex-col md:flex-row text-white p-1 gap-3 backdrop-blur-md absolute top-5 w-[80vw] left-[10%] z-50">
      <div className="w-full  xl:w-1/2 p-3 rounded-lg bg-gray-700 bg-opacity-20 justify-around flex flex-wrap gap-4 md:flex-row">
        {SWATCHES.map((item, index) => (
          <div
            onClick={() => {
              setIsEraser(false); // Disable eraser when a color is selected
              setBrushColor(item);
            }}
            key={index}
            className={`md:w-[30px] h-[15px] w-[15px] xs:w-[25px]  xs:h-[25px] cursor-pointer md:h-[30px] transition ease-in ${
              brushColor === item ? " border-white rounded-[15px]" : "rounded-sm "
            }`}
            style={{ backgroundColor: item }} // Set the background color
          ></div>
        ))}
      </div>
      <div className="w-full md:w-1/2 items-center h-[60px] rounded-lg bg-gray-700 bg-opacity-20 justify-around flex flex-wrap  md:flex-row">
        <button
          className="bg-red-600 md:text-md md:max-w-[100px] w-[80px] h-[40px] text-sm px-2 py-auto rounded-md hover:bg-red-700"
          onClick={() => {
            setReset(true);
          }}
        >
          Reset Canvas
        </button>
        <LuEraser
          className={` w-[30px]  md:w-[50px] md:h-[50px] cursor-pointer rounded-md ${
            isEraser ? "bg-blue-700" : ""
          } hover:bg-yellow-700`}
          onClick={() => {
            setIsEraser(true); // Enable eraser mode
            setBrushColor("black"); // Set the stroke color to match the background
          }}
        />
        <input
          type="range"
          min={1}
          max={32}
          defaultValue={2}
          onChange={(e) => {
            setBrushStroke(e.target.value);
          }}
          className="h-1 my-auto w-[90px] md:w-auto "
        />
      </div>
    </div>
  );
};

export default Toolbar;
