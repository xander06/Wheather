import { useState } from "react";
import styles from "./wheather.module.scss";

const Wheather = ({ onChangeCity }) => {
  const [city, setCity] = useState("");
  function onChange(e) {
    const value = e.target.value;
    if (value !== "") {
      setCity(value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    onChangeCity(city);
  }

  return (
    <form onSubmit={handleSubmit} class={styles.formw}>
        <input
          onChange={onChange}
          class={styles.inputw}
          type="input"
          placeholder="City"
          name="city"
          id="city"
          required
        />
        <label class={styles.labelw} for="city" >
          City
        </label>
      </form>
    
  );
};

export default Wheather;
