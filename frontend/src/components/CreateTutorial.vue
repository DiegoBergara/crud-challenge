<template>
  <div class="submit-form shadow p-3 bg-light rounded mt-5">
    <div v-if="!submitted">
      <h4 class="border-bottom p-2 mb-3">New Tutorial</h4>
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="tutorial.title"
          name="title"
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input
          class="form-control"
          id="description"
          required
          v-model="tutorial.description"
          name="description"
        />
      </div>
      <div class="form-group">
        <label>Video</label>
        <input
          class="form-control"
          id="videoUrl"
          v-model="tutorial.videoUrl"
          name="videoUrl"
        />
      </div>
      <label>I want to public this tutorial as:</label>
      <div class="form-group">
        <input
          type="radio"
          id="public"
          :value="false"
          v-model="tutorial.isPrivate"
        />
        <label for="public" class="ml-1">Public</label>

        <input
          type="radio"
          id="private"
          class="ml-3"
          :value="true"
          v-model="tutorial.isPrivate"
        />
        <label for="private" class="ml-1">Private</label>
      </div>
      <button @click="onCreateTutorial" class="btn btn-primary w-100">
        Create
      </button>
    </div>
    <div v-else>
      <h4 class="text-center">Created successfully!</h4>
      <button
        class="btn btn-success text-center w-100 mt-3"
        @click="newTutorial"
      >
        Add another tutorial
      </button>
    </div>
  </div>
</template>
<script>
import TutorialsRequests from "../axios/tutorialsRequests";
export default {
  name: "create-tutorial",
  data() {
    return {
      tutorial: {
        title: "",
        description: "",
        videoUrl: "",
        isPrivate: false,
      },
      submitted: false,
    };
  },
  methods: {
    onCreateTutorial() {
      const data = {
        title: this.tutorial.title,
        description: this.tutorial.description,
        videoUrl: this.tutorial.videoUrl,
        isPrivate: this.tutorial.isPrivate,
      };
      TutorialsRequests.createTutorial(data)
        .then((response) => {
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },

    newTutorial() {
      this.submitted = false;
      this.tutorial = {};
    },
  },
};
</script>
