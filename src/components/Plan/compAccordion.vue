<template>
    <Accordion-List>
        <Accordion-Item :preference="preference">
            <template #summary>
                <div class="question">
                    <h3 class="question__header" v-text="preference.question"></h3>
                </div>
            </template>
            <template #icon><i class="fas fa-solid fa-angle-down fa-lg question__arrow"></i></template>
            <div class="answer" ref="answer" v-for="answer in preference.answers" :key="answer.name"
                @click="getSelectedElement(answer.name, preference.index)">
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
    props: ['preference'],

    data() {
        return {
            selectedElements: [],
        }
    },

    methods: {
        getSelectedElement(option, questionIndex) {
            let refElements = this.$refs.answer;
            let selectedElement = refElements.filter(refElement => refElement.children[0].innerText === option);
            this.changeBackGroundColor(selectedElement[0], questionIndex);
        },

        changeBackGroundColor(element, questionIndex) {
            if (this.avoidDoubleElement(element)) {
                this.$store.dispatch('plan/resetPreference', questionIndex);
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
            this.$store.dispatch('plan/updateUserPreferences', { index, value })
        }
    },
}

</script>

<style scoped>
#summary {
    border: none;
}

.items {
    display: flex;
}

.question {
    display: flex;
    align-items: center;
}

.question__arrow {
    color: var(--dark-cyan);
    font-size: 2rem;

}

.question__header {
    text-align: left;
    font-size: 2.5rem;
    flex-basis: 80%;
    color: var(--grey);
    font-weight: 900;
    opacity: .8;
}


.answer.checked {
    background-color: var(--dark-cyan);
    color: var(--white);
    opacity: 1;

}

.answer {
    text-align: left;
    cursor: pointer;
    margin: 2rem 0;
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
</style>