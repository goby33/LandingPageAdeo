<template>
    <div class="tags">
        <img src=""  v-bind:src="url_image" class="Energy">
         {{ nom_tag }} {{ n }}</div>

</template>`

<script>
    export default {
        name: "tags_fonctionnalites",
        props: {
            url_image: {type: Object, default: null},
            nom_tag: {type: String , default: null},
            n: { type: Number , default: 0}
        },
    }
</script>

<style scoped>
    .tags {
        width: 100px;
        height: 100px;
        border:1px solid red;
    }
    .tags:hover {
         border:2px solid green;
     }


</style>


