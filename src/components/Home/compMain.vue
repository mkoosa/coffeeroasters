<template>
    <section class="main">
        <comp-detail :detail="detail" :isHome="isHome">
        <comp-button-main :text="btnTxt"/>
        </comp-detail>
        <comp-collection />
        <comp-reason />
        <comp-instruction :instructions="instructions"/>
    </section>
</template>

<script>

import compDetail from '../About/compDetail..vue';
import compCollection from './compCollection.vue';
import compReason from './compReason.vue';
import compInstruction from './compInstruction.vue';
import compButtonMain from '@/Utils/buttons/compButtonMain.vue';


export default {
    components: { compCollection, compReason, compInstruction, compDetail, compButtonMain },
    data() {
        return {
            btnTxt: 'Create your plane',
            isHome:true
        }
    },

    computed: {
        detail() {
            return this.$store.getters['home/getDetails']
        },

        instructions() {
            return this.$store.getters['home/getInstruction']
        }
    },

    mounted() {
        this.$store.dispatch('home/getDetails');
        this.$store.dispatch('home/getInstruction')
    },


}
</script>
<style scoped>
.main{
    margin-top: 6rem;

}
</style>

