import Vue from "vue";
import Router from "vue-router";

//import views
import welcome from "./views/Welcome.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      name: "welcome",
      path: "/welcome",
      component: welcome
    },
    {
      path: "/",
      redirect: "/welcome"
    }
  ]
});
