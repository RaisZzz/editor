<template lang="pug">
    div.editor
        div.textInput(
            v-for="line in getWordLines"
            :key="line.id"
        )
            span.lineNumber {{ line.id }}
            input(
                type="text"
                :value="line.text"
                @keyup="updateLine(line.id)"
                ref="line"
            )
</template>

<script>
    export default {
        name: 'Editor',
        computed: {
            getWordLines(){
                return this.$store.getters.getWordLines;
            }
        },
        methods: {
            updateLine(id) {
                const text = this.$refs.line[id-1].value;
                this.$store.dispatch('updateLine', [id, text]);
            }
        }
    }
</script>

<style lang="sass" scoped>
    .textInput
        position: relative
        span
            position: absolute
            top: 50%
            left: 20px
            font-size: 18px
            color: #81ECEC
            font-weight: 700
            transform: translateY(-50%)
        input
            width: 100%
            padding: 5px 50px
            background: none
            border: none
            color: #fff
            font-weight: 400
            font-size: 18px
            outline: none
            transition: 0.5s
        input:focus
            background: rgba(0, 112, 137, 0.1)
</style>