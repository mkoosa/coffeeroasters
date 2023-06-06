<template>
    <section class="about-us">
        <comp-introductory></comp-introductory>
        <comp-details></comp-details>
    </section>
</template>

<script>
import compIntroductory from './compIntroductory.vue';
import compDetails from './compDetails.vue';

export default {
    components: { compIntroductory, compDetails },



 }   


</script>

<style scoped>
.about-us{
    margin-top: 6rem;

}

</style>