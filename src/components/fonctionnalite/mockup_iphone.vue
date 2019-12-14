<template>
    <div class="Mockup-feature" ref="conteneur_sprite">
        <div class="conteneur_ecran_iphone">
            <img src="img/Sprite desktop.png" alt="image_cadre" ref="sprite">

        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {

        name: "mockup_iphone",
        computed: {
            ...mapGetters({id: 'getVERSION_ACTUEL' })
        },
        mounted() {
            this.udapteTranslate()
        },
        watch : {
            id() {
                this.udapteTranslate()
            }
        },
        methods : {
            udapteTranslate() {
                this.$refs.sprite.style.transform = 'translateX('+-254*(this.id)+'px)';
            }
        }
    }
</script>

<style scoped lang="scss">
    $longueur_mockup-feature : 290;
    $hauteur_mockup-feature : 597;
    .Mockup-feature {
        width: $longueur_mockup-feature*1px;
        height:$hauteur_mockup-feature*1px;
        background: url("../../../public/img/Mockup feature.svg") no-repeat ;
        position: relative;
        transition: all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);

        .conteneur_ecran_iphone {
            width: 254px;
            height: 452px;
            position: absolute;
            top: 73px;
            left: 19px;
            overflow: hidden;

            img {

                transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
                transition : transform 0.3s ;
            }

        }
    }

</style>
