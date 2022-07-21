<template>
  <AlertComponent
    :showalert="wrongVideoUrl"
    alertText="Error: The video is not from youtube"
    alertType="danger"
  />
  <InputTutorialDataForm
    v-if="currentTutorial"
    titleText="Tutorial Details"
    buttonText="Update"
    :tutorialDetails="currentTutorial"
  >
    <button class="p-2 btn btn-danger mb-2" @click="deleteTutorial">
      Delete
    </button>
  </InputTutorialDataForm>

  <InformationCard
    :displayCondition="!currentTutorial"
    titleText="Tutorial not found"
  >
    <template v-slot:firstChild
      ><p class="text-center">
        <router-link to="/" class="btn btn-danger text-center w-100 mt-3"
          >Back to home</router-link
        >
      </p></template
    >
  </InformationCard>
</template>
<script>
import TutorialsRequests from "../axios/tutorialsRequests";
import AlertComponent from "../components/AlertComponent.vue";
import InformationCard from "../components/InformationCard.vue";
import InputTutorialDataForm from "../components/inputTutorialData/InputTutorialDataForm.vue";
import { validateVideoUrl } from "../utils/urlUtils.js";
export default {
  name: "tutorial-details",
  components: {
    InputTutorialDataForm,
    AlertComponent,
    InformationCard,
  },
  data() {
    return {
      currentTutorial: null,
      message: "",
      wrongVideoUrl: false,
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
    onTutorialAction(tutorial) {
      this.wrongVideoUrl = false;
      let videoUrlIsOk = true;

      if (tutorial.videoUrl) {
        videoUrlIsOk = validateVideoUrl(tutorial.videoUrl);
      }

      if (videoUrlIsOk) {
        TutorialsRequests.update(tutorial.id, tutorial)
          .then((response) => {
            console.log(response.data);
            this.message = "The tutorial was updated successfully!";
          })
          .catch((e) => {
            console.log(e);
          });
      } else {
        this.wrongVideoUrl = true;
      }
    },
    deleteTutorial() {
      TutorialsRequests.delete(this.currentTutorial.id)
        .then(() => {
          this.$router.push("/");
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
