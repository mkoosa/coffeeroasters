<template>
    <section class="plan">
        <div :class="{blur: checkOutStatus}"></div>
        <compDetail :detail="detail" :isPlan="isPlan" />
        <comp-instruction :instructions="instructions" :palette="dark">
            <template v-slot:plan>
                <comp-steps class="steps--plan" />
            </template>
        </comp-instruction>
        <div class="right-wrapper">
            <comp-schedule />
            <div class="choice-wrapper">
                <comp-preferences />
                <compSummary :summary="summary" />
                <comp-button-main
                    :userPreferencesCompleted="userPreferencesCompleted"
                    :btnTxt="btnTxt"
                />
            </div>
        </div>
    </section>
</template>
<script>
import CompDetail from '../About/compDetail.vue';
import CompInstruction from '../Home/compInstruction.vue';
import CompPreferences from './compPreferences.vue';
import CompSummary from './compSummary.vue';
import CompButtonMain from '@/Utils/buttons/compButtonMain.vue';
import CompSteps from '@/Utils/compSteps.vue';
import CompSchedule from './CompSchedule.vue';
import {mapGetters} from 'vuex';

export default {
    components: {
        CompDetail,
        CompInstruction,
        CompPreferences,
        CompButtonMain,
        CompSummary,
        CompSteps,
        CompSchedule,
    },
    data() {
        return {
            btnTxt: 'Create my plane',
            isPlan: true,
            dark: {
                color: 'var(--white)',
                backgroundColor: 'var(--dark-grey-blue)',
            },
            summary: true,
            userPreferencesCompleted: false,
        };
    },

    provide() {
        return {
            isPlan: true,
            isMain: false,
            isCheck: false,
        };
    },

    computed: {
        userPreferences() {
            return this.$store.state.plan.userPreferences;
        },

        ...mapGetters({
            instructions: 'plan/getInstruction',
            detail: 'plan/getDetails',
            checkOutStatus: 'plan/getCheckOutStatus',
        }),
    },

    watch: {
        userPreferences: {
            handler: function () {
                let value = this.userPreferences.includes('');
                this.userPreferencesCompleted = value ? false : true;
            },
            deep: true,
        },
    },

    mounted() {
        this.$store.dispatch('plan/getDetails');
        this.$store.dispatch('plan/getInstruction');
    },
};
</script>

<style scoped>
.plan {
    text-align: center;
    margin-top: 6rem;
    border-radius: 1rem;
}

.blur {
    z-index: 100;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--grey);
    opacity: 0.3;
}

@media only screen and (min-width: 1200px) {
    .right-wrapper {
        display: flex;
        justify-content: space-around;
    }
    .plan {
        text-align: right;
    }
}
</style>
