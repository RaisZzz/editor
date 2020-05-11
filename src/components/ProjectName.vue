<template lang="pug">
    input(
        type="text"
        :value="getProjectName"
        @keypress="updateProjectName"
        ref="projectName"
    )
</template>

<script>
    export default {
        name: 'ProjectName',
        computed: {
            getProjectName(){
                return this.$store.getters.getProjectName
            }
        },
        methods: {
            updateProjectName() {
                const name = this.$refs.projectName.value;
                this.$store.dispatch('updateProjectName', name);
            }
        }
    }
</script>

<style lang="sass" scoped>
    input
        color: #fff
        margin-top: 20px
        margin-bottom: 20px
        font-weight: 900
        background: none
        border: none
        text-align: center
        width: 100%
        font-size: 30px
        text-decoration: underline
        outline: none
</style>