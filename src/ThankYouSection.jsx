import iconThanks from "./assets/images/icon-thank-you.svg";

export default function ThankYouSection({ step }) {
  return (
    <section
      className={`form-info--content-container step-5 ${
        step === 4 ? "" : "d-none"
      }`}
    >
      <header>
        <img src={iconThanks} alt="" />
        <h2 className="form-heading-1">Thank you!</h2>
        <p className="form-text">
          Thanks for confirming your subscription! <br />
          We hope you have fun using our platform. If you ever need support,
          please feel free to email us at <br />
          support@loremgaming.com.
        </p>
      </header>
      <div className="choices-container">
        <div className="add-ons-container"></div>
      </div>
    </section>
  );
}
