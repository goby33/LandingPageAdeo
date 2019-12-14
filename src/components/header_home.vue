<template>
    <div class="header" >
        <bare_navigation  />
        <div class="content">
            <h3 class="Le-carnet-de-sant-d" >Le carnet de santé digital de la maison</h3>
            <h4 class="description-produit">Un suivi personnalisé et une historisation complète de votre maison dans un espace 100% sécurisé.</h4>
            <buttonTOAccessHommy />
        </div>
    </div>
</template>

<script>
    import bare_navigation from  '@/components/nav'
    import buttonTOAccessHommy from "./buttonTOAccessHommy";
    export default {
        name: "header_home",
        components : {
            bare_navigation,
            buttonTOAccessHommy
        },
    }
</script>

<style scoped lang="scss">
    .header {
        width: 100%;
        height: 75vh;
        object-fit: contain;
        background-color: #00bdcc;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;

        .content {
            width: 55vw;
            height: 70%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
            position: absolute;
            top: 15%;

            .Le-carnet-de-sant-d {
                font-family: Roboto;
                font-size: 58px;
                font-weight: bold;
                line-height: 1.19;
                letter-spacing: 0.3px;
                text-align: center;
                color: #ffffff;
                margin: 0;
            }
            .description-produit {
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
                margin: 0;
            }





        }
    }

    @media only screen and (max-width: 600px) {
        .header {
            height: 80vh;

            .content {
                width: 100%;
                height: 90%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-evenly;
                position: absolute;
                bottom: 0px;
                padding: 5px;
                .Le-carnet-de-sant-d {
                    font-family: Roboto;
                    font-size: 44px;
                    font-weight: bold;
                    line-height: 1.19;
                    letter-spacing: 0.3px;
                    text-align: center;
                    color: #ffffff;
                    margin: 0px;
                }
                .description-produit {
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
                    margin: 0px;
                }


            }
        }
    }
</style>
