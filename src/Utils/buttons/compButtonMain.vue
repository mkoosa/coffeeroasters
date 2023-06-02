<template>
    <button class="main-btn" v-text="text" tabindex="0"></button>
</template>

<script>
export default {
    props: ['text'],
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
    
}

.main-btn:hover {
    
    opacity: .7;
    background-color: var(--dark-cyan-hover);
}
</style>

