/**
 * Login Data Transfer Object
 * @class LoginDto represents the data structure for user login.
 * @property {string} username - The username of the user.
 * @property {string} password - The password of the user.
 * @constructor
 * @param {string} username - The username of the user.
 * @param {string} password - The password of the user.
 * @returns {object} An object containing the username and password.
 */
export class LoginDto {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
  toJSON() {
    return {
      username: this.username,
      password: this.password,
    };
  }
}
