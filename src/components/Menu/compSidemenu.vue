<template>
    <div :class="['side-menu', {'active': !isNavActive}]">
    <div @click="$store.dispatch('side/hideSideMenu', false)">
        <i class="fas fa-solid fa-xmark" tabindex="0"></i>
    </div>
        <comp-nav :side="side" class="nav-list--side"></comp-nav>
    </div>
</template>

<script>
import compNav from '../Header/compNav.vue';
export default {
    components: { compNav },

    computed: {
        isNavActive() {
            return this.$store.getters['side/getSideMenu']
        }
    }
}
</script>

<style scoped>
.side-menu {
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    width: 20rem;
    background-color: var(--dark-grey-blue);
    z-index: 200;
    overflow-x: hidden;
    transition: width .3s;
}

.active.side-menu{
    width: 0rem;
}
.fa-xmark {
    position: absolute;
    top: 2.5rem;
    right: 3.3rem;
    font-size: 2.7rem;
    color: var(--grey);
    cursor: pointer;
}
</style>