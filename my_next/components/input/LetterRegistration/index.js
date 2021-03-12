import React, { useRef } from "react";

const LetterRegistration = () => {
  const refEmailInput = useRef();
  const handleReg = (e) => {
    e.preventDefault();
    const enteredEmail = refEmailInput.current.value;
    fetch("/api/newsLetter", {
      method: "POST",
      body: JSON.stringify({ email: enteredEmail }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((rs) => rs.json())
      .then((data) => console.log(data));
  };

  return (
    <section>
      <h2>sign up with reg</h2>
      <form onSubmit={handleReg}>
        <div>
          <input
            type="email"
            placeholder="your email"
            aria-label="your email"
            ref={refEmailInput}
          />
        </div>
        <button>register</button>
      </form>
    </section>
  );
};

export default LetterRegistration;
