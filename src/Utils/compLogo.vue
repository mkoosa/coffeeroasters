<template>
    <div class="logo__wrapper">
        <div class="logo">
            <img src="../assets/home/desktop/icon-coffee-bean.svg" alt="coffee bean" class="bean bean--first">
            <img src="../assets/home/desktop/icon-coffee-bean.svg" alt="coffee bean" width="20px" class="bean bean--second">
        </div>
        <h1 class="heading" :class="$attrs.class">coffeeroasters</h1>
    </div>
</template>


<script>
export default {

}

</script>

<style scoped>
.logo__wrapper {
    display: flex;
    align-items: center;
}

.logo {
    align-self: end;
    position: relative;
}

.bean--first {
    position: absolute;
    bottom: 1.2rem;
    right: .8rem;
    z-index: 1;
    transform: rotate(-10deg);
    width: 1.6rem;
}

.bean--second {
    transform: rotate(100deg);
    z-index: 20;
    width: 1.6rem;
}

.heading {
    margin-left: .5rem;
    font-size: 2.2rem;
    font-family: 'Fraunces', serif;
    font-weight: 900;
    color: var(-dark-grey-blue);
    opacity: .9;
}

.bigger{
    font-size: 2.8rem;
    margin-left: 1rem;
}
</style>