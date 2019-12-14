<template>
<div class="conteneur_second_block">
        <horizontalBarre
                           v-bind:class="{'barre_horizontal' : true ,
                            'barre_horizontal_show' : !boolean_animation,
                             'barre_horizontal_hide' : boolean_animation }"
                           />
    <mockup_iphone  class="Mockup-feature_on"/>
    <feature  />
    <croix  @click.native="close"/>
</div>
</template>

<script>

    import horizontalBarre from './horizontal_bare'
    import mockup_iphone from './mockup_iphone'
    import feature from './feature'
    import croix from './croix'
    export default {
        name: "second_block",
        components : {
            horizontalBarre,
            mockup_iphone,
            feature,
            croix
        },
        model: {
            props :"show_firstblock" ,
            event : "show_firstblock"
        },
        props : {
            boolean_animation : { type : Boolean , default : false}
        },

        data() {
            return {

            }
        },
        methods : {
            close() {
                this.$emit('show_firstblock' , true)
            }
        }



    }
</script>

<style scoped lang="scss">
    .conteneur_second_block {
        width: 100%;
        min-height: 100vh;
        position: relative;
        background-color: white;


        .barre_horizontal {
            position: absolute;
            bottom: 0px;
            left: 0px;
            transform: translateY(153px);
            opacity: 0;
            animation-fill-mode : forwards;
        }

        .Mockup-feature {
            animation-name: animation_aller_mockup;
            animation-duration: 360ms;
            animation-fill-mode: forwards ;
            animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);

        }

        @keyframes animation_aller_mockup {
            0% {
                transform: scale(1) translate(50vw , 0px);
            }
            100% {
                transform: scale(0.9) translate(80vw , 50px);
            }
        }
    }

    .barre_horizontal_show {
        animation-name: annimation_barre_hrizontal;
        animation-duration: 360ms;
        animation-timing-function: cubic-bezier(0, 0, 0.18, 1);

    }
    .barre_horizontal_hide {
        animation-name: annimation_barre_hrizontal;
        animation-timing-function: cubic-bezier(0.5, 0, 1, 1);
        animation-duration: 100ms;
        animation-direction: reverse;

    }

    @keyframes annimation_barre_hrizontal {
         0% {
             opacity: 0;
             border:0px solid transparent;
             transform: translateY(153px);
         }
        100% {
            opacity: 1;
            transform: translateY(0px);
        }
    }



    .croix_tags_features {
        position: absolute;
        top: 10vh;
        left: 10vw;
    }






    /* iphone X */
    @media only screen and (max-width: 375px)   and (max-height: 812px) {

        .conteneur_second_block {
            .Mockup-feature {
                animation: none;
                margin: auto;
                transform: scale(0.6) translateY(-180px);
            }
            .conteneur_feature {
                width: 120%;
                transform: scale(0.7) translate(-100px , 230px);
            }

        }
    }

    /* iphone 6/7 */
    @media only screen and (max-width: 414px)   and (max-height: 736px) {

        .conteneur_second_block {
            .Mockup-feature {
                animation: none;
                margin: auto;
                transform: scale(0.5) translateY(-250px);
            }
            .conteneur_feature {
                width: 140%;
                transform: scale(0.6) translate(-200px , 180px);
            }

        }
    }

    /* iphone 5 / SE */
    @media only screen and (max-width: 320px)   and (max-height: 568px) {

        .conteneur_second_block {
            .Mockup-feature {
                animation: none;
                margin: auto;
                transform: scale(0.4) translateY(-400px);
            }
            .conteneur_feature {
                width: 170%;
                transform: scale(0.5) translate(-270px , 30px);
            }

        }
    }

    /* ipad PRO */
    @media only screen and  (max-width: 1025px)   and (max-height: 1366px)  and (min-width: 1024px)   and (min-height: 1365px){

        .conteneur_second_block {
            .Mockup-feature {
                animation: none;
                margin: auto;
                transform: scale(1.3) translateY(100px);
            }
            .conteneur_feature {
                width: 80%;
                transform: scale(1.2) translate(0px ,600px);
            }

        }
    }

    /* IPAD */
    @media only screen and  (max-width: 768px)   and (max-height: 1024px)  and (min-width: 765px)   and (min-height: 1023px){

        .conteneur_second_block {
            .Mockup-feature {
                animation: none;
                margin: auto;
                transform: scale(0.9) translateY(-10px);
            }
            .conteneur_feature {
                width: 80%;
                transform: scale(1) translate(0px ,400px);
            }

        }
    }




</style>
