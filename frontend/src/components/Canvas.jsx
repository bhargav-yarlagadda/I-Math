import { useEffect, useRef, useState } from "react";

const Canvas = ({brushColor,brushStroke,reset,setReset}) => {
    const canvasRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [lastX, setLastX] = useState(0);
    const [lastY, setLastY] = useState(0);

    const resetCanvas = ()=>{
        const canvas = canvasRef.current
        const context = canvas.getContext('2d');
            if (context) {
                context.clearRect(0,0,canvas.width,canvas.height)
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                context.lineCap = "round"; // pen point type
                
                context.fillStyle = "black"; // background color
                context.fillRect(0, 0, canvas.width, canvas.height)

            }
    }
    useEffect(()=>{
        if(reset){
            resetCanvas()
            setReset(false)
        }
    },[reset])
    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            const context = canvas.getContext('2d');
            if (context) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                context.lineCap = "round"; // pen point type
                context.lineWidth = 2; // default line size
                context.fillStyle = "black"; // background color
                context.fillRect(0, 0, canvas.width, canvas.height); // fill canvas
            }
        }
    }, []);
 
    const startDrawing = (e) => {
        const canvas = canvasRef.current;
        if (canvas) {
            const context = canvas.getContext('2d');
            if (context) {
                context.beginPath();
                context.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
                setLastX(e.nativeEvent.offsetX);
                setLastY(e.nativeEvent.offsetY);
                setIsDrawing(true);
            }
        }
    };

    const stopDrawing = () => {
        setIsDrawing(false);
    };

    const draw = (e) => {
        // no need for a use eefect since every this function is executed when mouse moves so need for a useEffect when brush storke and color is changed
        if (!isDrawing) {
            return;
        }
        const canvas = canvasRef.current;
        if (canvas) {
            const context = canvas.getContext('2d');
            if (context) {
                context.strokeStyle = brushColor;
                context.lineWidth = brushStroke
                context.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
                context.stroke();
                setLastX(e.nativeEvent.offsetX);
                setLastY(e.nativeEvent.offsetY);
            }
        }
    };

    return (
        <div className="w-full h-full">
           
            <canvas
                ref={canvasRef}
                onMouseDown={startDrawing}
                onMouseOut={stopDrawing}
                onMouseUp={stopDrawing}
                onMouseMove={draw}
                className="w-full h-full absolute top-0 left-0"
            ></canvas>
        </div>
    );
    
};

export default Canvas;
