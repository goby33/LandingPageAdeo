<template>
    <div class="home">
        <headerHome />
        <section_2 />
        <section_3 />
        <section_footer />
    </div>

</template>

<script>
    import headerHome from '@/components/header_home'
    import section_2 from  '@/components/habitation_donnes'
    import section_3 from '@/components/fonctionnalite/index_fonctionnality'
    import  section_footer from '@/components/bas_de_page'

    export default {
        components : {
            headerHome , section_2 ,
            section_3 ,
            section_footer
        },
        name: "Home"
    }
</script>

<style scoped lang="scss">


</style>
