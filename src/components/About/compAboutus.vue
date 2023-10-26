<template>
    <section class="about-us">
        <comp-details />
        <CompHeadquarters />
    </section>
</template>

<script>
import CompHeadquarters from './compHeadquarters.vue';
import CompDetails from './compDetails.vue';

export default {
    components: {CompHeadquarters, CompDetails},
};
</script>

<style scoped>
.about-us {
    margin-top: 6rem;
}
</style>
