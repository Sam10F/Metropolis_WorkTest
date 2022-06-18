<template>
    <article class="authorArticle">
        <section class="authorHeader">
            <div class="authorInfoWrapper">
                <h4 class="authorName">{{ author.fullName }}</h4>
                <p>{{ author.role }}</p>
            </div>
            <AuthorProfilePicture :authorName="author.fullName" :pictureUrl="author.pictureUrl" />
        </section>
        <section class="authorBody">
            <ul class="authorAchievementsList">
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
        <section class="authorFooter">
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
.authorArticle {
    background-color: white;
    padding: 20px;
    width: 440px;
    text-align: left;
    box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.08), 0px 14px 28px rgba(0, 0, 0, 0.1);

    section:not(:last-child) {
        margin-bottom: 15px;
    }
}

.authorHeader {
    display: flex;
    justify-content: space-between;

    p {
        font-weight: 100;
        line-height: 20px;
        margin-top: 5px;
        margin-bottom: 0;
    }
}

.authorInfoWrapper {
    padding-right: 20px;
    .authorName {
        font-weight: 700;
        font-size: 20px;
        line-height: 25px;
        margin: 0;
    }
}

.authorAchievementsList {
    display: flex;
    justify-content: flex-start;
    margin: 0;
    padding: 0;
    list-style: none;

    li {
        margin-right: 15px;
    }

    strong {
        color: #00a0d2;
    }
}

.authorFooter {
    text-align: right;
    font-weight: 300;

    a {
        color: #00a0d2;
        text-decoration: none;
    }

    a::before {
        content: url("../assets/images/targetBlank.svg");
        vertical-align: top;
        padding-right: 5px;
    }
}
</style>
