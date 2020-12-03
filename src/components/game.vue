<template>
<div class="row contentrow">
    <div class="col-md-12 q-container">
        <div class="q-block" v-html="data.question" />
    </div>
    <div class="col-md-12" style="text-align: center;">
        <div class="row">
            <div v-for="(ans, id) in data.ans" :key="id" class="col-md-6 ans-container" @click="ansClick(id+1)">
                <div class="ans-block" :class="'ans-'+id + selectedClass(id)" v-html="ans" />
            </div>
        </div>
    </div>
    <transition name="component-fade" mode="out-in">
        <div v-if="result" class="result-container" :class="(correct)?'true-ans':'false-ans'">
            <div><b>{{genSay()}}</b></div>
            <div class="avd_div"><a class="bucn_4_r" href="javascript://" @click="$store.commit('nextPage')">Дальше</a></div>
        </div>
    </transition>
    <transition name="component-fade" mode="out-in">
        <div v-if="result" class="result-overlay" />
    </transition>
</div>
</template>

<script>
export default {
    data() {
        return {
            result: false,
        }
    },
    computed: {
        id() {
            return this.$store.state.activePage;
        },
        data() {
            return this.$store.state.pages.content[this.id - 1];
        },
        correct() {
            return this.$store.getters.correct;
        },

    },
    methods: {
        selectedClass(aid) {
            if (this.$store.state.pages.content[this.id - 1].selected == aid + 1)
                return " selected-" + ((this.$store.getters.correct) ? "true" : "false") + "-ans";
            return "";
        },
        ansClick(id) {
            if (!this.result) {
                this.$store.commit('selAns', id);
                this.result = true;
                this.$store.dispatch('recAns');
            }
        },
        genSay() {
            return this.$store.getters.genSay;
        },
    },
    mounted() {
        this.$store.dispatch('getUserId');
    }
}
</script>

<style>
.q-container {
    min-height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.q-block {
    width: 100%;
    border-radius: 1em;
    background-color: rgb(242, 255, 255);
    border: 3px solid rgb(204, 253, 255);
    text-align: center;
    padding: 20px;
    margin-top: 10px;
    box-shadow: 1px 1px 9px 0px rgba(0, 0, 0, 0.42);
    -webkit-box-shadow: 1px 1px 9px 0px rgba(0, 0, 0, 0.42);
    -moz-box-shadow: 1px 1px 9px 0px rgba(0, 0, 0, 0.42);
}

.result-container {
    border-radius: 1em;
    text-align: center;
    padding: 15px;
    position: absolute;
    bottom: 15px;
    position: absolute;
    left: 15px;
    right: 15px;
    top: auto;
    z-index: 101;
}

.true-ans {
    background-color: rgba(180, 255, 171, 0.9);
    border: 3px solid rgb(2, 185, 63);
}

.false-ans {
    background-color: rgba(255, 180, 171, 0.9);
    border: 3px solid rgb(185, 2, 63);
}

.result-overlay {
    background-color: #000;
    /* Чёрный фон */
    height: 100%;
    /* Высота максимальна */
    left: 0;
    /* Нулевой отступ слева */
    opacity: 0.30;
    /* Степень прозрачности */
    position: fixed;
    /* Фиксированное положение */
    top: 0;
    /* Нулевой отступ сверху */
    width: 100%;
    /* Ширина максимальна */
    z-index: 100;
    /* Заведомо быть НАД другими элементами */
}

.ans-container {
    min-height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.ans-block {
    width: 80%;
    height: 80%;
    border-radius: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 1px 1px 9px 0px rgba(0, 0, 0, 0.42);
    -webkit-box-shadow: 1px 1px 9px 0px rgba(0, 0, 0, 0.42);
    -moz-box-shadow: 1px 1px 9px 0px rgba(0, 0, 0, 0.42);
}

.ans-block:hover {
    border: 5px solid rgb(160, 160, 160);
    background-color: rgb(236, 236, 236);
}

.ans-block:active {
    border: 5px solid rgb(160, 160, 160);
    background-color: rgb(236, 236, 236);
    width: 75%;
    height: 75%;
    transition: .8s cubic-bezier(.165, .84, .44, 1);
}

.selected-false-ans {
    border: 5px solid rgb(194, 52, 66) !important;
    background-color: rgb(252, 214, 218) !important;
}

.selected-true-ans {
    border: 5px solid rgb(52, 194, 66) !important;
    background-color: rgb(214, 252, 218) !important;
}

.ans-0 {
    background-color: rgb(192, 248, 250);
    border: 3px solid rgb(0, 190, 197);
}

.ans-1 {
    background-color: rgb(246, 192, 250);
    border: 3px solid rgb(165, 0, 177);
}

.ans-2 {
    background-color: rgb(250, 249, 192);
    border: 3px solid rgb(213, 210, 0);
}

.ans-3 {
    background-color: rgb(250, 223, 192);
    border: 3px solid rgb(255, 136, 0);
}

.component-fade-enter-active,
.component-fade-leave-active {
    transition: opacity .5s ease;
}

.component-fade-enter,
.component-fade-leave-to

/* .component-fade-leave-active до версии 2.1.8 */
    {
    opacity: 0;
}
</style>
