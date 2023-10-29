<template>
  <ReviewForm :movie="movie" :submitForm="addReview"></ReviewForm>
</template>

<script>
import ReviewForm from "../components/ReviewForm.vue";
import { useRoute, useRouter } from "vue-router";
import { ref, onMounted } from "vue";
export default {
  components: { ReviewForm },
  setup() {
    const router = new useRouter();
    const route = new useRoute();
    const API_URL = "http://localhost:5000/posts";
    const movie = ref({
      title: "",
      description: "",
      releaseDate: "",
      rating: "",
      img: "",
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
    async function addReview() {
      const { id } = route.params;
      const movie_details = await fetch(`${API_URL}/${id}`).then((response) =>
        response.json()
      );
      console.log(movie_details);
      const reviews = movie_details.reviews;
      reviews.push(movie.value.review);
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({
          reviews: reviews
        })
      });
      const json = await response.json();
      router.go(-1);
    }
    return {
      movie,
      addReview
    };
  }
};
</script>

<style></style>
