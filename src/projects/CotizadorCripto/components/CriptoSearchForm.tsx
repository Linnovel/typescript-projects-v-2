import { currencies } from "../dataCripto";

const CriptoSearchForm = () => {
  return (
    <>
      <form className="form">
        <div>
          <div className="field">
            <label className="curency" htmlFor="">
              Moneda:{" "}
            </label>
            <select name="curency" id="curency">
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
            <label className="criptcurrency" htmlFor="">
              Criptomoneda:{" "}
            </label>
            <select name="criptcurrency" id="criptcurrency">
              <option value="">Seleccione--</option>
            </select>
          </div>
        </div>
        <input type="submit" value="Cotizar" />
      </form>
    </>
  );
};

export default CriptoSearchForm;
