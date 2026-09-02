import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import SearchExperience from "../views/caseStudies/SearchExperience.vue";
import DescriptionAssistant from "../views/caseStudies/DescriptionAssistant.vue";
import Dashboard from "../views/caseStudies/Dashboard.vue";
import DevDashboard from "../views/caseStudies/DevDashboard.vue";
import MessagingSystem from "../views/caseStudies/MessagingSystem.vue";
import FrontendModernisation from "../views/caseStudies/FrontendModernisation.vue";
import WorkoutApp from "../views/caseStudies/WorkoutApp.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/search-experience",
    name: "searchExperience",
    component: SearchExperience,
  },
  {
    path: "/description-assistant",
    name: "descriptionAssistant",
    component: DescriptionAssistant,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
  },
  {
    path: "/dev-dashboard",
    name: "devDashboard",
    component: DevDashboard,
  },
  {
    path: "/messaging-system",
    name: "messagingSystem",
    component: MessagingSystem,
  },
  {
    path: "/frontend-modernisation",
    name: "frontendModernisation",
    component: FrontendModernisation,
  },
  {
    path: "/workout-app",
    name: "workoutApp",
    component: WorkoutApp,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      top: 0,
      left: 0,
    };
  },
});

export default router;
