import React from "react";
import { useState, useEffect } from "react";
import SportForm from "../components/SportForm";

const Sports = () => {
  const [sport, setSport] = useState(null);

  
  /*    useEffect Dinamico que se ejecuta cada  vez que wheater cambia y coloca el 
    titulo de la pagina si la variables da error  retornamos  vacio */
  useEffect(() => {
    document.title = `Sport | ${sport?.location.name ?? ""}`;

    return () => {};
  }, [sport]);

 

  return <SportForm />;
};

export default Sports;
