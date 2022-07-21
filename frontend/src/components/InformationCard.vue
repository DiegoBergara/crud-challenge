<template>
  <div v-if="displayCondition" class="col mt-5 p-3 shadow border rounded">
    <h3 class="text-center">{{ titleText }}</h3>
    <slot name="firstChild"></slot>
    <slot name="secondChild"></slot>
  </div>
</template>
<script>
export default {
  name: "InformationCard",
  props: {
    titleText: {
      required: true,
      type: String,
      default: () => "",
    },
    displayCondition: {
      required: true,
      type: Function,
      default: () => false,
    },
  },
};
</script>
