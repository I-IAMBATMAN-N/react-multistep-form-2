export default function Summary({ step, setStep, addons, plan, billing }) {
  function getPlanPrice(plan) {
    if (plan === "arcade") {
      return 9;
    } else if (plan === "advanced") {
      return 12;
    } else if (plan === "pro") {
      return 15;
    }
  }
  function getAddonPrice(addon) {
    if (addon !== "Online service") {
      return 2;
    } else {
      return 1;
    }
  }
  function getTotal() {
    let price = 0;

    price += getPlanPrice(plan);

    addons.forEach((addon) => {
      price += getAddonPrice(addon);
    });

    return price;
  }

  return (
    <section
      className={`form-info--content-container step-4 ${
        step === 3 ? "" : "d-none"
      }`}
    >
      <header>
        <h2 className="form-heading-1">Finishing up</h2>
        <p className="form-text">
          Double-check everything looks OK before confirming.
        </p>
      </header>
      <div className="choices-container">
        <div className="plan-container">
          <div className="plan-container--text-container">
            <h3 className="heading-3">
              {plan} ({billing})
            </h3>
            <a href="#" className="change-plan-link" onClick={() => setStep(1)}>
              Change
            </a>
          </div>
          <span className="plan-price">
            ${getPlanPrice(plan)}
            <span className={billing === "yearly" ? "d-none" : ""}>/mo</span>
            <span className={billing === "monthly" ? "d-none" : ""}>0/yr</span>
          </span>
        </div>
        <div className="add-ons-container">
          {addons.map((addon) => (
            <li className="add-on" key={Math.random()}>
              <p className="form-text">{addon}</p>
              <span className="plan-price">
                ${getAddonPrice(addon)}
                <span className={billing === "yearly" ? "d-none" : ""}>
                  /mo
                </span>
                <span className={billing === "monthly" ? "d-none" : ""}>
                  0/yr
                </span>
              </span>
            </li>
          ))}
        </div>
      </div>
      <div className="total-container">
        <h3 className="total">
          Total <span className="total-period"></span>
        </h3>
        <span className="total-price">
          ${getTotal()}
          <span className={billing === "yearly" ? "d-none" : ""}>/mo</span>
          <span className={billing === "monthly" ? "d-none" : ""}>0/yr</span>
        </span>
      </div>
    </section>
  );
}
