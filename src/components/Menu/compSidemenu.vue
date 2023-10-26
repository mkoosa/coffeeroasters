<template>
    <div :class="['side-menu', {active: isNavActive}]">
        <div @click="$store.dispatch('side/hideSideMenu', false)">
            <i class="fas fa-solid fa-xmark" tabindex="0"></i>
        </div>
        <comp-nav class="nav-list--side"></comp-nav>
    </div>
</template>

<script>
import CompNav from '../Header/CompNav.vue';
export default {
    components: {CompNav},
    computed: {
        isNavActive() {
            return this.$store.getters['side/getSideMenu'];
        },
    },
};
</script>

<style scoped>
.active.side-menu {
    height: 100%;
    position: fixed;
    top: 8rem;
    width: 100%;
    left: 0;
    background: -webkit-linear-gradient(#fff, #fff, transparent) !important;
    z-index: 600;
    transition: height 0.3s;
}

.side-menu {
    height: 0rem;
    transition: all 0.3s;
}

.fa-xmark {
    position: absolute;
    top: -5.5rem;
    right: 3.3rem;
    font-size: 2.7rem;
    color: var(--grey);
    cursor: pointer;
}

@media only screen and (min-width: 768px) {
    .side-menu {
        display: none;
    }
}
</style>
