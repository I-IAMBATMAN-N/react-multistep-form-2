export default function Addons({
  step,
  addons,
  setAddons,
  billing,
  arrString,
}) {
  function checkCheckbox(string) {
    if (addons.filter((addon) => addon === string).length > 0) {
      return true;
    } else if (!addons.filter((addon) => addon === string).length > 0) {
      return false;
    }
  }
  function handleAddons(string) {
    if (arrString.search(string) > -1) {
      setAddons((addons) => addons.filter((addon) => addon !== string));
      arrString = addons.toString();
    } else if (!arrString.search(string) > -1) {
      setAddons([...addons, string]);
      arrString = addons.toString();
    }
  }
  return (
    <section
      className={`form-info--content-container step-3 ${
        step === 2 ? "" : "d-none"
      }`}
    >
      <header>
        <h2 className="form-heading-1">Pick add-ons</h2>
        <p className="form-text">
          Add-ons help enhance your gaming experience.
        </p>
      </header>
      <div className="choices-container">
        <div
          className={`choice-container ${
            arrString.search("Online service") > -1 ? "active" : ""
          }`}
          onClick={() => handleAddons("Online service")}
        >
          <span className="input-container">
            <input
              type="checkbox"
              defaultChecked={checkCheckbox("Online service")}
            />
            <span className="checkbox-style">
              <span className="checkbox-mark">&#10003;</span>
            </span>
          </span>
          <div className="choice-description-container">
            <h3 className="heading-3">Online service</h3>
            <p className="choice-description">Access to multiplayer games</p>
          </div>
          <p className="price">
            +$1
            <span className={`${billing === "yearly" ? "d-none" : ""}`}>
              /mo
            </span>
            <span className={`${billing === "monthly" ? "d-none" : ""}`}>
              0/yr
            </span>
          </p>
        </div>
        <div
          className={`choice-container ${
            arrString.search("Larger storage") > -1 ? "active" : ""
          }`}
          onClick={() => handleAddons("Larger storage")}
        >
          <span className="input-container">
            <input
              type="checkbox"
              defaultChecked={checkCheckbox("Larger storage")}
            />
            <span className="checkbox-style">
              <span className="checkbox-mark">&#10003;</span>
            </span>
          </span>
          <div className="choice-description-container">
            <h3 className="heading-3">Larger storage</h3>
            <p className="choice-description">Extra 1TB of cloud save</p>
          </div>
          <p className="price">
            +$2
            <span className={`${billing === "yearly" ? "d-none" : ""}`}>
              /mo
            </span>
            <span className={`${billing === "monthly" ? "d-none" : ""}`}>
              0/yr
            </span>
          </p>
        </div>
        <div
          className={`choice-container ${
            arrString.search("Customizable Profile") > -1 ? "active" : ""
          }`}
          onClick={() => handleAddons("Customizable Profile")}
        >
          <span className="input-container">
            <input
              type="checkbox"
              defaultChecked={checkCheckbox("Customizable Profile")}
            />
            <span className="checkbox-style">
              <span className="checkbox-mark">&#10003;</span>
            </span>
          </span>
          <div className="choice-description-container">
            <h3 className="heading-3">Customizable Profile</h3>
            <p className="choice-description">Custom theme on your profile</p>
          </div>
          <p className="price">
            +$2
            <span className={`${billing === "yearly" ? "d-none" : ""}`}>
              /mo
            </span>
            <span className={`${billing === "monthly" ? "d-none" : ""}`}>
              0/yr
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
