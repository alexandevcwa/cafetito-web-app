import { BASE_URL } from "./base-service";


export function authenticate(loginDto) {
  return $.ajax({
    url: BASE_URL + "/api/v1//auth/login",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(loginDto),
    dataType: "json",
  });
}
