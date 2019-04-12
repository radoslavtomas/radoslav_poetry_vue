import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Books from "./views/Books.vue";
import Links from "./views/Links.vue";
import Contact from "./views/Contact.vue";
import StatusReports from "./views/StatusReports.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/books",
      name: "books",
      component: () =>
        import(/* webpackChunkName: "books" */ "./views/Books.vue")
    },
    {
      path: "/links",
      name: "links",
      component: () =>
        import(/* webpackChunkName: "links" */ "./views/Links.vue")
    },
    {
      path: "/contact",
      name: "contact",
      component: () =>
        import(/* webpackChunkName: "contact" */ "./views/Contact.vue")
    },
    {
      path: "/books/status-reports",
      name: "status-reports",
      component: () =>
        import(/* webpackChunkName: "status" */ "./views/StatusReports.vue")
    }
  ]
});
