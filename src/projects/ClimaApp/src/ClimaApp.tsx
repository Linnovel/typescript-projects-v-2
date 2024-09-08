import FormWheather from "../components/form/FormWheather";
import styles from "./ClimaApp.module.css";

const ClimaApp = () => {
  return (
    <>
      <h1 className={styles.title}>Buscando el clima</h1>
      <div className={styles.container}>
        <FormWheather />
        <p>2</p>
      </div>
    </>
  );
};

export default ClimaApp;
