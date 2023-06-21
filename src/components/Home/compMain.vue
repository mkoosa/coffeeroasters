<template>
    <section class="main">
        <comp-detail :detail="detail" :isHome="isHome">
            <comp-button-main :btnTxt="btnTxt" />
        </comp-detail>
        <comp-collection />
        <comp-reason />
        <comp-instruction :instructions="instructions" :palette="light">
            <h2 v-text="textHeader" class="instruction__header"></h2>
            <template v-slot:home>
            <comp-steps />
            </template>
        </comp-instruction>
        <comp-button-main :btnTxt="btnTxt" />
    </section>
</template>

<script>
import CompDetail from '../About/CompDetail..vue';
import CompCollection from './CompCollection.vue';
import CompReason from './CompReason.vue';
import CompInstruction from './CompInstruction.vue';
import CompButtonMain from '@/Utils/buttons/CompButtonMain.vue';
import CompSteps from '@/Utils/CompSteps.vue';
import { mapGetters } from 'vuex'

export default {
    components: { CompCollection, CompReason, CompInstruction, CompDetail, CompButtonMain, CompSteps },
    data() {
        return {
            btnTxt:'create your plane',
            textHeader: 'How it works',
            isHome: true,
            light: {
                color: 'var(--dark-grey-blue)',
                backgroundColor: 'var(--white)'
            },
        }
    },

    provide() {
        return {
            isDisabled: false,
            isMain: true,
            isPlan: false,
            isCheck:false
        }
    },
    computed: {
        ... mapGetters({
            detail: 'home/getDetails',
            instructions:'home/getInstruction'            
        })
    },

    mounted() {
        this.$store.dispatch('home/getDetails');
        this.$store.dispatch('home/getInstruction')
    },

 
}
</script>
<style scoped>
.main {
    margin-top: 6rem;
    text-align: center;

}

@media only screen and (min-width: 768px) {
    .main {
        text-align: initial;
    }

}
</style>

