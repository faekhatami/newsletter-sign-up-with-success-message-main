document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("subscription-form");
  const emailInput = document.getElementById("email");
  const errorMessage = document.getElementById("error-message");
  const formContainer = document.getElementById("form-container");
  const successContainer = document.getElementById("success-container");
  const userEmail = document.getElementById("user-email");
  const dismissButton = document.getElementById("dismiss-button");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const emailValue = emailInput.value.trim();

    if (!emailValue) {
      showError("Email field cannot be empty.");
    } else if (!validateEmail(emailValue)) {
      showError("Valid email required");
    } else {
      userEmail.textContent = emailValue;
      formContainer.classList.remove("active");
      successContainer.classList.add("active");
      emailInput.classList.remove("error-input");
      errorMessage.style.display = "none";
    }
  });

  dismissButton.addEventListener("click", () => {
    successContainer.classList.remove("active");
    formContainer.classList.add("active");
    emailInput.value = "";
    emailInput.classList.remove("error-input");
    errorMessage.style.display = "none";
  });

  function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = "block";
    emailInput.classList.add("error-input");
  }

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
});
