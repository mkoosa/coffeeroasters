<template>
    <Accordion-List>
        <Accordion-Item :preference="preference">
            <template #summary>
                <div class="question">
                    <h3 class="question__header" v-text="preference.question"></h3>
                </div>
            </template>
            <template #icon><i class="fa-solid fa-caret-down question__arrow"></i></template>
            <div class="answer" ref="answer" v-for="answer in preference.answers" :key="answer.name"
                @click="getSelectedElement(answer.name, preference.index, answer)">
                <h4 class="answer__header" v-text="answer.name"></h4>
                <p class="answer__text" v-text="answer.description"></p>
            </div>
        </Accordion-Item>
    </Accordion-List>
</template>

<script>
/*eslint-disable*/
import { library } from "@fortawesome/fontawesome-svg-core";
import { AccordionList, AccordionItem } from "vue3-rich-accordion";
export default {
    components: { AccordionList, AccordionItem },
    props: {
        preference: Object
    },

    data() {
        return {
            selectedElements: [],
        }
    },

    methods: {
        getSelectedElement(option, questionIndex, answer) {
            if (questionIndex === 4) {
                this.$store.dispatch('plan/getPrice', answer.price)
            };
            let refElements = this.$refs.answer;
            let selectedElement = refElements.filter(refElement => refElement.children[0].innerText === option);
            this.changeBackGroundColor(selectedElement[0], questionIndex);
        },

        changeBackGroundColor(element, questionIndex) {
            if (this.avoidDoubleElement(element)) {
                this.$store.dispatch('plan/resetPreference', questionIndex);
                if (questionIndex === 4) {
                    this.$store.dispatch('plan/getPrice', '')
                };
                this.removeClass('checked', element);
                return
            } else {
                this.selectedElements.forEach(element => this.removeClass('checked', element))
                this.addClass('checked', element)
            }
            this.selectedElements = [];
            this.selectedElements.push(element);
            const preference = this.selectedElements[0].childNodes[0].innerText;
            this.addUserPreferences(questionIndex, preference);
        },

        avoidDoubleElement(element) {
            let target = false;
            let value = this.selectedElements.includes(element)
            if (value) {
                target = true
                let index = this.selectedElements.indexOf(element);
                this.updateArray(this.selectedElements, index)
            }
            return target
        },

        updateArray(array, index) {
            array.splice(index, 1)
        },

        addClass(name, element) {
            element.classList.add(name)
        },
        removeClass(name, element) {
            element.classList.remove(name)
        },

        addUserPreferences(index, value) {
            this.$store.dispatch('plan/updateUserPreferences', { index, value });

        },


    },
}

</script>

<style scoped>
#summary {
    border: none;
}

.items {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}

.question {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.question__arrow {
    color: var(--dark-cyan);
    opacity: .7;
    font-size: 2rem;
}

.question__header {
    padding-left: 1rem;
    text-align: left;
    font-size: 2.5rem;
    line-height: 3rem;
    min-width: 90%;
    flex-basis: 80%;
    color: var(--grey);
    font-weight: 900;
    opacity: .8;
    position: relative;
}

.question__header::before{
position: absolute;
width: 4rem;
height: 100%;
top: 0;
left: -3rem;
content: '';
background-color: #fff;
z-index: 1000;

}

.answer.checked {
    background-color: var(--dark-cyan);
    color: var(--white);
    opacity: 1;
}


.answer {
    max-width: 55rem;
    text-align: left;
    cursor: pointer;
    margin: 2rem auto;
    padding: 2.5rem;
    border-radius: 1rem;
    background-color: var(--light-cream);
    position: 100;
}

.answer__header {
    margin-bottom: 1rem;
    font-size: 2.5rem;
    color: var(--dark-grey-blue);
    font-weight: 800;
    opacity: .8;
    position: relative;
}

.checked .answer__header {
    color: var(--white);
    opacity: 1;
}

.answer__text {
    font-size: 1.6rem;
    opacity: .8;
    position: 10;
}

@media only screen and (min-width:768px) {
    .accordion-list .accordion-item>.accordion-item__content {
        display: -webkit-box !important;
        display: -ms-flexbox !important;
        display: flex !important;
    }

    .question__header {
        flex-basis: 100%;
        font-size: 3.2rem;
        opacity: .7;
    }

    .question__arrow {
        font-size: 3rem;
    }

    .answer:nth-child(2) {
        margin: 0 1rem;
    }

    .answer {
        width: 30%;
        height: 25rem;
    }

    .answer:first-child {
        margin-left: 0;
    }
}

@media only screen and (min-width:1200px) {
    .question__header {
        font-size: 3.5rem;
    }

    .question__arrow {
        font-size: 3.6rem;
    }

    .answer {
        margin: 4rem 2rem;
        width: 24rem;
        transition: background-color .2s;
    }

    .answer:hover {
        background-color: var(--pale-orange);
    }

    .answer.checked:hover {
        background-color: var(--dark-cyan);
    }
}
</style>
