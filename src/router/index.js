import Vue from "vue";
import VueRouter from "vue-router";
import Movie from "@/components/Movie";
import SearchMovie from "@/components/SearchMovie";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/movie/:id",
      name: "Movie",
      props: true,
      component: Movie,
    },
    {
      path: "/search/:name",
      name: "SearchMovie",
      props: true,
      component: SearchMovie,
    },
  ],
  mode: "history",
});
