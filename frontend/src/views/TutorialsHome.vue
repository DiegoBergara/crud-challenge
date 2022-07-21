<template>
  <InformationCard
    :displayCondition="tutorials.length < 1"
    :titleText="
      showBackToHome
        ? `Not found Tutorials with title ${title}`
        : 'There are no tutorials to show'
    "
  >
    <template v-slot:firstChild
      ><p class="text-center">
        Let's <router-link to="/create">create</router-link> one!
      </p></template
    >
    <template v-slot:secondChild
      ><p v-if="showBackToHome" class="text-center">
        <button @click="retrieveTutorials" class="btn btn-link">
          Back to home
        </button>
      </p></template
    >
  </InformationCard>

  <div v-if="tutorials.length > 0">
    <div class="col">
      <div class="input-group mt-5">
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
        <SectionTitle title="Tutorials List" />
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
        <button class="mt-3 btn btn-sm btn-danger" @click="removeAllTutorials">
          Remove All
        </button>
      </div>
      <div class="col-md-6">
        <SectionTitle title="Tutorial" />
        <TutorialData :currentTutorial="currentTutorial" />
      </div>
    </div>
  </div>
</template>
<script>
import SectionTitle from "../components/SectionTitle.vue";
import InformationCard from "../components/InformationCard.vue";
import TutorialData from "../components/TutorialData.vue";
import TutorialsRequests from "../axios/tutorialsRequests";
export default {
  name: "tutorials-home",
  components: {
    SectionTitle,
    TutorialData,
    InformationCard,
  },
  data() {
    return {
      tutorials: [],
      showBackToHome: false,
      currentTutorial: null,
      currentIndex: -1,
      title: "",
    };
  },
  methods: {
    retrieveTutorials() {
      this.showBackToHome = false;
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
      TutorialsRequests.getByQuery(this.title, true)
        .then((response) => {
          this.showBackToHome = true;
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
