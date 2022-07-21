<template>
  <div v-if="showalert" :class="`alert alert-${alertType}`">
    {{ alertText }}
  </div>
</template>
<script>
export default {
  name: "AlertComponent",
  props: ["showalert", "alertText", "alertType"],
};
</script>
