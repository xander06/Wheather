import { useState } from "react";

const Wheather = ({onChangeCity}) => {
  const [city, setCity] = useState("");
  function onChange(e) {
    const value = e.target.value;
    if (value !== '') {
      setCity(value);
    }
  }

  function  handleSubmit (e) {
    e.preventDefault();
    onChangeCity(city);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={onChange} />
    </form>
  );
};

export default Wheather;
