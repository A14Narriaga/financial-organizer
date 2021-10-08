import amountFormat from "../utils";

const Account = ({
  bank,
  name,
  type,
  currency,
  amount,
  showAmount,
  hiddeAmout,
}: {
  bank: string;
  name: string;
  type: string;
  currency: string;
  amount: number;
  showAmount: boolean;
  hiddeAmout: string;
}) => {
  return (
    <section className="account">
      <div className="account-info">
        <div className="bank-img">
          <img src={`banks/${bank}.png`} alt="bank-img" />
        </div>
        <div className="account-data">
          <p>{name}</p>
          <p>{type}</p>
        </div>
      </div>
      <div className="account-amount">
        <p>{`${currency} ${showAmount ? amountFormat(amount) : hiddeAmout}`}</p>
      </div>
    </section>
  );
};

export default Account;
