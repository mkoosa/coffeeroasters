<template>
    <header class="header">
        <comp-logo />
        <div
            class="nav"
            @click="$store.dispatch('side/hideSideMenu', true)"
            v-if="!isHamburgerHidden"
        >
            <i
                :class="['fa-solid', 'fa-bars', 'hamburger', 'active']"
                tabindex="0"
            ></i>
        </div>
        <comp-nav class="nav-list--header" :header="header"></comp-nav>
    </header>
</template>

<script>
import CompNav from './compNav.vue';
import CompLogo from '@/Utils/compLogo.vue';
export default {
    components: {CompNav, CompLogo},
    data() {
        return {
            header: true,
        };
    },

    computed: {
        isHamburgerHidden() {
            return this.$store.getters['side/getSideMenu'];
        },
    },
};
</script>

<style>
.nav {
    cursor: pointer;
}

.active.hamburger {
    font-size: 2.5rem;
    display: block;
}

.hamburger {
    display: none;
}

.header {
    margin: 0 auto;
    max-width: 145rem;
    position: fixed;
    top: 0;
    left: 1.5rem;
    right: 1.5rem;
    padding: 4rem 1.5rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    overflow: hidden;
    background-color: var(--white);
    height: 5rem;
    z-index: 100;
}

.header__logo {
    display: flex;
}

@media only screen and (min-width: 600px) {
    .nav {
        display: none;
    }
}
</style>
