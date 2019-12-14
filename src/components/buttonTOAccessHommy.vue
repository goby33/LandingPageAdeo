<template>
    <div class="ButtonTOAccessHommy">
        <a href="https://app.homebookplatform.com/#/account-creation/email" target="_blank">
            <div class="buttonMobil">Accéder à Hommy</div>
        </a>
    </div>
</template>

<script>
    export default {
        name: "buttonTOAccessHommy"
    }
</script>

<style scoped lang="scss">
    .ButtonTOAccessHommy {
        width: 400px;
        .buttonMobil {
            width: 100%;
            height: 61px;
            border-radius: 38px;
            background-color: #ffffff;
            font-family: Roboto;
            font-size: 20px;
            font-weight: bold;
            font-style: normal;
            font-stretch: normal;
            line-height: 1.3;
            letter-spacing: 0.1px;
            text-align: center;
            color: #00bdcc;
            display: flex;
            align-items: center;
            justify-content: center;

        }

    }

    @media only screen and (max-width: 600px) {
        .ButtonTOAccessHommy {
            width: 80%;

        }

    }

</style>
