<template>
  <div v-if="currentTutorial">
    <div>
      <label><strong>Id:</strong></label> {{ currentTutorial.id }}
    </div>
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
      {{ currentTutorial.isPrivate ? "Private" : "Public" }}
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
</template>
<script>
export default {
  name: "TutorialData",
  props: {
    currentTutorial: { type: Object, requred: true, default: () => {} },
  },
};
</script>
