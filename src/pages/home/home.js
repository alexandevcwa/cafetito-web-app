import { loadNavbarComponent } from "/src/components/navbar/navbar.js";
import { buttonComponent } from "../../components/button/button.js";

$(document).ready(function () {
  loadNavbarComponent();

  const saveButton = buttonComponent({
    text: "Guardar",
    type: "submit",
    color: "primary",
    icon: "save",
  });

  $("#primary-button").append(saveButton);

  const secondaryButton = buttonComponent({
    text: "Actualizar",
    type: "button",
    color: "alert",
    icon: "update",
  })
  $("#secondary-button").append(secondaryButton);

  const dangeButton = buttonComponent({
    text: "Eliminar",
    type: "button",
    color: "danger",
    icon: "delete",
  });
  $("#secondary-button").append(dangeButton);

  const successButton = buttonComponent({
    text: "Confirmar",
    type: "button",
    color: "success",
    icon: "confirm",
  });
  $("#secondary-button").append(successButton); 

  const closeButton = buttonComponent({
    text: "Cerrar",
    type: "button",
    color: "secondary",
    icon: "close",
  });
  $("#secondary-button").append(closeButton);
  
});
