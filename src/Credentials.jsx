export default function Credentials({
  step,
  name,
  setName,
  email,
  setEmail,
  number,
  setNumber,
}) {
  function changeName(string) {
    // console.log("string", string);
    setName(string);
  }
  function changeEmail(string) {
    // console.log("string", string);
    setEmail(string);
  }
  function changeNumber(string) {
    // console.log("string", string);
    setNumber(string);
  }

  return (
    <section
      className={`form-info--content-container step-1 ${
        step === 0 ? "" : "d-none"
      }`}
    >
      <header>
        <h2 className="form-heading-1">Personal info</h2>
        <p className="form-text">
          Please provide your name, email address, and phone number.
        </p>
      </header>
      <div className="inputs-container">
        <div className="input-container">
          <label htmlFor="">Name</label>
          <input
            minLength="6"
            type="text"
            placeholder="e.g. Stephen King"
            className="step-1 input"
            onChange={({ target }) => changeName(target.value)}
            value={name}
          />
        </div>
        <div className="input-container">
          <label htmlFor="">Email Address</label>
          <input
            minLength="6"
            type="email"
            placeholder="e.g. stephenking@lorem.com"
            className="step-1 input"
            onChange={({ target }) => changeEmail(target.value)}
            value={email}
          />
        </div>
        <div className="input-container">
          <label htmlFor="">Phone Number</label>
          <input
            minLength="6"
            type="tel"
            placeholder="e.g. +1 234 567 890"
            className="step-1 input"
            onChange={({ target }) => changeNumber(target.value)}
            value={number}
          />
        </div>
      </div>
    </section>
  );
}
