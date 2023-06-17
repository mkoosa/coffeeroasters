
<template>
    <section class="plan">
        <compDetail :detail="detail" :isPlan="isPlan" />
        <comp-instruction :instructions="instructions" :palette="dark" />
        <comp-preferences />
        <compSummary :summary="summary" />
        <comp-button-main :userPreferencesCompleted="userPreferencesCompleted" :btnTxt="btnTxt"/>

    </section>
</template>
<script>

import compDetail from '../About/compDetail..vue';
import compInstruction from '../Home/compInstruction.vue';
import compPreferences from './compPreferences.vue';
import compSummary from './compSummary.vue';
import compButtonMain from '@/Utils/buttons/compButtonMain.vue';

export default {
    components: { compDetail, compInstruction, compPreferences, compButtonMain, compSummary },
    data() {
        return {
            btnTxt: 'Create my plane',
            isPlan: true,
            dark: {
                color: 'var(--white)',
                backgroundColor: 'var(--dark-grey-blue)',
            },
            summary: true,
            userPreferencesCompleted: false
        }
    },

    provide() {
        return {
            isPlan: true,
            isMain:false
        }        
    },
    
    computed: {
        userPreferences() {
            return this.$store.state.plan.userPreferences    
        },

        instructions() {
            return this.$store.getters['plan/getInstruction']
        },

        detail() {
            return this.$store.getters['plan/getDetails']
        },
    },

    watch: {
        userPreferences: {
            handler: function () {
                let value = this.userPreferences.includes("");
                this.userPreferencesCompleted = value? false : true  
            },
            deep:true
        },
    },
    
    mounted() {
        this.$store.dispatch('plan/getDetails');
        this.$store.dispatch('plan/getInstruction')
    },
}

</script>

<style scoped>
.plan {
    text-align: center;
    margin-top: 6rem;
    border-radius: 1rem;

}
</style>