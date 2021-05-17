<template>
  <v-app>
    <v-container>
      <h1 class="font-weight-bold">
        Movie
      </h1>
      <p class="font-weight-medium">
        Use this site to get your Movie
      </p>
      <v-card-actions>
        <v-flex xs12 sm6 md2>
          <v-text-field label="Movie Name" v-model="searchString">
          </v-text-field>
        </v-flex>
        <v-flex class="ml-6">
          <v-btn flat small @click="searchMovie">
            <span>Search</span>
          </v-btn>
        </v-flex>
      </v-card-actions>

      <v-content>
        <router-view></router-view>
      </v-content>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      searchString: "",
    };
  },
  methods: {
    searchMovie() {
      this.$router.push("/search/" + this.searchString);
    },
  },
  provide() {
    return {
      searchMovie: this.searchMovie,
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
}
</style>
