import { useEffect, useState } from "react";
import Canvas from "../components/Canvas";
import Toolbar from "../components/Toolbar";
const Home = () => {
    const [brushColor,setBrushColor] = useState("white")
    const [brushStroke,setBrushStroke] = useState(2)
    const [reset,setReset] = useState(false)

    return (
        <>
            <Toolbar setReset={setReset} setBrushStroke={setBrushStroke}  setBrushColor={setBrushColor} brushColor={brushColor} />
            <Canvas reset={reset} setReset={setReset} brushStroke={brushStroke} brushColor={brushColor} />  
        </>
    );
};

export default Home;