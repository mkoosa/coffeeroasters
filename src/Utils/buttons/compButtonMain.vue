<template>
    <router-link v-if="!isDisabled" :to="{ name: 'create your plane' }">
        <button v-if="isPlan" :class="['main-btn']" v-text="btnTxt" tabindex="0" :disabled="isDisabled"></button>
        <button v-else :class="['main-btn']" v-text="text" tabindex="0" :disabled="isDisabled"></button>
    </router-link>

    <router-link v-else :to="{ name: 'create your plane' }" :style="{
        pointerEvents: 'none',
    }">
        <button v-if="isPlan" :class="['main-btn', { 'btn--grey': isPlan }]" v-text="btnTxt" tabindex="0"
            :disabled="isDisabled"></button>
        <button v-else :class="['main-btn', { 'btn--grey': isPlan }]" v-text="text" tabindex="0"
            :disabled="isDisabled"></button>
    </router-link>
</template>

<script>
export default {
    props: ['text'],
    inject: ['isDisabled', 'isPlan', 'btnTxt']
}

</script>


<style scoped>
.main-btn {
    padding: 1.2em 2em;
    color: var(--white);
    font-size: 1.6rem;
    background-color: var(--dark-cyan);
    font-family: 'Fraunces', serif;
    border-radius: .7rem;
    font-weight: 800;
    letter-spacing: .1rem;
    cursor: pointer;
    position: relative;
    transition: opacity .1s;
}

.main-btn:hover {
    opacity: .9;
    color: var(--light-grey);
}

.btn--grey {
    background-color: var(--light-grey);
    pointer-events: none;
}
</style>

