<template>
  <div class="container mt-5">
    <form @submit.prevent="submitForm">
      <div class="field">
        <label class="label">Your Review</label>
        <div class="control">
          <textarea
            v-model="movie.review"
            class="textarea"
            placeholder="Write your review here."
          ></textarea>
        </div>
      </div>
      <div class="field is-grouped">
        <div class="control">
          <button class="button is-primary">Submit</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: ["movie", "submitForm"]
};
</script>

<style></style>
