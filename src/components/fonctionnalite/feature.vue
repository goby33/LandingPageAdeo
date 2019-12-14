<template>
    <div class="conteneur_feature">
        <transition name="slide" mode="out-in" >
            <div :key="id"  >
                <h1   class="titre">{{ data_tag[id].titre }}</h1>
                <p     class="message"> {{ data_tag[id].message }}</p>
            </div>
        </transition>

    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {

        name: "feature",

        computed: {
            ...mapGetters({id: 'getVERSION_ACTUEL' , data_tag : 'getInformation_tags'})
        },

    }
</script>

<style scoped lang="scss">
    .conteneur_feature {
        width: 40vw;
        height: auto;
        position: absolute;
        top: 200px;
        left: 10vw;
        .titre {
            width: 100%;
            font-family: Roboto;
            font-size: 42px;
            font-weight: bold;
            font-style: normal;
            font-stretch: normal;
            line-height: 1.08;
            letter-spacing: 0.2px;
            color: #032526;
            margin: 0;
        }
        .message {
            width: 100%;
            height: auto;
            opacity: 0.8;
            font-family: Roboto;
            font-size: 20px;
            font-weight: normal;
            font-style: normal;
            font-stretch: normal;
            line-height: 1.5;
            letter-spacing: 0.1px;
            color: #032526;
            padding-top: 10px;
            margin: 0;
        }
    }



    .slide-enter-active {
        transition: all 260ms cubic-bezier(0, 0, 0.18, 1);
        transition-delay: 100ms;
    }
    .slide-leave-active {
        transition: all 100ms cubic-bezier(0.5, 0, 1, 1);
    }
    .slide-enter {
        transform: translateY(50px);
        opacity: 0;
    }
    .slide-leave-to
    {
        transform: translateY(-30px);
    }


    /*@media screen and (max-width: 600px) {*/
    /*    .conteneur_feature {*/
    /*        position: initial;*/
    /*        width: 90vw;*/
    /*        height: auto;*/
    /*        font-size: 16px;*/

    /*        .titre {*/
    /*            width: 100%;*/
    /*            margin: 0px;*/
    /*            font-size: 22px;*/
    /*        }*/

    /*        .message {*/
    /*            width: 100%;*/
    /*            font-size: 16px;*/
    /*            margin: 0px;*/
    /*        }*/
    /*    }*/
    /*}*/


</style>
