import React from 'react';
import { SWATCHES } from '../constants/Constants';

const Toolbar = ({setBrushColor,brushColor}) => {
  return (
    <div className='w-[40vw] flex bg-gray-700 bg-opacity-20 justify-around p-3 text-white backdrop-blur-md absolute top-5 rounded-lg left-[10%] right-[10%] z-50'>
      {
        SWATCHES.map((item, index) => (
          <div onClick={()=>{
            setBrushColor(item)
          }}
            key={index} 
            className={`w-[30px] cursor-pointer  h-[30px] rounded-full ${brushColor === item? "border-4 border-white rounded-sm":""} `}
            style={{ backgroundColor: item }} // Set the background color
          >
          </div>
        ))
      }
    </div>
  );
}

export default Toolbar;
