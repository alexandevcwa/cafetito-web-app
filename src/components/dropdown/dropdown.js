/**
 * Crea un componente de enlace (<a>) para usar en un menú desplegable.
 *
 * @function
 * @param {Object} params - Parámetros para el componente.
 * @param {string} [params.href="#"] - URL a la que apunta el enlace.
 * @param {string} [params.text=""] - Texto que se mostrará en el enlace.
 * @param {string|null} [params.icon=null] - Clase del icono (por ejemplo, de FontAwesome) que se mostrará antes del texto. Si es null, no se muestra icono.
 * @param {string} [params.extraClasses=""] - Clases CSS adicionales para personalizar el estilo del enlace.
 * @returns {jQuery} Elemento jQuery representando el enlace del menú desplegable.
 */
export function ancoreDropdownComponent({
  href = "#",
  text = "",
  icon = null,
  extraClasses = "",
}) {
  return $(`
        <a href="${href}" class="pl-4 pr-2 text-gray-700 hover:bg-gray-300 transition-all duration-200 ${extraClasses}">
            ${icon ? `<i class="${icon} mr-2"></i>` : ""}
            ${text}
        </a>
    `);
}

/**
 * Crea un componente de botón desplegable personalizado.
 *
 * @function
 * @param {Object} params - Parámetros para el botón.
 * @param {string} [params.text=""] - Texto que se mostrará en el botón.
 * @param {string|null} [params.icon=null] - Clase del ícono (por ejemplo, de FontAwesome) que se mostrará antes del texto.
 * @param {string} [params.extraClasses=""] - Clases CSS adicionales para personalizar el botón.
 * @param {Function|null} [params.callback=null] - Función que se ejecutará al hacer clic en el botón.
 * @param {boolean} [params.enable=true] - Indica si el botón está habilitado o deshabilitado.
 * @returns {jQuery} Elemento jQuery del botón generado.
 */
export function buttonDropdownComponent({
  text = "",
  id = null,
  icon = null,
  extraClasses = "",
  callback = null,
  enable = true,
}) {
  return $(`
        <button id="${id}" class="pl-4 text-gray-700 hover:bg-gray-300 transition-all duration-200 text-left cursor-pointer ${extraClasses}" ${
    enable ? "" : "disabled"
  }>
            ${icon ? `<i class="${icon} mr-2"></i>` : ""}
            ${text}
        </button>
    `).on("click", callback);
}

export function dropdownComponent({
  text = "Opciones",
  icon = "fa-solid fa-caret-down",
  content = [],
}) {
  return $(`
    <div class="dropdown border-1 border-gray-300 w-fit rounded-md">
  <button
    class="dropdown-btn bg-gray-100 hover:bg-gray-200 transition-all duration-200 px-2 py-1 rounded-md shadown min-w-[130px] cursor-pointer"
  >
    ${text}<i class="${icon} ml-2"></i>
  </button>
  <div
    class="dropdown-content absolute bg-gray-100 w-fit flex flex-col rounded-md shadow min-w-[130px] hidden"
  >
  ${content.map(item => item.prop("outerHTML")).join("")}
  </div>
</div>

    `);
}

$(document).ready(function () {
  // Delegar el evento click para todos los botones de dropdown, incluso los agregados dinámicamente
  $(document).on("click", ".dropdown-btn", function (e) {
    e.stopPropagation();
    const $content = $(this).siblings(".dropdown-content");
    if ($content.hasClass("hidden")) {
      $content.removeClass("hidden").hide().slideDown(200);
    } else {
      $content.slideUp(200, function () {
        $content.addClass("hidden");
      });
    }
  });

  // Delegar el evento mouseleave para todos los dropdowns
  $(document).on("mouseleave", ".dropdown", function () {
    const $content = $(this).find(".dropdown-content");
    if (!$content.hasClass("hidden")) {
      $content.slideUp(200, function () {
        $content.addClass("hidden");
      });
    }
  });

  // Prevenir que el click dentro del dropdown cierre el menú
  $(document).on("click", ".dropdown", function (e) {
    e.stopPropagation();
  });
});
