const routes = {
  "/": "./src/pages/home/home.html",
  "/login": "./src/pages/login/login.html",
  "/home": "./src/pages/home/home.html",
  "/not-found": "./src/pages/not-found/not-found.html", // Asegúrate de tener esta ruta
};

function loadPage(path, showLoading) {
  const page = routes[path] || routes["/not-found"];
  $("#root").load(page, function (response, status) {
    if (status === "error") {
      $("#root").html("<h1>Error al cargar la página</h1>");
    }

    if (showLoading) {
      // Mostrar la pantalla de carga al menos 2 segundos o hasta que la página termine de cargar
      $("#loading-screen").show();
      $("#root").hide();

      const minLoadingTime = new Promise(resolve => setTimeout(resolve, 2000));
      const pageInitPromise = typeof window.pageInt === "function" ? window.pageInt() : Promise.resolve();

      Promise.all([minLoadingTime, pageInitPromise]).finally(() => {
        $("#loading-screen").hide();
        $("#root").show();
      });
    }
  });
}

function showLoadingScreen() {
  if (typeof window.pageInt === "function") {
    window.pageInt().finally(() => {
      $("#loading-screen").hide();
      $("#root").show();
    });
  }
}

export function router(showLoading = false) {
  console.log("Router initialized");
  const path = location.hash.slice(1) || "/";
  const jwt = sessionStorage.getItem("jwt");

  if (!jwt && path !== "/login") {
    location.hash = "/login";
    loadPage("/login");
    return;
  }

  loadPage(path,showLoading);
}
