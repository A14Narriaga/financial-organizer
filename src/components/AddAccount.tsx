import { IoMdCloseCircle } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import AccountInt from "../interfaces/Account";

const AddAccount = ({
  setBalance,
  setAddAccount,
  setAccounts,
}: {
  setBalance: any;
  setAddAccount: any;
  setAccounts: any;
}) => {
  const [valid, setValid] = useState(false);
  const [amount, setAmount] = useState(-1);
  const [name, setName] = useState("");
  const [selectedBank, setSelectedBank] = useState("title");
  const [selectedType, setSelectedType] = useState("title");

  useEffect(() => {
    setValid(
      amount > 0 &&
        name !== "" &&
        selectedBank !== "title" &&
        selectedType !== "title"
    );
  }, [valid, amount, name, selectedBank, selectedType]);

  const saveAccount = () => {
    if (valid) {
      setAccounts((account: any) => [
        ...account,
        new AccountInt(selectedBank, name, selectedType, amount),
      ]);
      setBalance((balance: number) => (balance += amount));
      setAddAccount(false);
    }
  };

  return (
    <section className="add-account">
      <div className="add-header">
        <p>Agregar cuenta</p>
        <IoMdCloseCircle onClick={() => setAddAccount(false)} />
      </div>
      <div className="add-content">
        <div className="add-amount">
          <label htmlFor="amount">saldo actual</label>
          <div>
            <p>{"MXN"}</p>
            <input
							className="input-amount"
              type="text"
              placeholder="00,000.00"
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </div>
        </div>
        <div className="add-name">
          <input
            type="text"
            placeholder="Nombre de la cuenta"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="add-row">
          <label htmlFor="bank">Institución bancaria:</label>
          <select
            id="bank"
            onChange={(e) => setSelectedBank(e.target.value)}
            defaultValue="title"
          >
            <option value="title" disabled>
              Seleccione
            </option>
            <option value="wallet">Cartera</option>
            <option value="banamex">Banamex</option>
            <option value="mercadopago">Mercadopago</option>
            <option value="rappi">Rappi</option>
            <option value="nubank">Nubank</option>
          </select>
        </div>
        <div className="add-row">
          <label htmlFor="type">Tipo:</label>
          <select
            id="type"
            onChange={(e) => setSelectedType(e.target.value)}
            defaultValue="title"
          >
            <option value="title" disabled>
              Seleccione
            </option>
            <option value="Cuenta corriente">Cuenta corriente</option>
            <option value="Cuenta de ahorro">Cuenta de ahorro</option>
          </select>
        </div>
      </div>
      <div className="add-footer">
        <FaCheckCircle
          onClick={saveAccount}
          style={
            valid ? { color: "rgb(47, 255, 92)" } : { color: "rgb(77, 77, 77)" }
          }
        />
      </div>
    </section>
  );
};

export default AddAccount;
