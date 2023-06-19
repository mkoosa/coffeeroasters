<template>
    <div class="loader">
        <div class="lds-grid">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
</template>

<style scoped>

.loader{
    position: fixed;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
    z-index: 100;
}
.lds-grid {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
}

.lds-grid div {
    position: absolute;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: var(--dark-cyan);
    animation: lds-grid 1.2s linear infinite;
}

.lds-grid div:nth-child(1) {
    top: 16px;
    left: 16px;
    animation-delay: 0s;
}

.lds-grid div:nth-child(2) {
    top: 16px;
    left: 40px;
    animation-delay: -0.4s;
}

.lds-grid div:nth-child(3) {
    top: 16px;
    left: 64px;
    animation-delay: -0.8s;
}

.lds-grid div:nth-child(4) {
    top: 40px;
    left: 16px;
    animation-delay: -0.4s;
}

.lds-grid div:nth-child(5) {
    top: 40px;
    left: 40px;
    animation-delay: -0.8s;
}

.lds-grid div:nth-child(6) {
    top: 40px;
    left: 64px;
    animation-delay: -1.2s;
}

.lds-grid div:nth-child(7) {
    top: 64px;
    left: 16px;
    animation-delay: -0.8s;
}

.lds-grid div:nth-child(8) {
    top: 64px;
    left: 40px;
    animation-delay: -1.2s;
}

.lds-grid div:nth-child(9) {
    top: 64px;
    left: 64px;
    animation-delay: -1.6s;
}

@keyframes lds-grid {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0.5;
    }
}</style>