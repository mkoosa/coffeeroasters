<template>
    <div class="header">
        <comp-logo></comp-logo>
        <div class="nav" @click="$store.dispatch('side/hideSideMenu', true)">
            <i class="fa-solid fa-bars hamburger" tabindex="0"></i>
        </div>
        <comp-nav class="nav-list--header" :header="header"></comp-nav>
    </div>
</template>

<script>
import compNav from './compNav.vue';
import compLogo from '@/Utils/compLogo.vue';
export default {
    components: { compNav, compLogo },

    data() {
        return {
            header:true
        }
    }

}

</script>

<style>

.nav{
    cursor: pointer;

}
.hamburger {
    font-size: 2.5rem;
}

.header {
    margin: 0 auto;
    max-width: 145rem;
    position: fixed;
    top: 0;
    left: 1.5rem;
    right: 1.5rem;
    padding: 4rem 1.5rem;
    display: flex;
    align-items: center;
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
    .hamburger {
        display: none;
    }
}
</style>