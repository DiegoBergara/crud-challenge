<template>
  <div class="submit-form shadow p-3 bg-light rounded mt-5">
    <SectionTitle :title="titleText">
      <slot></slot>
    </SectionTitle>
    <InputTutorialData
      titleText="Title"
      inputId="title"
      type="text"
      v-model="tutorial.title"
    />
    <InputTutorialData
      titleText="Description"
      inputId="description"
      type="text"
      v-model="tutorial.description"
    />
    <InputTutorialData
      titleText="Video"
      inputId="videoUrl"
      type="text"
      v-model="tutorial.videoUrl"
    />

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
    <button @click="onAction" class="btn btn-primary w-100">
      {{ buttonText }}
    </button>
  </div>
</template>
<script>
import SectionTitle from "../SectionTitle.vue";
import InputTutorialData from "./InputTutorialData.vue";
export default {
  name: "InputTutorialDataForm",
  components: {
    InputTutorialData,
    SectionTitle,
  },
  props: {
    titleText: String,
    buttonText: String,
    tutorialDetails: Object,
  },
  data() {
    return {
      tutorial: this.tutorialDetails
        ? this.tutorialDetails
        : { title: "", description: "", videoUrl: "", isPrivate: false },
    };
  },
  methods: {
    onAction() {
      this.$parent.onTutorialAction(this.tutorial);
    },
  },
};
</script>
