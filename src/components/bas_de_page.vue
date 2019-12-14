<template>
    <div class="conteneur_footer">
        <div class="conteneur_button">
            <p>Commencez à prendre soin de votre habitat</p>
            <buttonTOAccessHommy />
        </div>
        <div class="footer">
            <div class="conteneur_texte">
                <div class="CGU">
                    <a href="cgu-hommy-app.pdf" target="_blank">CGU</a>
                </div>
                <div class="rond"></div>
                <div class="ML">
                    <a href="https://app.homebookplatform.com/#/menu/legal" target="_blank">Mentions légal</a>
                </div>
            </div>
    </div>

    </div>

</template>

<script>
    import buttonTOAccessHommy from "./buttonTOAccessHommy";
    export default {
        name: "footer",
        components : {
            buttonTOAccessHommy
        }
    }
</script>

<style scoped lang="scss">

    .conteneur_footer {
        width: 100%;
        height: auto;

        .footer {
                width: 100%;
                height: 54px;
                background-color: #006e80;
                display: flex;
                align-items: center;
                justify-content: center;

            .conteneur_texte {
                width: auto;
                display: flex;
                align-items: center;
                justify-content: center;

                .CGU, .ML {
                    a {
                        text-decoration: none;
                        font-family: Roboto;
                        font-size: 16px;
                        font-weight: bold;
                        font-style: normal;
                        font-stretch: normal;
                        line-height: normal;
                        letter-spacing: 0.1px;
                        color: #ffffff;
                    }
                }
                .rond {
                                    width: 10px;
                                    height: 10px;
                                    border-radius: 50%;
                                    background-color: white;
                                    margin: 0 10px 0 10px;
                                }
            }
        }

        .conteneur_button {
            width: 100%;
            height: 300px;
            background-color: #00bdcc ;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;

            p {
                width: 80%;
                text-align: center;
                font-family: Roboto;
                font-size: 24px;
                font-weight: bold;
                font-style: normal;
                font-stretch: normal;
                line-height: normal;
                color: #F1F2FB;
            }
        }
    }

</style>

