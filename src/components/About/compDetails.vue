<template>
    <div class="about-us__detail" v-for="detail in details" :key="detail.name"> 
        <compDetail :detail="detail">
        </compDetail>
    </div>
</template>

<script>
import CompDetail from './CompDetail..vue';
export default {
    components: { CompDetail },
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
