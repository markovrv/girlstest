<template>
<div id="app">
    <div class="row logo-line">
        <div class="col-sm-3 col-md-2">
            <img src="img/logo.png" class="logo">
        </div>
        <div class="col-sm-9 col-md-10 logo-text-container">
            <div v-if="page < 1" class="logo-text">
                Факультет компьютерных и физико-математических наук
            </div>
            <div v-if="page > 0" class="logo-text logo-text-left">
                {{headLine[0]}}
            </div>
            <div v-if="page > 0" class="logo-text logo-text-right">
                {{headLine[1]}}
            </div>
        </div>
    </div>

    <div class="content" :style="image">
        <transition name="component-fade" mode="out-in">
            <index v-if="page == 0" :key="page" />
            <about v-if="page == -1" :key="page" />
            <game v-if="page > 0" :key="page" />
            <result v-if="page == -2" :key="page" />
        </transition>
    </div>

</div>
</template>

<script>
export default {
    name: 'App',
    computed: {
        page() {
            return this.$store.state.activePage;
        },
        headLine() {
            if (this.page > 0)
                return this.$store.getters.getHeadLine;
            else
                return [];
        },
        image() {
            if (this.page > 0)
                return "background-image: url(img/" + this.$store.state.pages.content[this.page - 1].pics[0] + ")";
            return "";
        }
    },
    mounted() {
        this.$store.commit('genRandSays');
    }
}
</script>

<style>
body {
    margin: 0;
    background: rgb(255, 255, 255);
    background: linear-gradient(0deg, rgb(253, 230, 253) 0%, rgba(255, 255, 255, 1) 34%);
    min-height: calc(100vh - 40px);
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}

.logo-line {
    background: rgb(129, 150, 180);
    background: linear-gradient(315deg, rgba(129, 150, 180, 1) 0%, rgba(1, 166, 215, 1) 100%);
    min-height: 60px;
    margin-top: 40px;
    margin-right: 0 !important;
    text-align: center;
}

.logo {
    width: 120px;
    position: absolute;
    top: -30px;
    left: 40px;
}

.logo-text-container {
    display: flex;
    align-items: center;
    padding-right: 0 !important;
}

.logo-text {
    color: white;
    font-size: 1.55em;
    font-family: Arial;
    font-weight: bold;
    position: relative;
    line-height: 90%;
}

.logo-text-right {
    margin: auto 5px auto auto;
}

.content {
    min-height: calc(100vh - 130px);
    display: flex;
    align-items: center;
    background-position: center 10px;
    background-repeat: no-repeat;
}

.panel {
    text-align: center;
    width: 100%;
}

.title-pic {
    max-width: 300px;
}

.contentrow {
    margin: 0 auto !important;
    width: 75%;
    max-width: 700px;
}

.footer {
    position: fixed;
    bottom: 0;
}

.text-shadow {
    font-family: cursive;
    font-weight: bold;
    padding-top: 14px;
    padding-bottom: 20px;
    line-height: 90%;
    text-align: center;
    font-size: 4em;
    color: #af00a0;
    text-shadow: 0 1px 0 hsl(174, 5%, 80%), 0 2px 0 hsl(174, 5%, 75%), 0 3px 0 hsl(174, 5%, 70%), 0 4px 0 hsl(174, 5%, 66%), 0 5px 0 hsl(174, 5%, 64%), 0 6px 0 hsl(174, 5%, 62%), 0 7px 0 hsl(174, 5%, 61%), 0 8px 0 hsl(174, 5%, 60%), 0 0 5px rgba(0, 0, 0, .05), 0 1px 3px rgba(0, 0, 0, .2), 0 3px 5px rgba(0, 0, 0, .2), 0 5px 10px rgba(0, 0, 0, .2), 0 10px 10px rgba(0, 0, 0, .2), 0 20px 20px rgba(0, 0, 0, .3);
}

.avd_div {
    margin: 6px auto;
    padding: 0;
    text-align: center;
    display: block;
}

.bucn_4_r,
.bucn_4_r:before {
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -o-border-radius: 10px;
    border-radius: 10px;
}

.bucn_4_r {
    text-decoration: none;
    outline: none;
    display: inline-block;
    position: relative;
    padding: 10px 70px;
    font-size: 18px;
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
    overflow: hidden;
    letter-spacing: 2px;
    transition: .8s cubic-bezier(.165, .84, .44, 1);
    -webkit-box-shadow: 0 0 4px #999;
    -moz-box-shadow: 0 0 4px #999;
    -o-box-shadow: 0 0 4px #999;
    box-shadow: 0 0 4px #999;
    z-index: 1;
    color: #9e0e0e;
    background-color: #fff;
    background-image: linear-gradient(135deg, #b30213, #fff, #fff, #b30213);
    background-image: -o-linear-gradient(135deg, #b30213, #fff, #fff, #b30213);
    background-image: -moz-linear-gradient(135deg, #b30213, #fff, #fff, #b30213);
    background-image: -webkit-linear-gradient(135deg, #b30213, #fff, #fff, #b30213);
    background-image: -ms-linear-gradient(135deg, #b30213, #fff, #fff, #b30213);
    border: 1px solid #9e0e0e;
}

.bucn_4_r:before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 0;
    width: 100%;
    z-index: -1;
    color: #fff;
    transition: .8s cubic-bezier(.165, .84, .44, 1);
    background-color: #b30213;
    background-image: linear-gradient(135deg, #fff, #b30213, #b30213, #fff);
    background-image: -o-linear-gradient(135deg, #fff, #b30213, #b30213, #fff);
    background-image: -moz-linear-gradient(135deg, #fff, #b30213, #b30213, #fff);
    background-image: -webkit-linear-gradient(135deg, #fff, #b30213, #b30213, #fff);
    background-image: -ms-linear-gradient(135deg, #fff, #b30213, #b30213, #fff);
}

.bucn_4_r:hover:before {
    top: 0%;
    bottom: auto;
    height: 100%;
}

.bucn_4_r:hover,
.bucn_4_r:active {
    color: #fff;
    text-shadow: 0 1px 2px #333;
}

*::before,
*::after {
    box-sizing: border-box;
}

@media (max-width: 576px) {
    .logo {
        position: static;
        padding-top: 10px;
        width: 70px;
    }

    .logo-line {
        margin-top: 0;
        padding-bottom: 10px;
    }

    .logo-text-right {
        font-size: 1em;
    }

    .logo-text-left {
        padding-left: 5px;
        font-size: 1em;
    }

    .content {
        min-height: calc(100vh - 450px);
    }

    .text-shadow {
        padding-top: 6px;
        font-size: 3em;
    }

    .contentrow {
        width: 90%;
        max-width: 770px;
    }

    .title-pic {
        max-width: 150px;
    }

    body {
        min-height: 100vh;
    }
}

.component-fade-enter-active,
.component-fade-leave-active {
    transition: opacity .8s ease;
}

.component-fade-enter,
.component-fade-leave-to

/* .component-fade-leave-active до версии 2.1.8 */
    {
    opacity: 0;
}
</style>
