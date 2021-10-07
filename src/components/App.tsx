import "../scss/App.scss";
import { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import Login from "./login";
import Header from "./Header";
import GeneralBalance from "./GeneralBalance";
import Account from "./Account";
import AddAccount from "./modals/AddAccount";

const App = () => {
  const [login, setLogin] = useState(true);
  const [addAccount, setAddAccount] = useState(false);
  const [showAmount, setShowAmount] = useState(true);
  const hiddeAmout = "----";

  return login ? (
    <Login setLogin={setLogin} />
  ) : (
    <>
      <Header />
      <GeneralBalance
        balance={2500.5}
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
        <Account
          bank={"wallet"}
          name={"Cartera"}
          type={"Cuenta corriente"}
          currency={"MXN"}
          amount={100.01}
          showAmount={showAmount}
          hiddeAmout={hiddeAmout}
        />
        <Account
          bank={"banamex"}
          name={"Debito"}
          type={"Cuenta corriente"}
          currency={"MXN"}
          amount={500.01}
          showAmount={showAmount}
          hiddeAmout={hiddeAmout}
        />
      </section>
      <section className="card">
        <div className="card-header">
          <p className="title">Tarjetas de credito</p>
          <div className="card-options">
            <IoMdAddCircle className="add" />
          </div>
        </div>
      </section>
      {addAccount && <AddAccount setAddAccount={setAddAccount} />}
    </>
  );
};

export default App;
