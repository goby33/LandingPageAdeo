<template>
    <div class="conteneur_horizontal_bare">
    <tagsHorizontal v-for="i in 6"
                    :class_tag="{'tags' : true , 'tags_animation_aller' : true , 'tags_border' : i-1 === VERSION_ACTUEL }"
                    :data="Information_tags[i-1]"
                    @click.native="udapte(i-1)"
                    />
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
    import tagsHorizontal from './tags-horizontal'
    export default {
        name: "horizontal_bare",
        computed: {
            ...mapGetters({Information_tags : 'getInformation_tags'  ,  VERSION_ACTUEL  : 'getVERSION_ACTUEL'})
        },
        components: {
            tagsHorizontal
        },

        data() {
            return {

            }
        },
        methods : {
            ...mapActions(['modifier_version_actuel']),
            udapte(position) {

                this.modifier_version_actuel({valeur_id : position})


            }
        }
    }
</script>

<style scoped lang="scss">
    .conteneur_horizontal_bare {
        width: 100%;
        height: 153px;
        background-color: #f1f8fb;
        display: flex;
        align-items: center;
        padding-left: 20px;
        overflow: auto;

        @for $i from 0 through 6 {
            .tags_animation_aller:nth-child(#{$i}) {
                animation-delay: 20*$i*1ms;
                animation-fill-mode: forwards;
                animation-name: animation_show_tags;
                animation-duration: 360ms;
            }
        }


        @keyframes animation_show_tags {
            0% {
                opacity: 0;
                 transform: translateY(200px);
            }
            100% {
                transform: translateY(0px);
                opacity: 1;
            }

        }


    }

    @media screen and (max-width: 600px) {
        .conteneur_horizontal_bare {
            overflow: auto;
        }
    }

</style>
