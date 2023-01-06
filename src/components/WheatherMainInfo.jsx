import React from "react";

const WheatherMainInfo = ({ wheater }) => {
  return (
    <div>
      <div>{wheater?.location.name}</div>
      <div>{wheater?.location.country}</div>
      <div>
        <div>
          <img
            src={`http:${wheater?.current.condition.icon}`}
            width="80"
            alt={wheater?.current.condition.text}
          />
        </div>
        <div>
          <div>{wheater?.current.condition.text}</div>
          <div>Temperatura {wheater?.current.temp_c}°</div>
        </div>
      </div>
      <div className="map-responsive">
        {/* para que se haga dinamico segun  nuestra ciudad  en el mapa  en el primer  negativo contamos 14 y reemplazamos por la lat luego
        de 3d remplazamos  por  .mas catarce caracteres y ponemos lat  */}
      <iframe 
      title="mapa"
        src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d21302.693649604327!2d${wheater?.location.lon}!3d${wheater?.location.lat}027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sec!4v1672977533820!5m2!1ses!2sec`}
        width="600"
        height="450"
        style={{border: 1}}
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      </div>
    </div>
  );
};

export default WheatherMainInfo;
