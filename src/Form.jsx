import Credentials from "./Credentials.jsx";
import Plan from "./Plan.jsx";
import Addons from "./Addons.jsx";
import Summary from "./Summary.jsx";
import ThankYouSection from "./ThankYouSection.jsx";
import Footer from "./Footer.jsx";

export default function Form({
  step,
  setStep,
  name,
  setName,
  email,
  setEmail,
  number,
  setNumber,
  billing,
  setBilling,
  plan,
  setPlan,
  addons,
  setAddons,
}) {
  let arrString = addons.toString();

  return (
    <form className="form-info-section">
      <Credentials
        step={step}
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        number={number}
        setNumber={setNumber}
      />
      <Plan
        step={step}
        plan={plan}
        setPlan={setPlan}
        billing={billing}
        setBilling={setBilling}
      />
      <Addons
        step={step}
        billing={billing}
        addons={addons}
        setAddons={setAddons}
        arrString={arrString}
      />
      <Summary
        step={step}
        setStep={setStep}
        addons={addons}
        plan={plan}
        billing={billing}
      />
      <ThankYouSection step={step} />
      <Footer
        step={step}
        setStep={setStep}
        name={name}
        email={email}
        number={number}
      />
    </form>
  );
}
