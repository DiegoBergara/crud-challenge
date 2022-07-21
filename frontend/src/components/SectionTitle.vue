<template>
  <div class="d-flex border-bottom mb-3">
    <h4 class="p-2 flex-grow-1">{{ title }}</h4>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "SectionTitle",
  props: ["title"],
};
</script>
