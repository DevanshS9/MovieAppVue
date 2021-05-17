<template>
  <v-container>
    <v-layout wrap>
      <v-flex xs12 mr-1 ml-1>
        <v-card>
          <v-card-title>
            <div>
              <h3>{{ singleMovie.Title }}-{{ singleMovie.Year }}</h3>
              <p>{{ singleMovie.Plot }}</p>
              <h4>Actors:</h4>
              {{ singleMovie.Actors }}

              <h4>Awards:</h4>
              {{ singleMovie.Awards }}

              <p>Genre: {{ singleMovie.Genre }}</p>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat @click="searchMovie">back</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import movieApi from "@/services/MovieApi";
export default {
  props: ["id"],
  inject: ["searchMovie"],

  data() {
    return {
      singleMovie: "",
    };
  },

  mounted() {
    movieApi
      .fetchSingleMovie(this.id)
      .then((response) => {
        this.singleMovie = response;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
