<template>
  <nav class="navbar is-warning" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <img
        src="https://icon-library.com/images/movie-app-icon/movie-app-icon-0.jpg"
        width="54"
        height="40"
      />
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <strong class="navbar-item"> Movie Review App </strong>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <router-link to="/" class="button is-dark">
              <strong>Home</strong>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style></style>
