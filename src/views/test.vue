<template>
    <div class="test">
        <div class="carre" ref="carre"></div>
        <button v-on:click="aller">Aller</button> <button v-on:click="retour">Retour</button>

        <input type="number" v-model="nbre">
        <h1>{{ nbre }}</h1>
        <div id="example-2">
            <button @click="show = !show">Permuter l'affichage</button>
            <transition name="bounce" v-for="i in 5">
                <p   v-show="nbre == i && show === true" >{{ nom_tag[i-1] }}</p>
            </transition>
        </div>
    </div>
</template>



<script>
    import tags_fonctionnalites from '@/components/tags_fonctionnalites'
    export default {

        name: "test",
        components : {
            tags_fonctionnalites
        },
        data() {
            return {
                show : false,
                nbre : 1,
                url_image : ['img/lock.svg', 'img/calendar.svg' , 'img/energy.svg' , 'img/couleur-de-l-icon.svg' , 'img/couleur-de-l-icon.svg' ],
                nom_tag : ['coffre fort numerique', 'calendrier de l habitation' , 'suivi des consomation' , 'gestions des documents']

            }


        },
        methods : {
            aller() {
                this.$refs.carre.classList.add('carre_aller')
                this.$refs.carre.classList.remove('carre_retour')
            },
            retour() {
                this.$refs.carre.classList.add('carre_retour')
                this.$refs.carre.classList.remove('carre_aller')
            }
        }
    }
</script>

<style scoped lang="scss">
    .test {
        padding: 10px;
        .carre {
            width: 200px;
            height: 200px;
            background-color: rosybrown;
            animation-duration: 2s;
            animation-fill-mode: forwards;
        }
        .carre_aller {
            animation-name: annimation_aller;
        }
        .carre_retour {
            animation-name: annimation_retour;
        }

        @keyframes annimation_aller {
            0% {
                border-radius: 0px;
            }
            50% {
                border-radius: 25%;
                transform: translate(600px, 200px);
            }
            100% {
                border-radius: 100%;
                transform: translate(1200px, 0px);
            }

        }

        @keyframes annimation_retour {
            from {
                border-radius: 100%;
                transform: translate(1400px, 0px);
            }
            to {
                border-radius: 0px;
                transform: translate(0px, 0px);

            }
        }
    }

    p {
        font-size: 30px;

    }


    .bounce-enter-active {
        transition: all 260ms cubic-bezier(0, 0, 0.18, 1);
        transition-delay: 100ms;
    }
    .bounce-leave-active {
        transition: all 100ms cubic-bezier(0.5, 0, 1, 1);
    }
    .bounce-enter {
        transform: translateY(200px);
        opacity: 0;
    }
    .bounce-leave-to
    {
        transform: translateY(-30px);
    }


</style>


<style>
    .header {
        width: 100%;
        height: 75vh;
        object-fit: contain;
        background-color: #00bdcc;
        display: flex;
        align-items: center;
        flex-direction: column;

    .content {
        width: 70vw;
        margin: auto;

    .Le-carnet-de-sant-d {
        width: 100%;
        font-family: Roboto;
        font-size: 58px;
        font-weight: bold;
        line-height: 1.19;
        letter-spacing: 0.3px;
        text-align: center;
        color: #ffffff;
    }

    .description-produit {
        width: 100%;
        height: 72px;
        opacity: 0.8;
        font-family: Roboto;
        font-size: 22px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.64;
        letter-spacing: 0.1px;
        text-align: center;
        color: #ffffff;
    }

    .block_store {
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;

    .DISPONIBLE-SUR {
        width: 126px;
        height: 19px;
        font-family: Roboto;
        font-size: 16px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: 0.1px;
        text-align: center;
        color: #ffffff;
    }

    .Badge-appstore {
        width: 119px;
        height: 42px;
        object-fit: contain;
    }

    .Badge-playstore {
        width: 119px;
        height: 42px;
        object-fit: contain;
    }


    }
    }

    }

    @media only screen and (max-width: 600px) {

        .header {
        .content {
            border: 1px solid red;
            min-width: 70vw;
            margin: auto;
        .Le-carnet-de-sant-d {
            width: 366px;
            height: 136px;
            font-size:42px;
            line-height: 1.08;
            letter-spacing: 0.2px;
        }

        .description-produit {
            width: 366px;
            height: 96px;
            opacity: 0.8;
            font-size: 16px;
            line-height: 1.5;
            letter-spacing: 0.1px;
        }

        .block_store {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;

        .DISPONIBLE-SUR {
            width: 126px;
            height: 19px;
            font-family: Roboto;
            font-size: 16px;
            font-weight: bold;
            font-style: normal;
            font-stretch: normal;
            line-height: normal;
            letter-spacing: 0.1px;
            text-align: center;
            color: #ffffff;
        }

        .Badge-appstore {
            width: 119px;
            height: 42px;
            object-fit: contain;
        }

        .Badge-playstore {
            width: 119px;
            height: 42px;
            object-fit: contain;
        }


    }
    }

    }
    }
</style>



