<template>
    <div class="croix_tags_features"
         ref="croix_tags_features">
        <span></span>
    </div>
</template>

<script>
    export default {
        name: "croix"
    }
</script>

<style scoped lang="scss">
    .croix_tags_features {
        $dimention_croix: 30;
        width: $dimention_croix*1px;
        height: $dimention_croix*1px;

        transform: rotate(45deg);
        cursor: pointer;


        span , span::before{
            width: 100%;
            height: 1px;
            display: block;
            background-color: gray;
            transform: translateY(($dimention_croix/2)*1px);
        }
        span::before {
            content: '';
            transform:  rotate(90deg);
        }
    }

</style>
