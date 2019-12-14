<template>
    <div class="corps_de_page">
        <section class="conteneur">

            <section class="line">
                <div class="contneeur_img"><img  src="img/secure-picto.svg" class="Secure-picto"></div>
                <div class="Cest-votre-espace"> C’est votre espace, personne à part vous ne peut y accéder sans votre accord explicite.</div>
            </section>

            <section class="line">
                <div class="contneeur_img"><img src="img/share-picto.svg" class="Share-picto"></div>
                <div class="Actuellement-vous-po"> Partagez votre habitation avec un tiers qui accédera à toute ses informations. Il pourra alors compléter tous ses détails ou ses documents, sans pour autant pouvoir la supprimer. </div>
            </section>

        </section>

    </div>
</template>

<script>
    export default {
        name: "corps_de_page_engagement"
    }
</script>

<style scoped lang="scss">

    .corps_de_page {
        width: 750px;
        height: auto;
        margin:auto;
        display: flex;
        flex-direction: column;
        margin-top: 130px;
        margin-bottom: 140px;


            .Votre-confidentialit {
                width: auto;
                font-family: Roboto;
                font-size: 42px;
                font-weight: bold;
                font-style: normal;
                font-stretch: normal;
                line-height: 1.08;
                letter-spacing: 0.2px;
                color: #032526;
                padding-left: 10px;
                padding-right: 10px;
        }

        .conteneur {
            display: flex;
            flex-direction: column;
            .line {
                display: flex;
                margin-bottom: 48px;
                height: auto;

                .contneeur_img {

                    width: 70px;

                    .Secure-picto {
                        width: 32px;
                        height: 38px;
                        object-fit: contain;
                    }

                    .Share-picto {
                        width: 34px;
                        height: 25px;
                        object-fit: contain;
                    }

                    .Confiance-picto {
                        width: 42px;
                        height: 28px;
                        object-fit: contain;
                    }
                }



                .Cest-votre-espace {
                    width: 641px;
                    height: 60px;
                    opacity: 0.8;
                    font-family: Roboto;
                    font-size: 20px;
                    font-weight: normal;
                    font-style: normal;
                    font-stretch: normal;
                    line-height: 1.5;
                    letter-spacing: 0.1px;
                    color: #032526;
                }

                .Actuellement-vous-po {
                    width: 641px;
                    height: 120px;
                    opacity: 0.8;
                    font-family: Roboto;
                    font-size: 20px;
                    font-weight: normal;
                    font-style: normal;
                    font-stretch: normal;
                    line-height: 1.5;
                    letter-spacing: 0.1px;
                    color: #032526;
                }

                .Les-partenaires-de-H {
                    width: 641px;
                    height: 210px;
                    opacity: 0.8;
                    font-family: Roboto;
                    font-size: 20px;
                    font-weight: normal;
                    font-style: normal;
                    font-stretch: normal;
                    line-height: 1.5;
                    letter-spacing: 0.1px;
                    color: #032526;
                }
            }
        }
    }

    @media only screen and (max-width: 414px) {
        .corps_de_page {
            width: 100%;
            .Votre-confidentialit {
                width: 100%;
                height: auto;
                padding : 0 20px 0 20px ;
            }

            .conteneur {

                .line {
                    display: flex;
                    padding: 0 20px 0 10px;

                    .contneeur_img {

                        width: 70px;
                        padding: 10px;

                        .Secure-picto {
                            width: 32px;
                            height: 38px;
                            object-fit: contain;
                        }

                        .Share-picto {
                            width: 34px;
                            height: 25px;
                            object-fit: contain;
                        }

                        .Confiance-picto {
                            width: 42px;
                            height: 28px;
                            object-fit: contain;
                        }
                    }



                    .Cest-votre-espace {
                        width: 641px;
                        height: auto;
                    }

                    .Actuellement-vous-po {
                        width: 641px;
                        height: auto;

                    }

                    .Les-partenaires-de-H {
                        width: 641px;
                        height: auto;

                    }
                }
            }
        }
    }

</style>
