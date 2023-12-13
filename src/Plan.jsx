import iconAdvanced from "./assets/images/icon-advanced.svg";
import iconArcade from "./assets/images/icon-arcade.svg";
import iconPro from "./assets/images/icon-pro.svg";

export default function Plan({ step, billing, setBilling, plan, setPlan }) {
  function handlePlan(string) {
    setPlan(string);
  }
  function checkBilling() {
    setBilling((billing) => (billing === "monthly" ? "yearly" : "monthly"));
  }
  return (
    <section
      className={`form-info--content-container step-2 ${
        step === 1 ? "" : "d-none"
      }`}
    >
      <header>
        <h2 className="form-heading-1">Select your plan</h2>
        <p className="form-text">
          You have the option of monthly or yearly billing.
        </p>
      </header>
      <div className="choices-container">
        <div
          className={`choice-container ${plan === "arcade" ? "active" : ""}`}
          onClick={() => handlePlan("arcade")}
        >
          <img
            src={iconAdvanced}
            alt="arcade choice icon"
            className="choice-img"
          />
          <div className="choice-description-container">
            <h3 className="heading-3">Arcade</h3>
            <p className="choice-description">
              $9
              <span className={billing === "yearly" ? "d-none" : ""}>/mo</span>
              <span className={`${billing === "monthly" ? "d-none" : ""}`}>
                0/yr
              </span>
            </p>
          </div>
        </div>
        <div
          className={`choice-container ${plan === "advanced" ? "active" : ""}`}
          onClick={() => handlePlan("advanced")}
        >
          <img
            src={iconArcade}
            alt="arcade choice icon"
            className="choice-img"
          />
          <div className="choice-description-container">
            <h3 className="heading-3">Advanced</h3>
            <p className="choice-description">
              $12
              <span className={billing === "yearly" ? "d-none" : ""}>/mo</span>
              <span className={`${billing === "monthly" ? "d-none" : ""}`}>
                0/yr
              </span>
            </p>
          </div>
        </div>
        <div
          className={`choice-container ${plan === "pro" ? "active" : ""}`}
          onClick={() => handlePlan("pro")}
        >
          <img src={iconPro} alt="arcade choice icon" className="choice-img" />
          <div className="choice-description-container">
            <h3 className="heading-3">Pro</h3>
            <p className="choice-description">
              $15
              <span className={billing === "yearly" ? "d-none" : ""}>/mo</span>
              <span className={`${billing === "monthly" ? "d-none" : ""}`}>
                0/yr
              </span>
            </p>
          </div>
        </div>
        <div className="plan-switch-container">
          <p
            className={`plan-switch-period ${
              billing === "monthly" ? "active" : ""
            }`}
          >
            Monthly
          </p>
          <span className="plan-switch">
            <input
              type="checkbox"
              className="plan-checkbox"
              autoComplete="off"
              onClick={() => checkBilling()}
            />
            <span className="plan-switch--button"></span>
          </span>
          <p
            className={`plan-switch-period ${
              billing === "yearly" ? "active" : ""
            }`}
          >
            Yearly
          </p>
        </div>
      </div>
    </section>
  );
}
