<template>
    <router-link v-if="isMain" :to="{ name: 'create your plane' }">
        <button :class="['main-btn']" v-text="btnTxt" tabindex="0"></button>
    </router-link>
    <div v-if="isPlan">
        <button v-if="!userPreferencesCompleted" :class="['main-btn', { 'btn--grey': isPlan }]" v-text="btnTxt" tabindex="0"></button>
        <button v-else :class="['main-btn']" v-text="btnTxt" tabindex="0"></button>

    </div>
</template>

<script>
export default {
    props: ['btnTxt', 'userPreferencesCompleted'],
    inject: ['isPlan','isMain']
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

