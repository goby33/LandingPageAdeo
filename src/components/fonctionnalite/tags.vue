<template>
    <div  class="conteneur_tag" >

        <div v-bind:class="class_Bandeaux">En savoir plus</div>
        <div class="tags"   >
            <img  v-bind:src="data_tag.url" class="Lock">
            <div class="Coffre-fort-numriqu">{{ data_tag.titre }}</div>
        </div>
        <div v-bind:class="class_pointeur">
            <div class="rond" ></div>
            <div class="trais"  ></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "tags",
        props: {
            data_tag : { type : Object , default : null },
            class_pointeur :  { type : [Object , String] , default : null},
            class_Bandeaux : { type : [Object , String] , default : null},

        },
    }

</script>

<style scoped lang="scss">
    .conteneur_tag {
        width: 141px;
        height: 141px;
        position: relative;
        z-index: 3;
        animation-duration: 100ms;
        animation-fill-mode: forwards;
        animation-timing-function: cubic-bezier(0.5, 0, 1, 1);


    .conteneur_texte , .conteneur_texte_droite{
        position: absolute;
        bottom: 0px;
        left: 0px;
        text-align: center;
        transform-origin: bottom left;
        transform: rotate(-90deg) translateY(20px);
        width: 100%;
        text-align: center;
        opacity: 1;
        text-transform: uppercase;
        color: #00bdcc;
        font-family: Roboto;
        transition: transform 0.3s;
        transition-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);
        z-index: -1;

    }

    .conteneur_texte_droite {
        transform: rotate(-90deg) translateY(-20px);
        transform-origin: top right;
        top: 0px;
        right: 0px;

    }
    .annimation_beandaux_droite {
        transform: rotate(-90deg) translateY(2px);
    }
        .annimation_beandaux_gauche {
            transform: rotate(-90deg) translateY(-2px);
        }
    .conteneur_fleche , .conteneur_fleche_droite {
        position: absolute;
        top:50%;
        left: 80%;
        display: flex;
        align-items: center;
        z-index: 2;

        .rond {
            width: 0px;
            height: 0px;
            border-radius: 50%;
            background-color: #032526;
            transition: width 0.3s;
            transition-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);
        }

        .trais {
            width: 0px;
            height: 2px;
            background-color: #00bdcc;
            transition: width 0.3s;
            transition-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);
        }
    }
    .conteneur_fleche_droite {
        transform: translateX(-100%) rotate(180deg);
        left: 25px;
    }
        .conteneur_fleche_annimation {

            .rond {
                width: 20px !important;
                height: 20px !important;
            }
            .trais {
                width: 300px !important;
                height: 2px !important;
            }
        }

    .tags {
        width: 141px;
        height: 141px;
        border-radius: 6px;
        box-shadow: 0 2px 6px 0 rgba(0, 40, 43, 0.2);
        background-color: #ffffff;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        cursor: pointer;

        div {
            font-family: Roboto;
            font-size: 14px;
            font-weight: bold;
            font-style: normal;
            font-stretch: normal;
            line-height: normal;
            letter-spacing: 0.1px;
            text-align: center;
            color: #032526;
        }

        .Coffre-fort-numriqu {
            width: 105px;
            height: 38px;
        }
    }
    }


    .conteneur_tag_annimation {
        animation-name: cacher_tags;
    }

    @keyframes cacher_tags {
        from {
            opacity: 1;
            transform: translateY(0px);
        }
        to {
            opacity: 0;
            transform: translateY(-20px);
        }
    }

    @media screen and (max-width: 1224px) {
        .conteneur_tag {
            .conteneur_fleche , .conteneur_fleche_droite {
                display: none;
            }
            .conteneur_texte_droite {
                display: none;
            }
        }
    }

</style>
