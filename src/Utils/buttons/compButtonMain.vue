<template>
    <router-link v-if="isMain" :to="{ name: 'create your plane', hash:'#summary' }">
        <button :class="['main-btn']" v-text="btnTxt" tabindex="0"></button>
    </router-link>
    <div v-if="isPlan &&!isCheck">
        <button v-if="!userPreferencesCompleted" :class="['main-btn', { 'btn--grey': isPlan }]" v-text="btnTxt" tabindex="0"></button>
        <button v-if="userPreferencesCompleted && !isCheck" :class="['main-btn']" v-text="btnTxt" tabindex="0" @click="proceed"></button>
    </div>
    <router-link v-if="isCheck" :to="{ name: 'home' }">
        <button :class="['checkout-btn']"  v-text="btnTxt" tabindex="0" @click="done"></button>
    </router-link>
</template>

<script>
export default {
    props: {
        btnTxt: [String, Function],
        userPreferencesCompleted: Boolean,
        resetKeepAlive: Function
    },

    inject: ['isPlan', 'isMain', 'isCheck'],
    emits: ['change'],

    methods: {
        proceed() {
            this.$store.dispatch('plan/changeCheckOutStatus', true)    
        },
        
        done() {
            this.$store.dispatch('plan/changeCheckOutStatus', false);
            this.resetKeepAlive()
        },
    },
}

</script>

<style scoped>
.main-btn, 
.checkout-btn
 {
    padding: 1.5rem;
    color: var(--white);
    font-size: 2rem;
    background-color: var(--dark-cyan);
    font-family: 'Fraunces', serif;
    border-radius: .7rem;
    font-weight: 800;
    letter-spacing: .1rem;
    cursor: pointer;
    position: relative;
    transition: opacity .1s;
}

.checkout-btn{
    width: 100%;
    margin-bottom: 2rem;
    max-width: 45rem;
}
.main-btn:hover {
    opacity: .9;
    color: var(--light-grey);
}

.btn--grey {
    background-color: var(--light-grey);
    pointer-events: none;
}


@media only screen and (min-width: 768px){
    .checkout-btn{
        margin-bottom: 0;
        width: 20rem;
    }
}
</style>

