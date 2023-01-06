import React from "react";
import Wheather from "../components/Wheather";
import { useState } from "react";

const Clima = () => {
  const [wheather, setWheater] = useState(null);

  async function loadInfo(city = "ibarra") {
    try {
        const request = await fetch(
        `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`
        );
        const json = await request.json();
        setWheater(json);
        console.log(json);  
    }
    catch (error) {
        
    }
  }

  function onChangeCity(city) {
    setWheater(null);
    loadInfo(city);
  }

  return (
    <div>
      <Wheather onChangeCity={onChangeCity} />
      <div>Temperatura {wheather?.current.temp_c}</div>
    </div>
  );
}

export default Clima;
