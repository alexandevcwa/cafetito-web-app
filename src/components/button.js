/**
 * Tailwind CSS classes for button colors.
 */
const buttonColorsClasses = {
  primary:
    "bg-sky-800 hover:bg-sky-900 text-white px-4 py-2 rounded-lg shadow-md transition-all duration-200 min-w-[130px]",
  secondary:
    "bg-gray-700 text-white hover:bg-gray-800 px-4 py-2 rounded-lg shadow-md transition-all duration-200 min-w-[130px]",
  success:
    "bg-teal-800 text-white hover:bg-teal-900 px-4 py-2 rounded-lg shadow-md transition-all duration-200 min-w-[130px]",
  alert:
    "bg-amber-500 hover:bg-amber-600 text-black px-4 py-2 rounded-lg  shadow-md transition-all duration-200 min-w-[130px]",
  danger:
    "bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-lg shadow-md transition-all duration-200 min-w-[130px]",
};

const buttonTypes = ["button", "submit", "reset"];

const buttonIcons = {
  save: "fa-solid fa-floppy-disk",
  update: "fa-solid fa-rotate",
  delete: "fa-solid fa-trash",
  edit: "fa-solid fa-pencil-alt",
  view: "fa-solid fa-eye",
  download: "fa-solid fa-download",
  upload: "fa-solid fa-upload",
  close: "fa-solid fa-times",
  confirm: "fa-solid fa-check",
};

/**
 * Creates a button component with customizable properties.
 * @param {*} param0 Properties for the button component.
 * @returns {jQuery} A jQuery object representing the button.
 */
export function buttonComponent({
  text,
  type,
  color = "primary",
  callback = null,
  enable = true,
  id = null,
  icon = null,
  extraClasses = "",
}) {
  const $btn = $(`
        <button type="${type} class="" ${id ? `id="${id}"` : ""} ${
    enable ? "" : "disabled"
  } class="${buttonColorsClasses[color]}">
            ${icon ? `<i class="${buttonIcons[icon]} mr-2"></i>` : ""}
            ${text}
        </button>
        `);

  if (extraClasses.length > 0) {
    $btn.addClass(extraClasses);
  }

  if (callback) {
    $btn.on("click", callback);
  }

  return $btn;
}
