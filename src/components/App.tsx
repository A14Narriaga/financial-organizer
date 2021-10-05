import "../scss/App.scss";
import { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import Header from "./Header";
import GeneralBalance from "./GeneralBalance";
import Account from "./Account";

const App = () => {
  const [showAmount, setShowAmount] = useState(true);
  const hiddeAmout = "----";

  return (
    <>
      <Header />
      <GeneralBalance
        balance={2500.50}
				currency={"MXN"}
        showAmount={showAmount}
        setShowAmount={setShowAmount}
        hiddeAmout={hiddeAmout}
      />
      <section className="card">
        <div className="card-header">
          <p className="title">Mis cuentas</p>
          <div className="card-options">
            <IoMdAddCircle className="add" />
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
    </>
  );
};

export default App;
