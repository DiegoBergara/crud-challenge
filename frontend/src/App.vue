<script setup>
import { RouterLink, RouterView } from "vue-router";
import AuhorizationRequests from "/src/axios/autorizationRequests.js";
</script>

<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-secondary">
      <router-link to="/" class="navbar-brand">Tutos.com</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/tutorials" class="nav-link">Tutorials</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/create" class="nav-link">Create</router-link>
        </li>
      </div>
    </nav>
    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  name: "app",
  methods: {
    getAuthToken() {
      if (!localStorage.getItem("accessToken")) {
        AuhorizationRequests.getToken()
          .then((response) => {
            console.log("token", response.data);

            localStorage.setItem("accessToken", response.data);
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },
  },
  mounted() {
    this.getAuthToken();
  },
};
</script>
