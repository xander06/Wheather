import { useState } from "react";
import styles from './wheather.module.scss'

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
    <form onSubmit={handleSubmit} className={styles.formw}>
      <input type="text" onChange={onChange} className={styles.inputw} name="city"/>
      <label for="city" className={styles.laberlw}> Ingresa la ciudad a consultar</label>
    </form>
  );
};

export default Wheather;
