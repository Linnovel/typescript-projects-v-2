import FormWheather from "../components/form/FormWheather";
import Spinner from "../components/spinner/Spinner";
import WeatherDetail from "../components/WeatherDetail/WeatherDetail";
import useWeather from "../hooksAPiClima/useWeather";
import styles from "./ClimaApp.module.css";

const ClimaApp = () => {
  const { weather, fetchWeather, hasWeatherData, loading } = useWeather();

  return (
    <>
      <h1 className={styles.title}>Buscando el clima</h1>
      <div className={styles.container}>
        <FormWheather fetchWeather={fetchWeather} />
        {loading && <Spinner />}
        {hasWeatherData && <WeatherDetail weather={weather} />}
      </div>
    </>
  );
};

export default ClimaApp;
