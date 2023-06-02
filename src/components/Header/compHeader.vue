<template>
    <div class="header">
        <comp-logo></comp-logo>
        <div class="nav">
            <i class="fa-solid fa-bars hamburger" tabindex="0"></i>
        </div>
        <comp-nav></comp-nav>
    </div>
</template>

<script>
import compNav from './compNav.vue';
import compLogo from '@/Utils/compLogo.vue';
export default {
    components: { compNav, compLogo }

}

</script>

<style>
.hamburger {
    font-size: 2.5rem;
    cursor: pointer;
}

.header {
    margin: 0 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* background-color: aqua; */
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