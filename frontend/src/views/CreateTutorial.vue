<template>
  <AlertComponent
    :showalert="wrongVideoUrl"
    alertText="Error: The video is not from youtube"
    alertType="danger"
  />
  <AlertComponent
    :showalert="createError"
    :alertText="createError"
    alertType="danger"
  />
  <InputTutorialDataForm
    v-if="!submitted"
    titleText="New Tutorial"
    buttonText="Create"
  />
  <InformationCard
    :displayCondition="submitted"
    titleText="Created successfully!"
    ><template v-slot:firstChild
      ><button
        class="btn btn-success text-center w-100 mt-3"
        @click="newTutorial"
      >
        Add another tutorial
      </button></template
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
  name: "create-tutorial",
  components: {
    InputTutorialDataForm,
    AlertComponent,
    InformationCard,
  },
  data() {
    return {
      submitted: false,
      wrongVideoUrl: false,
      createError: null,
    };
  },
  methods: {
    onTutorialAction(tutorial) {
      let videoUrlIsOk = true;

      if (tutorial.videoUrl) {
        videoUrlIsOk = validateVideoUrl(tutorial.videoUrl);
      }

      if (videoUrlIsOk) {
        this.wrongVideoUrl = false;
        const data = tutorial;
        TutorialsRequests.createTutorial(data)
          .then((response) => {
            console.log(response.data);
            this.submitted = true;
          })
          .catch((e) => {
            console.log(e);
            this.createError = e.message;
          });
      } else {
        this.wrongVideoUrl = true;
      }
    },

    newTutorial() {
      this.submitted = false;
      this.tutorial = {};
    },
  },
};
</script>
