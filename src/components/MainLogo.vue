<template>
    <div class="mainLogoContainer">
        <div class="documentsContainer">
            <img alt="Main logo document 1" class="document1" src="@/assets/images/document.svg" />
            <img alt="Main logo document 2" class="document2" src="@/assets/images/document.svg" />
            <img alt="Main logo document 3" class="document3" src="@/assets/images/document.svg" />
            <img alt="Main logo green tick" class="greenTick" src="@/assets/images/greenTick.png" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "MainLogo",
});
</script>

<style scoped lang="scss">
.mainLogoContainer {
    position: relative;
    width: 120px;
    height: 90px;
    margin: 0 auto;
    border-bottom: 4px solid black;
    animation: containerAnimation 0.5s normal;
    overflow: hidden;
}

.documentsContainer {
    position: absolute;
    display: flex;
    width: 74px;
    height: 80px;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;

    img:not(.greenTick) {
        position: absolute;
        height: 60px;
        width: 50px;
        bottom: -60px;
    }

    .document1 {
        left: 0;
        z-index: 1;
        animation: document1 0.5s forwards 0.5s;
    }

    .document2 {
        left: 12px;
        z-index: 2;
        animation: document2 0.5s forwards 1s;
    }

    .document3 {
        right: 0;
        z-index: 3;
        animation: document3 0.5s forwards 1.5s;
    }

    .greenTick {
        opacity: 0;
        z-index: 4;
        position: absolute;
        width: 30px;
        top: 47px;
        right: -14px;
        animation: greenTick 0.5s forwards 2s;
    }
}

@keyframes containerAnimation {
    from {
        width: 0px;
    }
    to {
        width: 130px;
    }
}

@keyframes document1 {
    from {
        bottom: -60px;
    }
    to {
        bottom: -15px;
    }
}

@keyframes document2 {
    from {
        bottom: -60px;
    }
    to {
        bottom: -10px;
    }
}

@keyframes document3 {
    from {
        bottom: -60px;
    }
    to {
        bottom: -5px;
    }
}

@keyframes greenTick {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
</style>
