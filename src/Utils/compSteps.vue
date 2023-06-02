<template>
    <div class="steps d-flex">
        <div class="step"></div>
        <div class="step"></div>
        <div class="step"></div>

    </div>
</template>

<style scoped>
.steps{
    width: 70%;
    justify-content: space-between;
    position: relative;
}
.steps::after{
    content: '';
    background-color: var(--pale-orange);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    height: .2rem;
    
}

.step{
    
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    border: .2rem solid var(--dark-cyan);
    background-color: #fff;
    position: relative;
    z-index: 10;
}

</style>