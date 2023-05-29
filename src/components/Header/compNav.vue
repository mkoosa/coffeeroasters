<template>
    <div class="nav">
        <i class="fa-solid fa-bars hamburger" tabindex="0"></i>
    </div>
    <ul class="nav__list">
        <li class="nav__element">home</li>
        <li class="nav__element">about us</li>
        <li class="nav__element"> create your plan</li>
    </ul>

</template>


<style scoped>
.hamburger{
    font-size: 2.5rem;
    cursor: pointer;
}

.nav__list{
    display: flex;
    display: none;
    
}

</style>