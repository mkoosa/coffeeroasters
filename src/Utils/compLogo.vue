<template>
    <div class="logo__wrapper">
        <div class="logo">
            <img
                src="https://res.cloudinary.com/dwp8gkrp5/image/upload/v1687617516/icon-coffee-bean_l3ob3j.svg"
                alt="coffee bean"
                class="bean bean--first"
            />
            <img
                src="https://res.cloudinary.com/dwp8gkrp5/image/upload/v1687617516/icon-coffee-bean_l3ob3j.svg"
                alt="coffee bean"
                class="bean bean--second"
            />
        </div>
        <h1 class="logo__heading" :class="$attrs.class">coffeeroasters</h1>
    </div>
</template>

<style scoped>
.logo__wrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.logo {
    -ms-flex-item-align: end;
    -ms-grid-row-align: end;
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
    margin-left: 0.5rem;
    font-size: 2.2rem;
    font-family: 'Fraunces', serif;
    font-weight: 900;
    color: var(-dark-grey-blue);
    opacity: 0.9;
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
