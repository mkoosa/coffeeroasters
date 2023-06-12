
<template>
    <section class="plan">
        <compDetail :detail="detail" :isPlan="isPlan" />
        <comp-instruction :instructions="instructions" :palette="dark" />
        <comp-preferences/>
        <comp-button-main/>
    </section>
</template>
<script>
import compDetail from '../About/compDetail..vue';
import compInstruction from '../Home/compInstruction.vue';
import compPreferences from './compPreferences.vue';
import compButtonMain from '@/Utils/buttons/compButtonMain.vue';


export default {
    components: { compDetail, compInstruction, compPreferences, compButtonMain},
    data() {
        return {
            isPlan: true,
            dark: {
                color: 'var(--white)',
                backgroundColor: 'var(--dark-grey-blue)',
            },
        }
    },

    provide() {
        return {
            isDisabled: true,
            isPlan: true,
            btnTxt: 'Create my plane'
        }
    },

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
    text-align: center;
    margin-top: 6rem;
    border-radius: 1rem;

}
</style>