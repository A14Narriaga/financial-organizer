import "../scss/App.scss";
import { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import Login from "./login";
import Header from "./Header";
import GeneralBalance from "./GeneralBalance";
import Account from "./Account";
import AddAccount from "./AddAccount";
import AccountInt from "../interfaces/Account";

const initialAccounts: Array<AccountInt> = JSON.parse("[]");

const App = () => {
  const [login, setLogin] = useState(true);
  const [balance, setBalance] = useState(0);
  const [accounts, setAccounts] = useState(initialAccounts);
  const [addAccount, setAddAccount] = useState(false);
  const [showAmount, setShowAmount] = useState(true);
  const hiddeAmout = "----";

  return login ? (
    <Login setLogin={setLogin} />
  ) : (
    <>
      <Header />
      <GeneralBalance
        balance={balance}
        currency={"MXN"}
        showAmount={showAmount}
        setShowAmount={setShowAmount}
        hiddeAmout={hiddeAmout}
      />
      <section className="card">
        <div className="card-header">
          <p className="title">Mis cuentas</p>
          <div className="card-options">
            <IoMdAddCircle
              className="add"
              onClick={() => setAddAccount(true)}
            />
          </div>
        </div>
        {accounts.map((account: AccountInt) => (
          <Account
						key={account.name}
            bank={account.bank}
            name={account.name}
            type={account.type}
            currency={"MXN"}
            amount={account.amount}
            showAmount={showAmount}
            hiddeAmout={hiddeAmout}
          />
        ))}
      </section>
      {addAccount && (
        <AddAccount
          setBalance={setBalance}
          setAddAccount={setAddAccount}
          setAccounts={setAccounts}
        />
      )}
      <section className="card">
        <div className="card-header">
          <p className="title">Tarjetas de crédito</p>
          <div className="card-options">
            <IoMdAddCircle className="add" />
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
