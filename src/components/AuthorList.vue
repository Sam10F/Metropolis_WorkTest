<template>
    <div class="card" ref="form">
        <b class="listTitle">{{ title }}</b>
        <ul class="personList">
            <li v-for="author in authorList" :key="author.id">
                <u @click="(e) => changeDisplayedAuthor(e, { title: title, id: author.id })">{{ author.fullName }}</u
                ><sup>{{ author.publications }}</sup>
                <AuthorCard
                    class="authorCard"
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
    },
});
</script>
<style scoped lang="scss">
.listTitle {
    float: left;
}

.listTitle::after {
    content: "\00a0 ";
}

.personList {
    display: block;
    position: relative;
    padding: 0;
    margin: 0;
    line-height: 22px;
    font-weight: 300;
    top: -5px;

    li {
        display: inline-block;
    }

    li::after {
        content: ",\00a0 ";
    }
}

.personList > .personList > li:last-child::before {
    content: "and ";
}

.authorCard {
    position: absolute;
    z-index: 1;
}
</style>
