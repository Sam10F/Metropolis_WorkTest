<template>
    <div class="card" ref="form">
        <b class="list-title">{{ title }}</b>
        <ul class="person-list">
            <li v-for="author in authorList" :key="author.id">
                <u @click="(e) => changeDisplayedAuthor(e, { title: title, id: author.id })">{{ author.fullName }}</u
                ><sup>{{ affiliationsToSuperindex(author.affiliations) }}</sup>
                <AuthorCard
                    class="author-card"
                    v-if="displayedAuthor && displayedAuthor.title === title && author.id === displayedAuthor.id"
                    :author="author"
                    :setDisplayedAuthor="setDisplayedAuthor"
                />
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import AuthorCard from "./AuthorCard.vue";
import { IDisplayedAuthor } from "../common/interfaces/displayedAuthor.interface";
import { IAuthor } from "../common/interfaces/author.interface";
import { IAffiliation } from "@/common/interfaces/affiliation.interface";

export default defineComponent({
    name: "AuthorList",
    components: { AuthorCard },
    props: {
        title: { type: String, required: true },
        authorList: { type: Object as () => IAuthor[], required: true },
        displayedAuthor: { type: Object as () => IDisplayedAuthor, required: false },
        setDisplayedAuthor: { type: Function, required: true },
    },
    methods: {
        changeDisplayedAuthor(event: Event, displayedAuthor: IDisplayedAuthor) {
            event.stopPropagation();
            this.setDisplayedAuthor(displayedAuthor);
        },

        affiliationsToSuperindex(affiliations?: IAffiliation[]): string {
            return (affiliations || []).map((affiliation) => affiliation.id).join(",");
        },
    },
});
</script>
<style scoped lang="scss">
.list-title {
    float: left;
}

.list-title::after {
    content: "\00a0 ";
}

.person-list {
    display: block;
    position: relative;
    padding: 0;
    margin: 0;
    line-height: 22px;
    font-weight: 300;
    top: -5px;

    u {
        cursor: pointer;
    }

    li {
        display: inline-block;
    }

    li:not(:last-child)::after {
        content: ",\00a0 ";
    }
}

.person-list > li:not(:first-child):last-child::before {
    content: "and ";
}

.author-card {
    position: absolute;
    z-index: 1;
}
</style>
