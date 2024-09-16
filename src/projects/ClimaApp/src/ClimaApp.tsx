import FormWheather from "../components/form/FormWheather";
import useWeather from "../hooksAPiClima/useWeather";
import styles from "./ClimaApp.module.css";

const ClimaApp = () => {
  const { fetchWeather } = useWeather();

  return (
    <>
      <h1 className={styles.title}>Buscando el clima</h1>
      <div className={styles.container}>
        <FormWheather fetchWeather={fetchWeather} />
        <p>2</p>
      </div>
    </>
  );
};

export default ClimaApp;
