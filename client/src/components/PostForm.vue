<template>
  <div class="container mt-5">
    <form @submit.prevent="submitForm">
      <div class="field">
        <label class="label">Title</label>
        <div class="control">
          <input
            v-model="post.title"
            class="input"
            type="text"
            placeholder="Post Title"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Content</label>
        <div class="control">
          <textarea
            v-model="post.content"
            class="textarea"
            placeholder="..."
          ></textarea>
        </div>
      </div>
      <div class="field">
        <label class="label">Creator</label>
        <div class="control">
          <input
            v-model="post.creator"
            class="input"
            type="text"
            placeholder="Post Author"
          />
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button class="button is-primary">Submit</button>
        </div>
        <div class="control">
          <button type="submit" class="button is-link is-light">Cancel</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: ["post", "submitForm"]
};
</script>

<style></style>
