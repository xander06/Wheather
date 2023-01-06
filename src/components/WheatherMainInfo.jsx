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
    </div>
  );
};

export default WheatherMainInfo;
