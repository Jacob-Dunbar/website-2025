import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Design from "../views/Design.vue";
import Development from "../views/Development.vue";
import SearchExperience from "../views/design/SearchExperience.vue";
import DescriptionAssistant from "../views/design/DescriptionAssistant.vue";
import DesignHome from "../views/design/DesignHome.vue";
import DevelopmentHome from "../views/development/DevelopmentHome.vue";
import SiteRedesign from "../views/design/SiteRedesign.vue";
import Dashboard from "../views/design/Dashboard.vue";
import DevDashboard from "../views/development/Dashboard.vue";
import MessagingSystem from "../views/development/MessagingSystem.vue";
import FrontendModernisation from "../views/development/FrontendModernisation.vue";

const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/development",
    component: Home,
  },
  {
    path: "/design",
    name: "design",
    component: Design,
    children: [
      {
        path: "",
        component: DesignHome,
      },
      {
        path: "search-experience",
        component: SearchExperience,
      },
      {
        path: "description-assistant",
        component: DescriptionAssistant,
      },
      {
        path: "site-redesign",
        component: SiteRedesign,
      },
      {
        path: "dashboard",
        component: Dashboard,
      },
    ],
  },
  {
    path: "/development",
    name: "development",
    component: Development,
    children: [
      {
        path: "",
        component: DevelopmentHome,
      },
      {
        path: "messaging-system",
        component: MessagingSystem,
      },
      {
        path: "frontend-modernisation",
        component: FrontendModernisation,
      },
      {
        path: "dashboard",
        component: DevDashboard,
      },
    ],
  },
  // {
  //   path: "/design/search-experience",
  //   name: "search_experience",
  //   component: SearchExperience,
  // },
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
