
<template>
    <section class="plan">
    <div :class="{blur:checkOutStatus}"></div>
        <compDetail :detail="detail" :isPlan="isPlan" />
        <comp-instruction :instructions="instructions" :palette="dark" />
        <comp-preferences />
        <compSummary :summary="summary" />
        <comp-button-main :userPreferencesCompleted="userPreferencesCompleted" :btnTxt="btnTxt"/>
    </section>
</template>
<script>

import CompDetail from '../About/CompDetail..vue';
import CompInstruction from '../Home/CompInstruction.vue';
import CompPreferences from './CompPreferences.vue';
import CompSummary from './CompSummary.vue';
import CompButtonMain from '@/Utils/buttons/CompButtonMain.vue';
import {mapGetters} from 'vuex'

export default {
    components: { CompDetail, CompInstruction, CompPreferences, CompButtonMain, CompSummary },
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
            isMain: false,
            isCheck:false
        }        
    },

    computed: {
        userPreferences() {
            return this.$store.state.plan.userPreferences    
        },

        ...mapGetters({
            instructions: 'plan/getInstruction',
            detail: 'plan/getDetails',
            checkOutStatus:'plan/getCheckOutStatus'
        })
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
.blur{
    z-index: 100;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--grey);
    opacity: .9;
}
</style>