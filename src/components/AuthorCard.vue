<template>
    <article class="author-article">
        <section class="author-header">
            <div class="author-info-wrapper">
                <h4 class="author-name">{{ author.fullName }}</h4>
                <p>{{ author.role }}</p>
            </div>
            <AuthorProfilePicture :author-name="author.fullName" :pictureUrl="author.pictureUrl" />
        </section>
        <section class="author-body">
            <ul class="author-achievementsList">
                <li>
                    <strong>{{ author.publications }}</strong> Publications
                </li>
                <li>
                    <strong>{{ author.views }}</strong> Views
                </li>
                <li>
                    <strong>{{ author.followers }}</strong> Followers
                </li>
            </ul>
        </section>
        <section class="author-footer">
            <a :href="author.profileUrl" target="_blank" title="Link to authors page">VIEW PROFILE</a>
        </section>
    </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import AuthorProfilePicture from "@/components/AuthorProfilePicture.vue";
import { IAuthor } from "../common/interfaces/author.interface";

export default defineComponent({
    name: "AuthorCard",
    components: { AuthorProfilePicture },
    props: {
        author: { type: Object as () => IAuthor, required: true },
        setDisplayedAuthor: { type: Function, required: true },
    },
});
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables";
.author-article {
    background-color: white;
    padding: 20px;
    width: 440px;
    text-align: left;
    box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.08), 0px 14px 28px rgba(0, 0, 0, 0.1);

    section:not(:last-child) {
        margin-bottom: 15px;
    }
}

.author-header {
    display: flex;
    justify-content: space-between;

    p {
        font-weight: 100;
        line-height: 20px;
        margin-top: 5px;
        margin-bottom: 0;
    }
}

.author-info-wrapper {
    padding-right: 20px;
    .author-name {
        font-weight: 700;
        font-size: 20px;
        line-height: 25px;
        margin: 0;
    }
}

.author-achievementsList {
    display: flex;
    justify-content: flex-start;
    margin: 0;
    padding: 0;
    list-style: none;

    li {
        margin-right: 15px;
    }

    strong {
        color: $custom-blue;
    }
}

.author-footer {
    text-align: right;
    font-weight: 300;

    a {
        color: $custom-blue;
        text-decoration: none;
    }

    a::before {
        content: url("../assets/images/targetBlank.svg");
        vertical-align: top;
        padding-right: 5px;
    }
}
</style>
