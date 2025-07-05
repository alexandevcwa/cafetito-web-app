import { loadNavbarComponent } from "../../components/navbar.js";
import { buttonComponent } from "../../components/button.js";
import {
  buttonDropdownComponent,
  ancoreDropdownComponent,
  dropdownComponent,
} from "../../components/dropdown.js";

import { inputComponent } from "../../components/input.js";

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
  });
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

  const verDetalle = ancoreDropdownComponent({ text: "Ver Detalle" });
  const desactivar = buttonDropdownComponent({ text: "Desactivar" });
  const modificar = ancoreDropdownComponent({ text: "Modificar" });
  const dropdown = dropdownComponent({
    text: "Opciones 2",
    icon: "fa-solid fa-caret-down",
    content: [verDetalle, modificar, desactivar],
  });
  $(".dropdown-component").append(dropdown);

  const inUsername = inputComponent({
    type: "email",
    placeholder: "Ingrese su nombre de usuario",
    label: "Nombre de Usuario",
    id: "in-username",
    pattern: "^[a-zA-Z0-9_]{3,15}$",
    validate: true,
    errorMessage: "El formato del nombre de usuario es incorrecto",
  });

  $("#username").append(inUsername);
});
