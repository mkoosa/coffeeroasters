<template>
    <section class="preferences">
        <div
            class="preference"
            v-for="preference in preferences"
            :key="preference.question"
        >
            <comp-accordion :preference="preference"></comp-accordion>
        </div>
    </section>
</template>

<script>
import CompAccordion from './compAccordion.vue';
export default {
    components: {CompAccordion},
    computed: {
        preferences() {
            return this.$store.getters['plan/getPreferences'];
        },
    },

    mounted() {
        this.$store.dispatch('plan/getPreferences');
    },
};
</script>

<style scoped>
.preferences {
    margin-top: 12rem;
}

.preference {
    margin: 6rem 0;
}

@media only screen and (min-width: 1200px) {
    .preferences {
        flex-basis: 63%;
        margin-top: 0;
        min-width: 85rem;
    }

    .preference {
        margin-top: 0;
    }
}
</style>
