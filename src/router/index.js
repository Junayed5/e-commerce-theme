import { createMemoryHistory, createRouter } from "vue-router";
import HomeViews from "../views/HomeViews.vue";
import Login from "../views/auth/Login.vue";
import About from "../views/About.vue";

const routes = [
  { path: "/", component: HomeViews },
  { path: "/login", component: Login },
  { path: "/about", component: About },
];
const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
