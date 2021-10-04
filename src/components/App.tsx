import "../scss/App.scss";
import { useState } from "react";
import Header from "./Header";
import GeneralBalance from "./GeneralBalance";
import Account from "./Account";

const App = () => {
  const [showAmount, setShowAmount] = useState(true);
  const hiddeAmout = "----";

  return (
    <>
      <Header />
      <GeneralBalance showAmount={showAmount} setShowAmount={setShowAmount} hiddeAmout={hiddeAmout}/>
			<section className="accounts">
				<p className="title">Mis cuentas</p>
				<Account />
				<Account />
				<Account />
			</section>
    </>
  );
};

export default App;
