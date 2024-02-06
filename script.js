const subscribeButton = document.querySelector(".subscribe-button");
const main = document.querySelector("main");
const section = document.querySelector("section");
const errorInEmail = document.querySelector(".error-in-email");
const emailInput = document.querySelector(".email-input");

subscribeButton.addEventListener("click", () => {
  const emailInputWithValue = document.querySelector(".email-input").value;
  if (
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      emailInputWithValue
    ) === true
  ) {
    main.classList.add("hidden");
    section.classList.remove("hidden");
  } else {
    errorInEmail.innerText = "Valid email required";
    emailInput.classList.add("valid");
  }
});
