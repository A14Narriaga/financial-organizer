import { FaEye, FaEyeSlash } from "react-icons/fa";

const GeneralBalance = ({
  showAmount,
  setShowAmount,
  hiddeAmout,
}: {
  showAmount: boolean;
  setShowAmount: any;
  hiddeAmout: string;
}) => {
  const currency = "MXN";
  const amount = 28457.01;
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
          <p>{`${currency} ${showAmount ? amount : hiddeAmout}`}</p>
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
