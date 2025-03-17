import { createMemoryHistory, createRouter } from "vue-router";
import HomeViews from "../views/HomeViews.vue";
import Login from "../views/auth/Login.vue";
import Collections from "../views/Collections.vue";

const routes = [
  { path: "/", component: HomeViews },
  { path: "/login", component: Login },
  { path: "/collections", component: Collections },
];
const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
