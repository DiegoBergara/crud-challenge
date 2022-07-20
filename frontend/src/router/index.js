import { createWebHistory, createRouter } from "vue-router";
import TutorialsHome from "../components/TutorialsHome.vue";
import CreateTutorial from "../components/CreateTutorial.vue";
import TutorialDetails from "../components/TutorialDetails.vue";
const routes = [
  {
    path: "/",
    alias: "/tutorials",
    name: "tutorials-home",
    component: TutorialsHome,
  },
  {
    path: "/tutorials/:id",
    name: "tutorial-details",
    component: TutorialDetails,
  },
  {
    path: "/add",
    name: "create-tutorial",
    component: CreateTutorial,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
