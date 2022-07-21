import { createWebHistory, createRouter } from "vue-router";
import TutorialsHome from "../views/TutorialsHome.vue";
import CreateTutorial from "../views/CreateTutorial.vue";
import TutorialDetails from "../views/TutorialDetails.vue";
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
    path: "/create",
    name: "create-tutorial",
    component: CreateTutorial,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
