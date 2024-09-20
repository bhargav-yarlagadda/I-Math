import { useEffect, useRef, useState } from "react";

const Canvas = ({ brushColor, brushStroke, reset, setReset, isEraser }) => {
    const canvasRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [lastX, setLastX] = useState(0);
    const [lastY, setLastY] = useState(0);

    const resetCanvas = () => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        if (context) {
            context.clearRect(0, 0, canvas.width, canvas.height);
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            context.fillStyle = "black"; // Background color
            context.fillRect(0, 0, canvas.width, canvas.height);
        }
    };

    useEffect(() => {
        if (reset) {
            resetCanvas();
            setReset(false);
        }
    }, [reset]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            const context = canvas.getContext('2d');
            if (context) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                context.fillStyle = "black"; // Background color
                context.fillRect(0, 0, canvas.width, canvas.height); // Fill canvas
            }
        }
    }, []);

    const startDrawing = (e) => {
        const canvas = canvasRef.current;
        if (canvas) {
            const context = canvas.getContext('2d');
            context.beginPath();
            context.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
            setLastX(e.nativeEvent.offsetX);
            setLastY(e.nativeEvent.offsetY);
            setIsDrawing(true);
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
            context.strokeStyle = isEraser ? "black" : brushColor; // Set to black for erasing
            context.lineWidth = isEraser ? brushStroke * 2 : brushStroke; // Increase size for erasing
            context.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
            context.stroke();
            setLastX(e.nativeEvent.offsetX);
            setLastY(e.nativeEvent.offsetY);
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
