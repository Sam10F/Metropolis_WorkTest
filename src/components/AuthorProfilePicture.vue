<template>
    <div class="authorImageWrapper">
        <img v-show="imgLoaded" :src="pictureUrl" alt="Author profile image" @load="onImgLoad" />
        <div v-show="!imgLoaded" class="initialsWrapper">
            <span>{{ getInitialsFromString(authorName) }}</span>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { getInitialsFromString } from "@/common/utils/getInitialsFromString";

interface IAuthorCard {
    imgLoaded: boolean;
}

export default defineComponent({
    name: "AuthorProfilePicture",
    setup() {
        return { getInitialsFromString };
    },
    props: {
        pictureUrl: { type: String, required: true },
        authorName: { type: String, required: true },
    },

    data(): IAuthorCard {
        return {
            imgLoaded: false,
        };
    },
    methods: {
        onImgLoad() {
            this.imgLoaded = true;
        },
    },
});
</script>

<style scoped lang="scss">
.authorImageWrapper {
    height: 70px;
    width: 70px;
    border-radius: 42px;
    border: 1px solid #e0e0e0;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
    }
}

.initialsWrapper {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
}
</style>
