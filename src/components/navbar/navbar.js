/**
 * Carga el componente de la barra de navegación (navbar) en la página.
 * Utiliza jQuery para cargar el archivo HTML del navbar en el elemento <navbar-component>.
 * Una vez cargado, intenta inicializar el componente llamando a su método `initialize`.
 * Si el componente no se encuentra, muestra un error en la consola.
 */
export function loadNavbarComponent() {
  $("#navbar-component").load(
    "./src/components/navbar/navbar.html",
    function () {
      initListeners();
      initUI();
      initValues();
    }
  );
}

const menuItems = [
  {
    title: "Realizar Pesaje",
    path: "#/agricultor/pesajes/crear",
    id: "menu-pesaje",
  },
  {
    title: "Registro de Parcialidad",
    path: "#/agricultor/parcialidades/crear",
    id: "menu-parcialidad",
  },
  {
    title: "Administración de Transportistas",
    path: "#/agricultor/transportistas",
    id: "menu-transportistas",
  },
  {
    title: "Administración de Transportes",
    path: "#/agricultor/transportes",
    id: "menu-transportes",
  },
  {
    title: "Administración de Pilotos",
    path: "#/agricultor/pilotos",
    id: "menu-pilotos",
  },
  {
    title: "Administración de Cuentas",
    path: "#/agricultor/pilotos",
    id: "menu-cuentas",
  },
];


/**
 * Inicializa los listeners de eventos para los botones del menú de navegación.
 */
function initListeners() {
  const $menu = $('#menu-component');
  $("#menu-button").on("click", () => {
    $menu.fadeToggle();
  });

  $("#menu-close-button").on("click", () => {
    $menu.fadeToggle("hidden");
  });
}

/**
 * Iniciar la interfaz de usuario del componente de navegación.
 */
function initUI() {
  menuItems.forEach((item) => {
    const li = createMenuLiItem(item.title, item.path);
    $("#menu-items").append(li);

    

  });
}

function createMenuLiItem(title, path) {
  return $(`
    <li class="bg-white/10 rounded-lg px-4 py-1 shadow-md hover:bg-white/20 transition-all duration-200">
          <a href=${path} class="text-md text-gray-200 block">${title}</a>
        </li>`);
}

/**
 * Inicializa los valores del componente de navegación.
 */
function initValues() {}
