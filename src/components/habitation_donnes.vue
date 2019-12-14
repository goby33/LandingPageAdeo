<template>
    <div class="habitation_donnes">
        <div class="block_1">
            <div class="Vos-habitations-vos">Vos habitations, vos données !</div>

            <corps_de_page_engagement />
        </div>
        <div class="block_2">
            <img src="img/on-boarding-secured.svg" class="on-boarding-secured">
        </div>
    </div>
</template>

<script>
    import corps_de_page_engagement from "./corps_de_page_engagement";
    export default {
        name: "habitation_donnes",
        components : {
            corps_de_page_engagement
        }
    }
</script>

<style scoped lang="scss">
    .habitation_donnes {
        width: 100%;
        height:auto ;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 60px 20px 0px 20px;
        background-color:#F1F2FB;

        .block_1 {
            width: 55%;
            display: flex;
            flex-direction: column;
            align-items: center;

            .Vos-habitations-vos {
                width: 84%;
                font-family: Roboto;
                font-size: 42px;
                font-weight: bold;
                font-style: normal;
                font-stretch: normal;
                line-height: 1.08;
                letter-spacing: 0.2px;
                color: #032526;
                text-align: left;
                margin-bottom: 50px;
            }


            .corps_de_page {
                max-width: 100%;
                margin: 0px;
            }
        }
        .block_2 {
            width: 30%;
            .on-boarding-secured {
                width: 100%;
                object-fit: contain;
            }
        }
    }

    @media screen and (max-width: 414px) {
        .habitation_donnes {
            flex-direction: column;

            .block_1 {
                width: 100%;




            }
            .block_2 {
                width: 100%;
                .on-boarding-secured {
                    width: 100%;
                    object-fit: contain;
                }
            }
        }
    }
</style>
