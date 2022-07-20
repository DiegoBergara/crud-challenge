<template>
  <div>
    <div class="col">
      <div class="input-group">
        <input
          type="text"
          class="form-control"
          placeholder="Search by title"
          v-model="title"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-primary"
            type="button"
            @click="searchTitle"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="row mt-5 p-3">
      <div class="col-md-6">
        <h4 class="border-bottom p-2 mb-3">Tutorials List</h4>
        <ul class="list-group">
          <li
            class="list-group-item"
            :class="{ active: index == currentIndex }"
            v-for="(tutorial, index) in tutorials"
            :key="index"
            @click="setActiveTutorial(tutorial, index)"
          >
            {{ tutorial.title }}
          </li>
        </ul>
        <button class="m-3 btn btn-sm btn-danger" @click="removeAllTutorials">
          Remove All
        </button>
      </div>
      <div class="col-md-6">
        <h4 class="border-bottom p-2 mb-3">Tutorial</h4>
        <div v-if="currentTutorial">
          <div>
            <label><strong>Title:</strong></label> {{ currentTutorial.title }}
          </div>
          <div>
            <label><strong>Description:</strong></label>
            {{ currentTutorial.description }}
          </div>
          <div v-if="currentTutorial.videoUrl">
            <label><strong>Video: </strong></label>
            <a class="m-2" :href="currentTutorial.videoUrl" target="_blank">
              {{ currentTutorial.videoUrl }}
            </a>
          </div>
          <div>
            <label><strong>Status:</strong></label>
            {{ currentTutorial.published ? "Published" : "Pending" }}
          </div>
          <router-link
            :to="'/tutorials/' + currentTutorial.id"
            class="btn btn-warning"
            >Edit</router-link
          >
        </div>
        <div v-else>
          <div class="alert alert-primary">Select a Tutorial...</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TutorialsRequests from "../axios/tutorialsRequests";
export default {
  name: "tutorials-home",
  data() {
    return {
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1,
      title: "",
    };
  },
  methods: {
    retrieveTutorials() {
      TutorialsRequests.getAll()
        .then((response) => {
          this.tutorials = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    refreshList() {
      this.retrieveTutorials();
      this.currentTutorial = null;
      this.currentIndex = -1;
    },
    setActiveTutorial(tutorial, index) {
      this.currentTutorial = tutorial;
      this.currentIndex = tutorial ? index : -1;
    },
    removeAllTutorials() {
      TutorialsRequests.deleteAll()
        .then((response) => {
          console.log(response.data);
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },

    searchTitle() {
      TutorialsRequests.findByTitle(this.title)
        .then((response) => {
          this.tutorials = response.data;
          this.setActiveTutorial(null);
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.retrieveTutorials();
  },
};
</script>
<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
