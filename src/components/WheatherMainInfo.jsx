import React from "react";
import styles from "./wheatherMain.module.css";

const WheatherMainInfo = ({ wheater }) => {
  return (
    <div>
      <div className={styles.detalle}>
        <div>
          <ul>City: {wheater?.location.name}</ul>
          <ul>Country: {wheater?.location.country}</ul>
          <ul>Temperature {wheater?.current.temp_c}°</ul>
          <ul>UV {wheater?.current.uv}</ul>
        </div>
        <div>
          <ul>
            <img
              src={`http:${wheater?.current.condition.icon}`}
              width="80"
              alt={wheater?.current.condition.text}
            />{" "}
          </ul>
          <ul> Condition: {wheater?.current.condition.text}</ul>
        </div>
        <div>
          <ul>Temperatura {wheater?.location.tz_id}</ul>
          <ul>Temperatura {wheater?.location.localtime}</ul>
        </div>
      </div>
      <div>
        <div className="map-responsive">
          {/* para que se haga dinamico segun  nuestra ciudad  en el mapa  en el primer  negativo contamos 14 y reemplazamos por la lat luego
        de 3d remplazamos  por  .mas catarce caracteres y ponemos lat  */}
          <iframe
            title="mapa"
            src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d21302.693649604327!2d${wheater?.location.lon}!3d${wheater?.location.lat}027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sec!4v1672977533820!5m2!1ses!2sec`}
            width="600"
            height="450"
            style={{ border: 1 }}
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default WheatherMainInfo;
