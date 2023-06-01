<template>
    <div class="header">
        <comp-logo></comp-logo>
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
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}


.header__logo {
    display: flex;
}
</style>