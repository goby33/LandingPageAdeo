<template>
    <div class="barreNavigation">
        <router-link to="/" class="Home">
            <img src="img/header-hommy.svg" class="Header-hommy">
        </router-link>
        <nav>
            <a href="https://app.homebookplatform.com/#/login" class="Connexion" target="_blank">Connexion</a>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "nav"
    }
</script>

<style scoped lang="scss">

    .barreNavigation {
        width: 100%;
        min-height: (33+17)*1px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-left: 18px;
        padding-right: 18px;
        position: absolute;


        .Header-hommy {
            width: 124px;
            height: 33px;
            object-fit: contain;
        }

        nav {
            width: auto;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            .Home {
                width: 44px;
                height: 19px;
                font-family: Roboto,sans-serif;
                font-size: 16px;
                font-weight: bold;
                font-style: normal;
                font-stretch: normal;
                line-height: normal;
                letter-spacing: 0.1px;
                color: #ffffff;
            }

            .Nos-engagements {
                width: 133px;
                height: 21px;
                opacity: 0.9;
                font-family: Roboto;
                font-size: 16px;
                font-weight: normal;
                font-style: normal;
                font-stretch: normal;
                line-height: normal;
                letter-spacing: 0.1px;
                color: #ffffff;
            }

            .Connexion {
                min-width: 111px;
                min-height: 34px;
                font-family: Roboto;
                font-size: 16px;
                font-weight: bold;
                font-style: normal;
                font-stretch: normal;
                line-height: 34px;
                letter-spacing: 0.1px;
                color: #00bdcc;
                border-radius: 17px;
                text-align: center;
                background-color: #ffffff;
            }

        }


    }
    @media only screen and (max-width: 414px) {
        .barreNavigation {
            .Home {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
            .Header-hommy {
                margin: auto;
            }
        }
            nav {
                display: none;
            }
        }
    }

</style>
