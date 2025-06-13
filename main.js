/**
 * Importa el enrutador principal de la aplicación y lo asocia a los eventos relevantes.
 *
 * - Al cambiar el hash de la URL (`hashchange`), se ejecuta la función `router` para manejar la navegación.
 * - Cuando el documento está listo, se ejecuta `router` para cargar la vista inicial.
 *
 */
import { router } from "./src/core/router.js";

if(!location.hash){
    location.hash = "#/";
}

$(window).on("hashchange", router);
$(document).ready(router);
