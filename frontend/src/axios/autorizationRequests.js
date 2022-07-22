import Api from "./api";

class AuthenticationRequests {
  getToken(data) {
    return Api.get("/authentication", data);
  }
}
export default new AuthenticationRequests();
