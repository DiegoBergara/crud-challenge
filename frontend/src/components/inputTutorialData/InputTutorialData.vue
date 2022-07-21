<script setup>
defineEmits(["update:modelValue"]);
</script>
<template>
  <div class="form-group">
    <label :for="inputId">{{ titleText }}</label>
    <input
      :id="inputId"
      :name="inputId"
      :type="type"
      class="form-control"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>
<script>
export default {
  name: "InputTutorialData",
  props: {
    titleText: {
      required: true,
      type: String,
      default: () => "",
    },
    inputId: {
      required: true,
      type: String,
      default: () => "",
    },
    type: {
      required: true,
      type: String,
      default: () => "text",
    },
    modelValue: String,
  },
};
</script>
