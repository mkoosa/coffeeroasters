<template>
    <div class="header">
        <div class="header__logo">
            <div class="logo">
                <img src="../../assets/home/desktop/icon-coffee-bean.svg" alt="coffee bean" width="16px"
                    class="bean bean--first">
                <img src="../../assets/home/desktop/icon-coffee-bean.svg" alt="coffee bean" width="16px"
                    class="bean bean--second">
            </div>
            <h1 class="heading">coffeeroasters</h1>
        </div>
        <comp-nav></comp-nav>

    </div>
</template>

<script>
import compNav from './compNav.vue'
export default {
    components: { compNav }

}

</script>

<style>

.header{
    display: flex;
    align-items: center;
    justify-content: space-between;
}


.header__logo {
    display: flex;
}

.logo {
    margin-left: 1rem;
    align-self: end;
    position: relative;
}

.bean--first {
    position: absolute;
    bottom: 1.2rem;
    right: .8rem;
    z-index: 1;
    transform: rotate(-10deg);
}

.bean--second {
    transform: rotate(100deg);
    z-index: 20;
}



.heading {
    margin-left: .5rem;
    font-size: 2.2rem;
    font-family: 'Fraunces', serif;
    font-weight: 900;
    color: var(-dark-grey-blue);
    opacity: .9;
}
</style>