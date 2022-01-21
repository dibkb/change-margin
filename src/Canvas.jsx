// css
import "./Canvas.css";
import React, { useState, useRef, useEffect, useCallback } from "react";
const Canvas = () => {
  const canvasRef = useRef(null);
  const divRef = useRef(null);
  const chipRef = useRef(null);
  const [marginTop, setMarginTop] = useState(0);
  // on first render reposition canvas to fit size of div
  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.style.top = `${divRef.current.getBoundingClientRect().top}px`;
    canvas.style.left = `${divRef.current.getBoundingClientRect().left}px`;
    canvas.style.height = `${divRef.current.getBoundingClientRect().top}px`;
    canvas.style.width = `${divRef.current.getBoundingClientRect().width}px`;
  }, []);
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    divRef.current.style.marginTop = `${marginTop}px`;
    canvasRef.current.style.height = `${
      divRef.current.getBoundingClientRect().top
    }px`;

    // console.log(heightToIncrease);
    const center = canvas.getBoundingClientRect().width / 2;
    if (context) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.beginPath();
      context.moveTo(center, 0);
      context.lineTo(center, 100);
      console.log(canvas.getBoundingClientRect().bottom);

      // context.lineTo(
      //   center,
      //   canvas.getBoundingClientRect().bottom - canvas.getBoundingClientRect().y
      // );
      context.strokeStyle = "#1087e8";
      context.stroke();
    }
    //  console.log(divRef.current.getBoundingClientRect());
  }, [marginTop]);
  return (
    <div className="container">
      <canvas ref={canvasRef} className="canvas"></canvas>
      <div className="content" ref={divRef}>
        <div className="chip" ref={chipRef}>
          Margin Top : {marginTop}px
        </div>
      </div>

      <div className="input">
        Change Top Margin
        <input
          type="number"
          onChange={useCallback((e) => setMarginTop(e.target.value), [])}
        />
      </div>
    </div>
  );
};

export default React.memo(Canvas);
