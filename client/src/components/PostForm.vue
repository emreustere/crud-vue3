<template>
  <div class="container mt-5">
    <div class="field">
      <label class="label">Title</label>
      <div class="control">
        <input class="input" type="text" placeholder="Post Title" />
      </div>
    </div>
    <div class="field">
      <label class="label">Content</label>
      <div class="control">
        <textarea class="textarea" placeholder="..."></textarea>
      </div>
    </div>
    <div class="field">
      <label class="label">Creator</label>
      <div class="control">
        <input class="input" type="text" placeholder="Post Author" />
      </div>
    </div>

    <div class="field is-grouped">
      <div class="control">
        <button class="button is-link">Submit</button>
      </div>
      <div class="control">
        <button class="button is-link is-light">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
