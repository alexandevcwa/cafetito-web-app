const routes = {
  "/": "./src/pages/home/home.html",
  "/login": "./src/pages/login/login.html",
  "/home": "./src//pages/home/home.html",
};

/**
 * Handles client-side routing for the application.
 *
 * This function determines the current route based on the URL hash,
 * checks for a valid JWT token in sessionStorage, and loads the appropriate
 * page into the #root element using jQuery's `.load()` method.
 *
 * - If the user is not authenticated (no JWT), it loads the login page.
 * - If the user is authenticated, it loads the requested page.
 * - If there is an error loading the page, it displays an error message.
 */
export function router() {

  const path = location.hash.slice(1) || "/home";
  const page = routes[path];

  const jwt = sessionStorage.getItem("jwt");

  if (!jwt) {
    /*If no JWT token is found, redirect to the login page*/
    $("#root").load(routes["/login"], function (response, status) {
      if (status === "success") {
        location.hash = "/login";
      } else if (status === "error") {
        $("#root").html("<h1>Error al cargar la página</h1>");
      }
    });
  } else {
    $("#root").load(page, function (response, status) {
      if (status === "error") {
        $("#root").html("<h1>Error al cargar la página</h1>");
      }
    });
  }
}
