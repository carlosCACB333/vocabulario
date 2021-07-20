import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  arrayRemoveRepeated,
  arrayToString,
  gererarCadenas,
} from "../helpers/functions";

const Cadena = () => {
  const count = useSelector((state) => state.count);
  const active = useSelector((state) => state.vocabulario.active.vocabulario);

  const [state, setState] = useState([]);
  const [universo, setUniverso] = useState("");
  const [lenguaje, setLenguaje] = useState([]);

  const handleClick = () => {
    if (active.length !== 0) {
      setState(gererarCadenas(active, count.cantidad));
    }
  };

  useEffect(() => {
    setState([]);
  }, [active]);

  useEffect(() => {
    if (state.length !== 0) {
      setUniverso(arrayToString(arrayRemoveRepeated(state.concat([["..."]]))));
      setLenguaje(gererarCadenas(arrayRemoveRepeated(state), 10));
    }
  }, [state]);

  return (
    <div>
      <div className="text-center mb-3">
        <button
          className="btn btn-primary btn-lg"
          onClick={handleClick}
          hidden={active.length === 0 ? true : false}
        >
          Generar cadenas
        </button>
      </div>

      <div className="m-1">
        {state.length !== 0 ? (
          <div>
            <div
              className="text-white  overflow-auto d-grid"
              style={{ maxHeight: "400px" }}
            >
              {state.map((value, index) => (
                <div
                  className=" d-flex justify-content-between align-items-center shadow-lg rounded p-2 m-2 animate__animated animate__zoomInLeft"
                  key={index}
                >
                  {index + 1} = {value}
                  <span className="badge bg-primary rounded-pill">
                    {value.length}
                  </span>
                </div>
              ))}
            </div>

            {/* <div className="text-white d-flex flex-column">
              <strong className="text-dark">universo del discurso</strong>
              <div>W(V)= {universo}</div>
            </div>
            <div className="text-white">
              <strong className="text-dark">lenjuaje</strong>

              <div
                className="text-white  overflow-auto d-grid"
                style={{ maxHeight: "400px" }}
              >
                {lenguaje.map((value, index) => (
                  <div
                    className=" d-flex justify-content-between align-items-center shadow-lg rounded p-2 m-2 animate__animated animate__zoomInLeft"
                    key={index}
                  >
                    W({index + 1}) = {arrayToString(value)}
                    <span className="badge bg-primary rounded-pill">
                      {value.length}
                    </span>
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Cadena;
