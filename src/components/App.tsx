import "../scss/App.scss";
import { useState } from "react";
import Header from "./Header";
import GeneralBalance from "./GeneralBalance";

const App = () => {
  const [showAmount, setShowAmount] = useState(true);
  const hiddeAmout = "----";

  return (
    <>
      <Header />
      <GeneralBalance showAmount={showAmount} setShowAmount={setShowAmount} hiddeAmout={hiddeAmout}/>
    </>
  );
};

export default App;
