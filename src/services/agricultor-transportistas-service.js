import { BASE_URL } from "/src/services/base-service.js";

export function postTransportista(transportistaDto) {
  return $.ajax({
    url: BASE_URL + "/api/v1/transportistas",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(transportistaDto),
    dataType: "json",
  });
}

export function getTransportistas() {
  return $.ajax({
    url: BASE_URL + "/api/v1/transportistas",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    dataType: "json",
  });
}

export function getTransportistaPorCuiNit(cuiNit) {
  return $.ajax({
    url: BASE_URL + `/api/v1/transportistas/${cuiNit}`,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    dataType: "json",
  });
}
