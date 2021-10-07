import { IoMdCloseCircle } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { useEffect, useState } from "react";

const AddAccount = ({ setAddAccount }: { setAddAccount: any }) => {
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
    console.log(valid);
  }, [valid, amount, name, selectedBank, selectedType]);

  const saveAccount = () => {
    if (valid) {
      setAddAccount(false);
    }
  };

  return (
    <section className="addAccount">
      <div className="add-header">
        <p>Agregar cuenta</p>
        <IoMdCloseCircle
          onClick={() =>
            setAddAccount(false)
          }
        />
      </div>
      <div className="add-amount">
        <label htmlFor="amount">saldo actual</label>
        <div>
          <p>{"MXN"}</p>
          <input
            id="amount"
            type="number"
            placeholder="00,000.00"
            min="0"
            onChange={(e) =>
              setAmount(e.target.value === "" ? -1 : Number(e.target.value))
            }
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
          <option value="current">Cuenta corriente</option>
          <option value="save">Cuenta de ahorro</option>
        </select>
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
