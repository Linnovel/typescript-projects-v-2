import { useMemo } from "react";
import { useCriptoStore } from "../src/store";

const CryptoPrice = () => {
  const result = useCriptoStore((state) => state.result);

  //   const hashResult = useMemo(
  //     () => Object.values(result).includes(""),
  //     [result]
  //   );

  return (
    <div>
      <h2>Cotización</h2>
      <div className="result">
        <div>
          <p>
            El precio es de: <span>{result.PRICE}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CryptoPrice;
