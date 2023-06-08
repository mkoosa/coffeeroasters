<template>
    <div class="about-us__detail" v-for="detail in details" :key="detail.name"> 
        <compDetail :detail="detail">
        </compDetail>
    </div>
</template>

<script>
import compDetail from './compDetail..vue';
export default {

    components: { compDetail },

    computed: {
        details() {
            
            return this.$store.getters['about/getDetails']        
        }
    },

    mounted() {
        this.$store.dispatch('about/getDetails')
    }
}
    
</script>
<style scoped>

</style>