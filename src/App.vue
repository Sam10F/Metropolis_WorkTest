<template>
    <nav><router-link to="/">Exercise 1</router-link> |</nav>
    <router-view />
</template>

<style lang="scss">
@import url("https://9d0dd7a648345f19af83-877d2ecaf11b88d5e17327c758e17ef6.ssl.cf2.rackcdn.com/museo-sans-1.0.1/css/museo-sans.css");

#app {
    font-family: "MuseoSans";
    text-align: center;
    color: #2c3e50;
    background-color: #e5e5e5;
    height: 100vh;
    margin: 0;
    padding: 0;
}

nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
