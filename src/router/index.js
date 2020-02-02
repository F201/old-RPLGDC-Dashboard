import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Division from "../views/Division.vue";
import Product from "../views/Product.vue";
import ProductDetails from "../views/ProductDetails.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/division",
    name: "division",
    component: Division
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    // import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/product",
    name: "product",
    component: Product
  },
  {
    path: "/product-details",
    name: "productDetails",
    component: ProductDetails
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
  routes
});

export default router;
