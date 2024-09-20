import { useState } from "react";
import Canvas from "../components/Canvas";
import Toolbar from "../components/Toolbar";
const Home = () => {
    const [brushColor,setBrushColor] = useState("white")
    const [brushStroke,setBrushStroke] = useState(2)
    return (
        <>
            <Toolbar setBrushStroke={setBrushStroke}  setBrushColor={setBrushColor} brushColor={brushColor} />
            <Canvas brushStroke={brushStroke} brushColor={brushColor} />  
        </>
    );
};

export default Home;