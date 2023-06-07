<template>
    <div class="logo__wrapper">
        <div class="logo">
            <img src="../assets/home/desktop/icon-coffee-bean.svg" alt="coffee bean" class="bean bean--first">
            <img src="../assets/home/desktop/icon-coffee-bean.svg" alt="coffee bean" class="bean bean--second">
        </div>
        <h1 class="logo__heading" :class="$attrs.class">coffeeroasters</h1>
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

.bean {
    min-width: 15px;
}


.bean--first {
    position: absolute;
    bottom: 1.4rem;
    right: 1rem;
    z-index: 1;
    transform: rotate(-10deg);
    width: 1.6rem;
}

.bean--second {
    transform: rotate(100deg);
    z-index: 20;
    width: 1.6rem;
}

.logo__heading {
    margin-left: .5rem;
    font-size: 2.2rem;
    font-family: 'Fraunces', serif;
    font-weight: 900;
    color: var(-dark-grey-blue);
    opacity: .9;
}

.bigger {
    font-size: 2.8rem;
    margin-left: 1rem;
}

@media only screen and (min-width: 600px) {
    .logo__heading {
        font-size: 2.4rem;
    }

    .logo__wrapper {
        margin: 1.5rem 0;
    }
}

@media only screen and (min-width: 768px) {
    .logo__heading {
        font-size: 3rem;
    }

    .bean {
        width: 20px;
    }

}

@media only screen and (min-width: 1200px) {
    .logo__heading {
        font-size: 3.3rem;

    }

}
</style>