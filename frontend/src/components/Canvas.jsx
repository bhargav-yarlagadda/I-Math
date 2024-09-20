import { useEffect, useRef, useState } from "react";

const Canvas = () => {
    const canvasRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [lastX, setLastX] = useState(0);
    const [lastY, setLastY] = useState(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            const context = canvas.getContext('2d');
            if (context) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                context.lineCap = "round"; // pen point type
                context.lineWidth = 3; // line size
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
        if (!isDrawing) {
            return;
        }
        const canvas = canvasRef.current;
        if (canvas) {
            const context = canvas.getContext('2d');
            if (context) {
                context.strokeStyle = "white";
                context.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
                context.stroke();
                setLastX(e.nativeEvent.offsetX);
                setLastY(e.nativeEvent.offsetY);
            }
        }
    };

    return (
        <canvas
            ref={canvasRef}
            onMouseDown={startDrawing}
            onMouseOut={stopDrawing}
            onMouseUp={stopDrawing}
            onMouseMove={draw}
            className="w-full h-full absolute top-0 left-0"
        ></canvas>
    );
};

export default Canvas;
