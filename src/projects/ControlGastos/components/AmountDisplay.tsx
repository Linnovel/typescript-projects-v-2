import { formatcurrency } from "../helpers";

type AmountDisplayProps = {
  label?: string;
  amount: number;
};

const AmountDisplay = ({ label, amount }: AmountDisplayProps) => {
  return (
    <>
      <p className="text-2xl text-bue-600 font-bold">
        {label && `${label}:`}
        <span className="font-black">{formatcurrency(amount)}</span>
      </p>
    </>
  );
};

export default AmountDisplay;
