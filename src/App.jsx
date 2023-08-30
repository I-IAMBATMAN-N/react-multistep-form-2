// import "./App.css";
import Aside from "./Aside.jsx";

import "./Style.css";
import "./Queries.css";

function App() {
  return (
    <>
      <div className="container">
        <form onSubmit="" className="form">
          <Aside />
          <article className="form-info-section">
            <section className="form-info--content-container step-1">
              <header>
                <h2 className="form-heading-1">Personal info</h2>
                <p className="form-text">
                  Please provide your name, email address, and phone number.
                </p>
              </header>
              <div className="inputs-container">
                <div className="input-container">
                  <label for="">Name</label>
                  <input
                    minLength="6"
                    type="text"
                    placeholder="e.g. Stephen King"
                    className="step-1 input"
                  />
                </div>
                <div className="input-container">
                  <label for="">Email Address</label>
                  <input
                    minLength="6"
                    type="text"
                    placeholder="e.g. stephenking@lorem.com"
                    className="step-1 input"
                  />
                </div>
                <div className="input-container">
                  <label for="">Phone Number</label>
                  <input
                    minLength="6"
                    type="text"
                    placeholder="e.g. +1 234 567 890"
                    className="step-1 input"
                  />
                </div>
              </div>
            </section>
            {/* <section className="form-info--content-container step-2">
              <header>
                <h2 className="form-heading-1">Select your plan</h2>
                <p className="form-text">
                  You have the option of monthly or yearly billing.
                </p>
              </header>
              <div className="choices-container">
                <div className="choice-container active">
                  <img
                    src="assets/images/icon-arcade.svg"
                    alt="arcade choice icon"
                    className="choice-img"
                  />
                  <div className="choice-description-container">
                    <h3 className="heading-3">Arcade</h3>
                    <p className="choice-description">
                      $9<span>/mo</span>
                      <span className="d-none">0/yr</span>
                    </p>
                  </div>
                </div>
                <div className="choice-container">
                  <img
                    src="assets/images/icon-advanced.svg"
                    alt="arcade choice icon"
                    className="choice-img"
                  />
                  <div className="choice-description-container">
                    <h3 className="heading-3">Advanced</h3>
                    <p className="choice-description">
                      $12<span>/mo</span>
                      <span className="d-none">0/yr</span>
                    </p>
                  </div>
                </div>
                <div className="choice-container">
                  <img
                    src="assets/images/icon-pro.svg"
                    alt="arcade choice icon"
                    className="choice-img"
                  />
                  <div className="choice-description-container">
                    <h3 className="heading-3">Pro</h3>
                    <p className="choice-description">
                      $15<span>/mo</span>
                      <span className="d-none">0/yr</span>
                    </p>
                  </div>
                </div>
                <div className="plan-switch-container">
                  <p className="plan-switch-period active">Monthly</p>
                  <span className="plan-switch">
                    <input
                      type="checkbox"
                      className="plan-checkbox"
                      autocomplete="off"
                    />
                    <span className="plan-switch--button"></span>
                  </span>
                  <p className="plan-switch-period">Yearly</p>
                </div>
              </div>
            </section>
            <section className="form-info--content-container step-3">
              <header>
                <h2 className="form-heading-1">Pick add-ons</h2>
                <p className="form-text">
                  Add-ons help enhance your gaming experience.
                </p>
              </header>
              <div className="choices-container">
                <div className="choice-container">
                  <span className="input-container">
                    <input type="checkbox" />
                    <span className="checkbox-style">
                      <span className="checkbox-mark">&check;</span>
                    </span>
                  </span>
                  <div className="choice-description-container">
                    <h3 className="heading-3">Online service</h3>
                    <p className="choice-description">
                      Access to multiplayer games
                    </p>
                  </div>
                  <p className="price">
                    +$1<span>/mo</span>
                    <span className="d-none">0/yr</span>
                  </p>
                </div>
                <div className="choice-container">
                  <span className="input-container">
                    <input type="checkbox" />
                    <span className="checkbox-style">
                      <span className="checkbox-mark">&check;</span>
                    </span>
                  </span>
                  <div className="choice-description-container">
                    <h3 className="heading-3">Larger storage</h3>
                    <p className="choice-description">Extra 1TB of cloud save</p>
                  </div>
                  <p className="price">
                    +$2<span>/mo</span>
                    <span className="d-none">0/yr</span>
                  </p>
                </div>
                <div className="choice-container">
                  <span className="input-container">
                    <input type="checkbox" />
                    <span className="checkbox-style">
                      <span className="checkbox-mark">&check;</span>
                    </span>
                  </span>
                  <div className="choice-description-container">
                    <h3 className="heading-3">Customizable Profile</h3>
                    <p className="choice-description">
                      Custom theme on your profile
                    </p>
                  </div>
                  <p className="price">
                    +$2<span>/mo</span>
                    <span className="d-none">0/yr</span>
                  </p>
                </div>
              </div>
            </section>
            <section className="form-info--content-container step-4">
              <header>
                <h2 className="form-heading-1">Finishing up</h2>
                <p className="form-text">
                  Double-check everything looks OK before confirming.
                </p>
              </header>
              <div className="choices-container">
                <div className="plan-container">
                  <div className="plan-container--text-container">
                    <h3 className="heading-3">Arcade (Monthly)</h3>
                    <a href="#" className="change-plan-link">
                      Change
                    </a>
                  </div>
                  <span className="plan-price">$9/mo</span>
                </div>
                <div className="add-ons-container"></div>
              </div>
              <div className="total-container">
                <h3 className="total">
                  Total <span className="total-period"></span>
                </h3>
                <span className="total-price"></span>
              </div>
            </section>
            <section className="form-info--content-container step-5">
              <header>
                <img src="assets/images/icon-thank-you.svg" alt="" />
                <h2 className="form-heading-1">Thank you!</h2>
                <p className="form-text">
                  Thanks for confirming your subscription! <br />
                  We hope you have fun using our platform. If you ever need
                  support, please feel free to email us at <br />
                  support@loremgaming.com.
                </p>
              </header>
              <div className="choices-container">
                <div className="add-ons-container"></div>
              </div>
            </section> */}
            <footer className="form-footer">
              <div className="form-footer--container">
                <a href="#" className="change-step d-none">
                  Go Back
                </a>
                <a href="#" className="change-step">
                  Next Step
                </a>
              </div>
            </footer>
          </article>
        </form>
      </div>
    </>
  );
}

export default App;
