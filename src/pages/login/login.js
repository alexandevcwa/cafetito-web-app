import { authenticate } from "../../services/auth-service";
import { LoginDto } from "../../models/login-dto";

/**
 * Regular expression to validate email format
 */
const emailReggex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Initialize the login page
 */
$(document).ready(function () {
  $("#login-button").click(function (event) {
    event.preventDefault();
    login();
  });
});

/**
 * Handle the login process
 * It retrieves the email and password from the input fields,
 * validates them, and if valid, creates a LoginDto object
 * and calls the authenticate function to log in the user.
 * @returns {void}
 */
function login() {
  const email = $("#email").val();
  const password = $("#password").val();
  let isValid = validateEmail(email);

  if (!isValid) {
    return;
  }
  isValid = validatePassword(password);
  if (!isValid) {
    return;
  }

  const loginDto = new LoginDto(email, password);
  authenticate(loginDto)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });
}

/**
 * Validate the email format and presence
 * @param {string} email
 * @returns true if the email is valid, false otherwise
 */
function validateEmail(email) {
  if (!email) {
    $(".message__email").text("El correo electrónico es obligatorio");
  }

  $(".message__email").text("");
  if (emailReggex.test(email)) {
    return true;
  } else {
    $(".message__email").text("Ingresa un correo electrónico válido");
    return false;
  }
}

/**
 * Validate the password
 * @param {string} password
 * @returns true if the password is valid, false otherwise
 */
function validatePassword(password) {
  $(".message__password").text("");
  if (!password) {
    $(".message__password").text("La contraseña es obligatoria");
    return false;
  }
  return true;
}
