<template>
  <div class="container">
    <div
      v-for="movie in movies"
      :key="movie._id"
      class="card my-5 has-background-grey-lighter"
    >
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{{ movie.title }}</p>
          </div>
          <img
            class="level-item"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuVFpiCc7OCV4Us1Wu1rNKQkvd7i-Bj9gDDEPRRpQtNGYy4Fnj"
            width="200"
          />
        </div>
      </div>

      <div class="card">
        <footer class="card-footer">
          <button
            @click="viewDetails(movie._id)"
            class="card-footer-item button is-warning"
          >
            Details & Reviews
          </button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = new useRouter();
    const movies = ref([]);
    const API_URL = "http://localhost:5000/posts";
    onMounted(() => {
      getMovies();
    });
    async function getMovies() {
      const response = await fetch(API_URL);
      const json = await response.json();
      movies.value = json;
    }
    async function viewDetails(_id) {
      router.push({
        name: "Details",
        params: {
          id: _id
        }
      });
    }
    return {
      movies,
      viewDetails
    };
  }
};
</script>

<style></style>
