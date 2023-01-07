import React from "react";
import Wheather from "../components/Wheather";
import { useState, useEffect } from "react";
import WheatherMainInfo from "../components/WheatherMainInfo";
import styles from '../components/clima.module.css'


const Clima = () => {
  const [wheather, setWheater] = useState(null);

    useEffect(() => {
      loadInfo();
    
      return () => {
       
      }
    }, [])

    /*useEffect Dinamico que se ejecuta cada  vez que wheater cambia y coloca el 
    titulo de la pagina si la variables da error  retornamos  vacio */
    useEffect(() => {
        document.title = `Wheather | ${wheather?.location.name ?? ""}`;
      
        return () => {
         
        }
      }, [wheather])
    

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
    <div className={styles.climaContainer}>
      <Wheather onChangeCity={onChangeCity} />
      <WheatherMainInfo wheater={wheather} />
    </div>
  );
}

export default Clima;
