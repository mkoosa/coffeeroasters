<template>
    <div class="main">
    <comp-introduction></comp-introduction>
    <comp-collection></comp-collection>
    <comp-reason></comp-reason>
    </div>
    
</template>

<script>
import compIntroduction from './compIntroduction.vue';
import compCollection from './compCollection.vue';
import compReason from './compReason.vue';

export default {

components: {compIntroduction, compCollection, compReason}



}



</script>

<style scoped>
.main{
    margin: 3rem 0;
}


</style>

