<template>
    <div class="conteneur_fonctionnalites" id="encre_haut_fonctionnalite">
        <a href="#encre_haut_fonctionnalite" ref="encre_haut_fonctionnalite" ></a>
        <p class="titre_fonctionnalite"  v-show="show_firstblock" >Fonctionnalités</p>
        <transition  name="annimation" mode="out-in">
            <firstblock v-if="show_firstblock "  key="first_block-P" v-model="show_firstblock"  />
            <secondblock v-else key="second_block_p" :afficher="show_firstblock" v-model="show_firstblock"/>
        </transition>

    </div>

</template>

<script>

    import firstblock from './first_block'
    import secondblock from './second_block'
    export default {
        name: "index",
        components: {
            firstblock,
            secondblock
        },
        data() {
            return {
                show_firstblock : true
            }
        },
        watch : {
            show_firstblock : function(newValue , oldValue) {
                if (newValue === false) {
                    this.$refs.encre_haut_fonctionnalite.click()
                    document.body.style.overflowY = 'hidden';
                }
                else {
                    document.body.style.overflowY = 'scroll';
                }
            }
        },
        methods : {

        }



    }
</script>

<style scoped lang="scss">
    .conteneur_fonctionnalites {
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        flex-direction: column;
        .titre_fonctionnalite {
            width: 100%;
            height: 45px;
            font-family: Roboto;
            font-size: 42px;
            font-weight: bold;
            font-style: normal;
            font-stretch: normal;
            line-height: 1.08;
            letter-spacing: 0.2px;
            text-align: center;
            color: #032526;
        }
    }

    .annimation-enter-active, .annimation-leave-active {
        transition: all .1s ease;
    }
    .annimation-enter, .annimation-leave-to {
        transform: translateY(50px);
        opacity: 0;
    }



    /* ipad pro */
    @media only screen and  (max-width: 1025px)   and (max-height: 1366px)  and (min-width: 1024px)   and (min-height: 1365px){
        .conteneur_fonctionnalites {
            padding-top: 200px;
        }
    }

</style>
