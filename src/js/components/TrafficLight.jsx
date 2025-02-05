import React, { useState, useEffect } from "react";

const TrafficLight = () => {
  const [color, setColor] = useState("red");
  const [encendido, setEncendido] = useState(false);
  const [haspurple, setHaspurple] = useState(false);

  const hacerClick = (color) => {
    setColor(color);
  };

  useEffect(() => {
    let interval;

    if (encendido) {
      interval = setInterval(() => {
        setColor((prevColor) => {
          if (prevColor === "purple") return "green";
          if (prevColor === "red") return haspurple ? "purple" : "green";
          if (prevColor === "green") return "yellow";
          if (prevColor === "yellow") return "red";
          return "red";
        });
      }, 3000);
    }

    return () => clearInterval(interval);
  }, [encendido, haspurple]);

  const startCycle = () => setEncendido(true);
  const stopCycle = () => setEncendido(false);
  const addpurple = () => setHaspurple(!haspurple);

  // URLs de las imágenes
  const imagenVerde =
    "https://acortar.link/yUUwl9";
  const imagenRoja =
    "https://acortar.link/jxH0Yp";
  

  return (
    <div>
      <div className="text-center py-5">
        <h1>Proyecto Semaforo</h1>
        <h1>de</h1>
        <h3> Eric Muler</h3>

        
        <div className="contenedor-semaforo">
          
          <div
            className={`redLight ${color === "red" ? "active" : ""}`}
            onClick={() => hacerClick("red")}
          ></div>
          <div
            className={`yellowLight ${color === "yellow" ? "active" : ""}`}
            onClick={() => hacerClick("yellow")}
          ></div>
          <div
            className={`greenLight ${color === "green" ? "active" : ""}`}
            onClick={() => hacerClick("green")}
          ></div>
          {haspurple && (
            <div
              className={`purpleLight ${color === "purple" ? "active" : ""}`}
              onClick={() => hacerClick("purple")}
            ></div>
          )}
        </div>

        
        <div className="poste-semaforo"></div>

        
        {color === "green" && (
          <img
            src={imagenVerde}
            alt="Imagen luz verde"
            className="imagen-izquierda"
          />
        )}

        
        {color === "red" && (
          <img
            src={imagenRoja}
            alt="Imagen luz roja"
            className="imagen-derecha"
          />
        )}

      
      </div>

      
      <div className="d-flex gap-3 justify-content-center mt-3">
        <button type="button" className="btn btn-success" onClick={startCycle}>
          Iniciar
        </button>
        <button type="button" className="btn btn-danger" onClick={stopCycle}>
          Detener
        </button>
        <button type="button" className="btn btn-purple" onClick={addpurple}>
          Añadir luz
        </button>
      </div>
    </div>
  );
};

export default TrafficLight;