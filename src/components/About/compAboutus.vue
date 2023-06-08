<template>
    <section class="about-us">
        <comp-details/>
        <comp-headquarters/>
    </section>
</template>

<script>
import compHeadquarters from './compHeadquarters.vue';
import compDetails from './compDetails.vue';

export default {
    components: {  compHeadquarters, compDetails },

 }   


</script>

<style scoped>
.about-us{
    margin-top: 6rem;

}

</style>