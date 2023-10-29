<template>
  <div>
    <article class="media">
      <figure class="media-left">
        <p class="image is-128x128">
          <img
            :src="movie.img"
          />
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <h1>{{ movie.title }}</h1>
          <p>Release: {{ movie.releaseDate }}</p>
          <p>Movie description: {{ movie.description }}</p>
          <br />
          <h6>Rating: {{ movie.rating }}</h6>
        </div>
        <br />
      </div>
    </article>
    <div>
      <button
        @click="addReview(movie._id)"
        class="card-footer-item button is-warning"
      >
        Add Review
      </button>
    </div>
    <!-- no meaningful key for reviews here, any changes on existing reviews would mess things up. -->
    <div
      v-for="review in movie.reviews"
      :key="review.index"
      class="card my-5 has-background-grey-lighter"
    >
      {{ review }}
    </div>
  </div>
</template>

<script>
import { useRoute, useRouter } from "vue-router";
import { ref, onMounted } from "vue";
export default {
  components: {},
  setup() {
    const router = new useRouter();
    const route = new useRoute();
    const API_URL = "http://localhost:5000/posts";
    const movie = ref({
      title: "",
      description: "",
      releaseDate: "",
      rating: "",
      reviews: [""]
    });

    onMounted(() => {
      getDetails();
    });
    async function getDetails() {
      const { id } = route.params;
      const response = await fetch(`${API_URL}/${id}`);
      const json = await response.json();
      movie.value = json;
    }
    async function addReview(_id) {
      router.push({
        name: "Review",
        params: {
          id: _id
        }
      });
    }
    return {
      movie,
      addReview
    };
  }
};
</script>

<style></style>
