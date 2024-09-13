import { ChangeEvent, FormEvent, useState } from "react";
import { countries } from "../../data/indexClima";
import styles from "./FormWheather.module.css";
import type { SearchTypes } from "../../types";
import Alert from "../Alert/Alert";

type FormProps = {
  fetchWeather: (search: SearchTypes) => Promise<void>;
};

const FormWheather = ({ fetchWeather }: FormProps) => {
  const [search, setSearch] = useState<SearchTypes>({
    city: "",
    country: "",
  });

  const [alert, setAlert] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(search).includes("")) {
      setAlert("Todos los campos son obligatorios");
      return;
    }
    fetchWeather(search);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="city">Ciudad</label>
          <input
            id="city"
            type="text"
            name="city"
            onChange={handleChange}
            placeholder="Ciudad"
            value={search.city}
          />
        </div>
        {alert && <Alert>{alert}</Alert>}
        <div className={styles.field}>
          <label htmlFor="pais">Pais:</label>
          <select
            name="country"
            onChange={handleChange}
            id="country"
            value={search.country}
          >
            <option value="">--Selecciona tu pais--</option>
            {countries.map((country) => (
              <option key={country.code} value={country.code}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
        <input
          className={styles.submit}
          type="submit"
          value="Consultar Clima"
        />
      </form>
    </>
  );
};

export default FormWheather;
