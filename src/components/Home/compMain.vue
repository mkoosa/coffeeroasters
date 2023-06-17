<template>
    <section class="main">
        <comp-detail :detail="detail" :isHome="isHome">
            <comp-button-main :btnTxt="btnTxt" />
        </comp-detail>
        <comp-collection />
        <comp-reason />
        <comp-instruction :instructions="instructions" :palette="light">
            <h2 v-text="textHeader" class="instruction__header"></h2>
        </comp-instruction>
        <comp-button-main :btnTxt="btnTxt" />
    </section>
</template>

<script>
import compDetail from '../About/compDetail..vue';
import compCollection from './compCollection.vue';
import compReason from './compReason.vue';
import compInstruction from './compInstruction.vue';
import compButtonMain from '@/Utils/buttons/compButtonMain.vue';
import { mapGetters } from 'vuex'

export default {
    components: { compCollection, compReason, compInstruction, compDetail, compButtonMain },
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
            isPlan: false,
            isMain: true,
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

