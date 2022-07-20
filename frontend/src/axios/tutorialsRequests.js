import Api from "./api";

class TutorialsRequests {
  createTutorial(data) {
    return Api.post("/tutorials", data);
  }

  getAll() {
    return Api.get(`/tutorials?status=${false}`);
  }

  getByQuery(title, status) {
    return Api.get(`/tutorials?title=${title}&status=${status}`);
  }

  getById(id) {
    return Api.get(`/tutorials/${id}`);
  }

  delete(id) {
    return Api.delete(`/tutorials/${id}`);
  }

  update(id, data) {
    return Api.put(`/tutorials/${id}`, data);
  }

  deleteAll() {
    return Api.delete(`/tutorials`);
  }
}
export default new TutorialsRequests();
