<template>
    <div  v-bind:class="class_tag" >
        <img  v-bind:src="data.url" class="Lock">
        <div class="Coffre-fort-numriqu">{{ data.titre }}</div>
    </div>
</template>

<script>
    export default {
        name: "tags-horizontal",
        props : {

            data : { type: Object , default : null},
            class_tag : { type: [Object  , String] , default: null}
        },
        methods : {

        }
    }
</script>

<style scoped lang="scss">
    .tags {
        min-width: 113px;
        min-height: 113px;
        border-radius: 4.8px;
        box-shadow: 0 3px 6px 0 rgba(0, 40, 43, 0.2);
        background-color: #ffffff;
        padding-top: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        margin-right: 28px;
        opacity: 0;
        cursor: pointer;



        div {
            min-width: 90.6px;
            min-height: 30px;
            font-family: Roboto;
            font-size: 12px;
            font-weight: bold;
            font-style: normal;
            font-stretch: normal;
            line-height: normal;
            letter-spacing: 0.1px;
            text-align: center;
            color: #032526;

        }
    }
    .tags:hover {
        border: solid 2px #00bdcc;
        background-color: #ffffff;
    }
    .tags_border {
        border: solid 2px #00bdcc;
        background-color: #ffffff;
    }

    .tags_annimation_aller {
        animation-duration: 360ms;
        animation-timing-function: cubic-bezier(0, 0, 0.18, 1);
        animation-name: afficher_tags_horizontaux;

        @for $i from 1 through 6 {
            &:nth-child(#{$i}) {
                animation-delay: (20*$i)*1ms;
            }
        }

    }
    .tags_annimation_retour {
        animation-duration: 100ms;
        animation-timing-function: cubic-bezier(0.5, 0, 1, 1);
        animation-delay : 0s;
        animation-name: hide_tags_horizontaux;
    }
    @keyframes afficher_tags_horizontaux {
        from {
            transform: translateY(200px);
            opacity: 1;
        }
        to {
            transform: translateY(0px);
            opacity: 1;
        }

    }

    @keyframes hide_tags_horizontaux {
        from {
            transform: translateY(0px);
            opacity: 1;
        }
        to {
            transform: translateY(200px);
            opacity: 0;
        }
    }



</style>
