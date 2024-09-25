import { ChangeEvent, useState } from "react";
import { currencies } from "../dataCripto";
import { useCriptoStore } from "../src/store";
import { Pair } from "../types";
import ErrorMessage from "./ErrorMessage";

const CriptoSearchForm = () => {
  const cryptoCurrencies = useCriptoStore((state) => state.cryptocurrencies);
  const fetchData = useCriptoStore((state) => state.fetchData);

  const [pair, setPair] = useState<Pair>({
    currency: "",
    criptocurrency: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setPair({
      ...pair,
      [e.target.name]: e.target.value,
    });
  };

  const handlesubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(pair).includes("")) {
      setError("Todos los campos son obligatorios");
      return;
    }
    setError("");
    fetchData(pair);
  };

  return (
    <>
      <form className="form" onSubmit={handlesubmit}>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <div>
          <div className="field">
            <label className="currency" htmlFor="currency">
              Moneda:{" "}
            </label>
            <select
              value={pair.currency}
              name="currency"
              id="currency"
              onChange={handleChange}
            >
              <option value="">Seleccione--</option>
              {currencies.map((currency) => (
                <option key={currency.code} value={currency.code}>
                  {currency.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <div className="field">
            <label className="criptocurrency" htmlFor="criptocurrency">
              Criptomoneda:{" "}
            </label>
            <select
              value={pair.criptocurrency}
              name="criptocurrency"
              onChange={handleChange}
              id="criptocurrency"
            >
              <option value="">Seleccione--</option>
              {cryptoCurrencies.map((crypto) => (
                <option
                  key={crypto.CoinInfo.FullName}
                  value={crypto.CoinInfo.Name}
                >
                  {crypto.CoinInfo.FullName}
                </option>
              ))}
            </select>
          </div>
        </div>
        <input type="submit" value="Cotizar" />
      </form>
    </>
  );
};

export default CriptoSearchForm;
