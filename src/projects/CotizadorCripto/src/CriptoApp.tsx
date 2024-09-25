import { useEffect } from "react";
import CriptoSearchForm from "../components/CriptoSearchForm";
import { useCriptoStore } from "./store";
import CryptoPrice from "../components/CryptoPrice";

const CriptoApp = () => {
  const fetchCryptos = useCriptoStore((state) => state.fetchCryptos);

  useEffect(() => {
    fetchCryptos();
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="app-title">
          Cotizador de <span>Criptomonedas</span>
        </h1>
        <div className="content">
          <CriptoSearchForm />
          <CryptoPrice />
        </div>
      </div>
    </>
  );
};

export default CriptoApp;
