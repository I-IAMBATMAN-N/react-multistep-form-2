import Aside from "./Aside.jsx";
import Form from "./Form.jsx";

import { useState } from "react";

import "./Style.css";
import "./Queries.css";

function App() {
  const [step, setStep] = useState(0);
  const [billing, setBilling] = useState("monthly");
  const [plan, setPlan] = useState("arcade");
  const [addons, setAddons] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  return (
    <>
      <div className="container">
        <div className="form">
          <Aside step={step} setStep={setStep} />
          <Form
            step={step}
            setStep={setStep}
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            number={number}
            setNumber={setNumber}
            billing={billing}
            setBilling={setBilling}
            plan={plan}
            setPlan={setPlan}
            addons={addons}
            setAddons={setAddons}
          />
        </div>
      </div>
    </>
  );
}

export default App;
