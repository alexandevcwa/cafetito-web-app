/**
 * Generates an input component with validation and error handling.
 * @param {*} param0 Properties for the input component.
 * @returns {jQuery} A jQuery object representing the input component.
 */
export function inputComponent({
  type = "text",
  placeholder = "",
  label,
  id = null,
  classes = "",
  value = "",
  pattern = null,
  autocomplete = "off",
  validate = false,
  errorMessage = "",
  onChange = () => {},
}) {
  const $input = $(`
    <div class="max-w-md">
      <label for="${id}" class="block text-gray-700 font-semibold mb-0.5">${label}</label>
      <input
      id="${id}"
      name="${id}"
      type="${type}"
      autocomplete="${autocomplete}"
      placeholder="${placeholder}"
      class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition placeholder-gray-400 text-gray-900 shadow-sm"
      />
      <p class="error-message text-sm top-0 text-red-500 text-right mr-2 invisible">${errorMessage}</p>
    </div>
    `);

  validatePattenrn(validate, $input, id, pattern, errorMessage);

  return $input;
}

/**
 * Validates the input against a regular expression pattern.
 * @param {*} validate True if validation is enabled, false otherwise.
 * @param {*} component JQuery object of the input component.
 * @param {*} id ID of the input element for error message display.
 * @param {*} pattern Regular expression pattern to validate the input.
 * @param {*} message Custom error message to display if validation fails.
 * @returns {void}
 */
function validatePattenrn(validate, component, id, pattern, message) {
  console.log("Validating pattern:", pattern);
  if (!validate || !pattern) {
    return;
  }

  const regex = new RegExp(pattern);

  component.on("focusout", function () {
    const input = $(this).find("input");
    const htmlLabel = $(".error-message", this);
    const value = $(this).find("input").val().trim();

    if (!regex.test(value)) {
      $(input).addClass("focus:ring-red-500");
      $(htmlLabel).removeClass("invisible");
      $(htmlLabel).text(message || "Entrada no válida");
      $(input).focus();
    } else {
      $(input).removeClass("focus:ring-red-500");
      $(input).addClass("focus:ring-blue-400");
      $(htmlLabel).addClass("invisible");
    }
  });
}
