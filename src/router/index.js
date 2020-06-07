import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/items",
    name: "items",
    component: () => import("../views/ItemView.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/menu",
    name: "menu",
    component: () => import("../views/Menu.vue"),
  },
  {
    path: "/sign-in",
    name: "signin",
    component: () => import("../views/Signin.vue"),
  },
  {
    path: "/join",
    name: "join",
    component: () => import("../views/Join.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// router.beforeEach((to, from, next) => {
//   if (to.matched.some((record) => record.meta.authRequired)) {
//     if (!store.state.isAuthenticated) {
//       next({
//         path: "/sign-in",
//       });
//     } else {
//       next();
//     }
//   } else {
//     next();
//   }
// });

export default router;
