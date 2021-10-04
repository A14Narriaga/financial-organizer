const Account = () => {
  return (
    <section className="account">
      <div className="account-info">
        <div className="bank-img">
          <img src="banks/banamex.png" alt="bank-img" />
        </div>
        <div className="account-data">
          <p>Cartera</p>
          <p>Cuenta corriente</p>
        </div>
      </div>
      <div className="account-amount">
        <p>{`${"MXN"} ${"28007.10"}`}</p>
      </div>
    </section>
  );
};

export default Account;
