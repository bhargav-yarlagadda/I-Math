import { useState } from "react";
import Canvas from "../components/Canvas";
import Toolbar from "../components/Toolbar";

const Home = () => {
    const [brushColor, setBrushColor] = useState("#fff");
    const [brushStroke, setBrushStroke] = useState(2);
    const [reset, setReset] = useState(false);
    const [isEraser, setIsEraser] = useState(false); // State for eraser mode


    return (
        <>
            <Toolbar isEraser={isEraser} setReset={setReset} setBrushStroke={setBrushStroke} setBrushColor={setBrushColor} brushColor={brushColor} setIsEraser={setIsEraser} />
            <Canvas reset={reset} setReset={setReset} brushStroke={brushStroke} brushColor={brushColor} isEraser={isEraser} />  
        </>
    );
};

export default Home;
