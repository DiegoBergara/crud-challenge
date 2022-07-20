<template>
  <div class="edit-form shadow p-3 bg-light rounded mt-5">
    <div v-if="currentTutorial">
      <div class="d-flex border-bottom mb-3">
        <h4 class="p-2 flex-grow-1">Tutorial Details</h4>
        <button class="p-2 btn btn-danger mb-2" @click="deleteTutorial">
          Delete
        </button>
      </div>
      <form>
        <div class="form-group">
          <label for="title">Title</label>
          <input
            type="text"
            class="form-control"
            id="title"
            v-model="currentTutorial.title"
          />
        </div>
        <div class="form-group">
          <label for="description">Description</label>
          <input
            type="text"
            class="form-control"
            id="description"
            v-model="currentTutorial.description"
          />
        </div>
        <div class="form-group">
          <label>Video</label>
          <input
            class="form-control"
            id="description"
            v-model="currentTutorial.videoUrl"
            name="videoUrl"
          />
        </div>
        <label>I want to public this tutorial as:</label>
        <div class="form-group">
          <input
            type="radio"
            id="public"
            :value="false"
            v-model="currentTutorial.isPrivate"
          />
          <label for="public" class="ml-1">Public</label>

          <input
            type="radio"
            id="private"
            class="ml-3"
            :value="true"
            v-model="currentTutorial.isPrivate"
          />
          <label for="private" class="ml-1">Private</label>
        </div>
      </form>

      <button type="submit" class="btn btn-primary" @click="updateTutorial">
        Update
      </button>
      <p>{{ message }}</p>
    </div>
    <div v-else>
      <h4 class="text-center">Tutorial not found</h4>
      <router-link to="/" class="btn btn-danger text-center w-100 mt-3"
        >Back to home</router-link
      >
    </div>
  </div>
</template>
<script>
import TutorialsRequests from "../axios/tutorialsRequests";
export default {
  name: "tutorial-details",
  data() {
    return {
      currentTutorial: null,
      message: "",
    };
  },
  methods: {
    getTutorial(id) {
      TutorialsRequests.getById(id)
        .then((response) => {
          this.currentTutorial = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    updateTutorial() {
      TutorialsRequests.update(this.currentTutorial.id, this.currentTutorial)
        .then((response) => {
          console.log(response.data);
          this.message = "The tutorial was updated successfully!";
        })
        .catch((e) => {
          console.log(e);
        });
    },
    deleteTutorial() {
      TutorialsRequests.delete(this.currentTutorial.id)
        .then((response) => {
          console.log(response.data);
          this.$router.push({ name: "tutorials" });
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.message = "";
    this.getTutorial(this.$route.params.id);
  },
};
</script>
