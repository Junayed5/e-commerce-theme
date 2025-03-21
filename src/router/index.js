import { createMemoryHistory, createRouter } from "vue-router";
import HomeViews from "../views/HomeViews.vue";
import Login from "../views/auth/Login.vue";
import Collections from "../views/Collections.vue";
import ProductDetails from "../views/product/ProductDetails.vue";

const routes = [
  { path: "/", component: HomeViews },
  { path: "/login", component: Login },
  { path: "/collections", component: Collections },
  { path: "/product/details", component: ProductDetails },
];
const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
