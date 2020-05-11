<template>
    <div id="app">
        <ProjectName />
        <Editor />
    </div>
</template>

<script>
    import ProjectName from "./components/ProjectName";
    import Editor from "./components/Editor";
    export default {
        name: 'App',
        components: {
            ProjectName,
            Editor
        }
    }
</script>

<style>
    * {
        padding: 0;
        margin: 0;
        text-decoration: none;
        list-style: none;
        box-sizing: border-box;
    }
    body{
        font-family: 'Montserrat', sans-serif;
    }
    #app {
        height: 100vh;
        background: #2D3436;
    }
</style>
