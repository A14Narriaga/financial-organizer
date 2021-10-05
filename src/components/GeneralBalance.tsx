import { FaEye, FaEyeSlash } from "react-icons/fa";

const GeneralBalance = ({
	balance,
	currency,
  showAmount,
  setShowAmount,
  hiddeAmout,
}: {
	balance: number
	currency: string
  showAmount: boolean;
  setShowAmount: any;
  hiddeAmout: string;
}) => {
  return (
    <section className="general-balance">
      <div className="amount">
        <div
          className="line"
          style={
            showAmount
              ? { backgroundColor: "rgb(47, 255, 92)" }
              : { backgroundColor: "whitesmoke" }
          }
        ></div>
        <div className="amount-content">
          <p>Saldo general</p>
          <p>{`${currency} ${showAmount ? balance : hiddeAmout}`}</p>
        </div>
      </div>
      <div
        className="show-amount"
        onClick={() =>
          setShowAmount((amount: boolean) => (amount ? false : true))
        }
      >
        {showAmount ? <FaEye /> : <FaEyeSlash />}
      </div>
    </section>
  );
};

export default GeneralBalance;
