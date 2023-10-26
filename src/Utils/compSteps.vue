<template>
    <div class="steps d-flex">
        <div class="step"></div>
        <div class="step"></div>
        <div class="step"></div>
    </div>
</template>

<style scoped>
.steps {
    width: 70%;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    position: relative;
    display: none;
}

.steps::after {
    content: '';
    background-color: var(--pale-orange);
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 100%;
    height: 0.2rem;
}

.step {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    border: 0.2rem solid var(--dark-cyan);
    background-color: #fff;
    position: relative;
    z-index: 90;
    overflow: hidden;
}

@media only screen and (min-width: 768px) {
    .steps {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
    }

    .plan .step {
        background-color: transparent;
        position: relative;
        /* z-index: 1000; */
    }

    .plan .step:nth-child(3)::after,
    .plan .step:nth-child(1)::after {
        content: '';
        position: absolute;
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        background-color: var(--dark-grey-blue);
        background-color: #424a54;
        -webkit-transform: translate(50%);
        -ms-transform: translate(50%);
        transform: translate(50%);
    }

    .plan .step:nth-child(1)::after {
        -webkit-transform: translate(-50%);
        -ms-transform: translate(-50%);
        transform: translate(-50%);
    }
}
</style>
