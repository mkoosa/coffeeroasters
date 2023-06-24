<template>
    <div :class="['summary', { 'summary--summary': summary && !checkOut, 'summary--checkout': checkOut }]" id="summary">
        <router-link @click="back" :to="{ name: 'create your plane' }">
            <i :class="['fa-regular', 'fa-square-caret-left', 'back', { 'back': checkOut }]"></i>
        </router-link>
        <h2
            :class="['summary__header', { 'summary__header--summary': summary && !checkOut, 'summary__header--checkout': checkOut }]">
            {{
                headerTxt }}</h2>
        <div :class="['some', { 'summary__content-wrapper': checkOut }]">
            <p
                :class="['summary__content', { 'summary__content--summary': summary && !checkOut, 'summary__content--checkout': checkOut }]">
                “I drink my coffee as a <span v-if="userPreferences[0]">{{ userPreferences[0] }} </span><span
                    v-else>__</span>
                , with a <span v-if="userPreferences[1]">{{
                    userPreferences[1] }} </span><span v-else>__</span>
                type of bean. <span v-if="userPreferences[2]">{{ userPreferences[2] }} </span><span v-else>__</span>
                ground ala <span v-if="userPreferences[3]">{{ userPreferences[3] }} </span><span v-else>__</span>,
                sent to me <span v-if="userPreferences[4]">{{ userPreferences[4] }} </span><span v-else>__</span>.”
            </p>
            <p :class="{ 'summary__checkoutTxt': checkOut }" v-if="checkOut" v-text="checkOutTxt">
            </p>
            <div class="checkout-btn-wrapper--narrow">
                <comp-button-main v-if="checkOut" :btnTxt="checkoutPriceNarrowBtn()" :resetKeepAlive="resetKeepAlive" />
            </div>
            <div class="checkout-btn-wrapper--wide">
                <p class="checkout-price">{{ checkoutPriceWideBtn() }}</p>
                <comp-button-main v-if="checkOut" :btnTxt="btnTxt" :resetKeepAlive="resetKeepAlive" />
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CompButtonMain from '@/Utils/buttons/CompButtonMain.vue';

export default {
    props: {
        summary: Boolean
    },
    components: { CompButtonMain },

    data() {
        return {
            headerTxt: 'order summary',
            btnTxt: 'Checkout'
        }
    },

    mounted() {
        this.$store.dispatch('plan/getCheckOut')
    },

    activated() {
        this.$store.dispatch('home/getKeepalive', true);
    },

    methods: {
        back() {
            this.$store.dispatch('plan/changeCheckOutStatus', false);
        },

        resetKeepAlive() {
            this.$store.dispatch('home/getKeepalive', false);
            this.$store.dispatch('plan/resetUserPreferences');
        },

        checkoutPriceNarrowBtn() {
            const price = this.price;
            if (!price) return;
            return `${this.btnTxt} - $${price.toFixed(2)} / mo`
        },

        checkoutPriceWideBtn() {
            const price = this.price;
            if (!price) return;
            return `$${price.toFixed(2)} / mo`
        },
    },

    computed: {
        ...mapGetters({
            userPreferences: 'plan/getUserPreferences',
            checkOut: 'plan/getCheckOutStatus',
            checkOutTxt: 'plan/getCheckOutTxt',
            price: 'plan/getPrice'
        })
    },

    provide() {
        return {
            isDisabled: true,
            isPlan: false,
            isMain: false,
            isCheck: true
        }
    },
}
</script>

<style scoped>
.back {
    color: var(--dark-cyan);
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 2.5rem;
    cursor: pointer;
}

.summary {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin: 9rem 0 7rem 0;
    background-color: var(--dark-grey-blue);
    color: var(--white);
    border-radius: 1rem;
    text-align: left;
}

.summary--summary {
    padding: 6rem 2rem;
}

.summary--checkout {
    margin-left: auto;
    margin-right: auto;
    max-width: 55rem;
    position: fixed;
    top: -7rem;
    left: 2rem;
    right: 2rem;
    background-color: var(--white);
    border: .1rem solid var(--dark-cyan);
    z-index: 1000;
}

.summary__header--checkout {
    width: 100%;
    padding: 2.5rem 2rem;
    background-color: var(--dark-grey-blue);
    text-transform: capitalize;
    font-size: 2.6rem;
    font-weight: 900;
    letter-spacing: .05rem;
}

.summary__header--summary {
    margin-bottom: 1.5rem;
    color: var(--light-grey);
    font-family: 'Barlow', sans-serif;
    font-size: 1.4rem;
    font-weight: 400;
    text-transform: uppercase;
}

.summary__content-wrapper {
    padding: 0 2rem;

}

.summary__content--summary,
.summary__content--checkout {
    font-size: 2.9rem;
    font-weight: 800;
    font-family: 'Fraunces', serif;
    line-height: 4.7rem;
}

.summary__content--checkout {
    font-size: 2.3rem;
    color: var(--grey);
    margin-top: 3rem;
    opacity: .8;
    font-weight: 900;
}

.summary__content--summary span,
.summary__content--checkout span {
    text-transform: capitalize;
    font-size: 2.8rem;
    color: var(--dark-cyan);
}

.summary__content--checkout span {
    font-size: 2.6rem;
}

.summary__checkoutTxt {
    margin: 2rem 0;
    color: var(--grey);
    font-size: 1.5rem;
    line-height: 3rem;
    font-weight: 400;
    text-shadow: .2rem .2rem -2rem;
}

.checkout-btn-wrapper--narrow {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
}

.checkout-btn-wrapper--wide {
    display: none;
}

.checkout-price {
    display: none;
}

@media only screen and (min-width: 768px) {
    .summary--checkout {
        margin-left: initial;
        margin-right: initial;
        width: 55rem;
        top: 30%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .summary--summary {
        height: 28rem;
    }

    .summary__header--checkout {
        padding: 4rem;
        font-size: 3.6rem;
    }

    .summary__content-wrapper {
        padding: 2rem;
    }

    .summary__content--checkout {
        line-height: 4rem;
        text-align: center;
    }


    .checkout-btn-wrapper--narrow {
        display: none;
    }

    .checkout-btn-wrapper--wide {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-pack: distribute;
        justify-content: space-around;
    }

    .checkout-price {
        display: none;
    }

    .summary--checkout .checkout-price {
        font-size: 3.5rem;
        color: var(--dark-grey-blue);
        font-family: 'Fraunces', serif;
        font-weight: 800;
        display: block;
        flex-basis: 50%;
        display: block;
    }
}

@media only screen and (min-width: 1200px) {


    .summary__content {
        max-width: 101rem;
    }
}
</style>

