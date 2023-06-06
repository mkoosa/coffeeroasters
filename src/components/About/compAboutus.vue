<template>
    <section class="about-us">
        <comp-introductory/>
        <comp-details/>
        <comp-headquarters/>
    </section>
</template>

<script>
import compIntroductory from './compIntroductory.vue';
import compDetails from './compDetails.vue';
import compHeadquarters from './compHeadquarters.vue';

export default {
    components: { compIntroductory, compDetails, compHeadquarters },



 }   


</script>

<style scoped>
.about-us{
    margin-top: 6rem;

}

</style>