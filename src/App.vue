<template>
  <div class="wrapper">
    <comp-header />
    <comp-loader v-if="isLoader" />
    <router-view />
    <comp-side-menu />
    <comp-footer />
  </div>
</template>

<script>
import compHeader from './components/Header/compHeader.vue';
import compSideMenu from './components/Menu/compSidemenu.vue';
import { mapGetters } from 'vuex'

export default {
  components: { compHeader, compSideMenu },

  computed: {
    ...mapGetters({
      isLoader: 'load/getLoader'
    })
  }

}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  border: none;
  text-decoration: none;
}

html {
  font-size: 62.5%;
}

img {
  max-width: 100%;
}

.wrapper {
  margin: 0 auto;
  max-width: 145rem;
  position: relative;
  padding: 2rem;
}

.d-flex {
  display: flex;
}

li, p {
  font-family: 'Barlow', sans-serif;
}

h1,
h2,
h3,
h4 {
  font-family: 'Fraunces', serif;
}

:root {
  --dark-cyan: #0e8784;
  --dark-cyan-hover: #4ce1df;
  --dark-grey-blue: #333D4B;
  --pale-orange: #fdd6ba;
  --light-cream: #f4f2eb;
  --grey: #616163;
  --light-grey: #b2b2b9;
  --white: #ffff;
}

.main {
  position: relative;
  z-index: 3;
}

/* accordion default reset */
.accordion-list .accordion-item--open>.accordion-item__summary,
.accordion-list .accordion-item {
  background-color: var(--white) !important;
  border: none !important;
}

@media only screen and (min-width: 768px) {
  .wrapper {
    padding: 3.5rem;
  }
}
</style>
