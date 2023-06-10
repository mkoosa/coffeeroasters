
<template>
    <section class="plan">
        <compDetail :detail="detail" :isPlan="isPlan" />
        <comp-instruction :instructions="instructions" />
    </section>
</template>
<script>
import compDetail from '../About/compDetail..vue';
import compInstruction from '../Home/compInstruction.vue';

export default {
    data() {
        return {
            isPlan: true,
        }
    },

    components: { compDetail, compInstruction },
    computed: {
        instructions() {
            return this.$store.getters['plan/getInstruction']
        },
        
        detail() {
            return this.$store.getters['plan/getDetails']
        },
    },

    mounted() {
        this.$store.dispatch('plan/getDetails');
        this.$store.dispatch('plan/getInstruction')
    }
}

</script>

<style scoped>
.plan {
    margin-top: 6rem;

}
</style>