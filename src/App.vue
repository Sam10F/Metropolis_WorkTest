<template>
    <img alt="Vue logo" src="./assets/images/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "./components/HelloWorld.vue";

@Options({
    components: {
        HelloWorld,
    },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import url("https://9d0dd7a648345f19af83-877d2ecaf11b88d5e17327c758e17ef6.ssl.cf2.rackcdn.com/museo-sans-1.0.1/css/museo-sans.css");

#app {
    font-family: "MuseoSans";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
