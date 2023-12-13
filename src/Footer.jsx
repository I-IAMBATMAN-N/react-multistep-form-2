export default function Footer({ step, setStep, name, email, number }) {
  function checkInputs() {
    const regNum = /[0-9]/;

    let bool = true;

    if (!name.length) bool = false;
    if (!email.length) bool = false;
    if (!number.length) bool = false;

    // console.log(email.search("@") > -1);

    return bool;
  }
  function increaseStep() {
    if (step < 3) {
      setStep((step) => step + 1);
    } else if (step === 3) {
      if (checkInputs() === false) {
        alert("Fill all inputs corectly first");
      } else if (checkInputs() === true) {
        setStep((step) => step + 1);
      }
    }
  }
  function decreaseStep() {
    setStep((step) => step - 1);
  }

  return (
    <footer className={`form-footer  ${step > 3 ? "d-none" : ""}`}>
      <div className="form-footer--container">
        <a
          href="#"
          className={`change-step ${step > 0 ? "" : "d-none"}`}
          onClick={() => decreaseStep()}
        >
          Go Back
        </a>
        <a
          href="#"
          className="change-step"
          onClick={() => increaseStep()}
          style={
            step !== 3
              ? { backgroundColor: "hsl(213, 96%, 18%)" }
              : { backgroundColor: "hsl(243, 100%, 62%)" }
          }
        >
          {step !== 3 ? "Next Step" : "Confirm"}
        </a>
      </div>
    </footer>
  );
}
