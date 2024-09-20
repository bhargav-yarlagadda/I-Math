import { useState } from "react";
import Canvas from "../components/Canvas";
import Toolbar from "../components/Toolbar";
const Home = () => {
    const [brushColor,setBrushColor] = useState("white")
    return (
        <>
            <Toolbar setBrushColor={setBrushColor} brushColor={brushColor} />
            <Canvas brushColor={brushColor} />  
        </>
    );
};

export default Home;