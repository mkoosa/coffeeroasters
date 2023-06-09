<template>
    <section class="main">
        <comp-introduction />
        <comp-collection />
        <comp-reason />
        <comp-instruction />
    </section>
</template>

<script>

import compIntroduction from './compIntroduction.vue';
import compCollection from './compCollection.vue';
import compReason from './compReason.vue';
import compInstruction from './compInstruction.vue';


export default {

    components: { compIntroduction, compCollection, compReason, compInstruction },


}
</script>
<style scoped></style>

