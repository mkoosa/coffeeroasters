<template>
  <div class="wrapper">
  <comp-sidemenu></comp-sidemenu>
    <comp-header></comp-header>
    <comp-main></comp-main>
    <comp-footer></comp-footer>
  </div>
</template>

<script>
import compMain from './components/Home/compMain';
import compHeader from './components/Header/compHeader.vue';
import compSidemenu from './components/Menu/compSidemenu.vue';


export default {
  components: { compMain, compHeader, compSidemenu }

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
  padding: 2.5rem;
  position: relative;
}

.d-flex {
  display: flex;

}

p, li {
  font-family: 'barlow, serif';
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
  --light-cream: #fefcf7;
  --grey: #83888F;
  --white: #ffff;
}

@media only screen and (min-width: 768px){
  .wrapper{
    padding: 3.5rem;
  }
}
</style>
