<template>
    <section id="Exercise1" class="mainSection" @click="setDisplayedAuthor({})">
        <MainLogo />
        <h1 class="mainTitle">Thank you for considering participating to this paper</h1>
        <article class="mainArticle">
            <section>
                <small class="articleNote">{{ type }}</small>
                <h2 class="articleIntro">
                    {{ title }}
                </h2>
            </section>
            <section>
                <AuthorList
                    :title="'Authors'"
                    :authorList="authors"
                    :setDisplayedAuthor="setDisplayedAuthor"
                    :displayedAuthor="displayedAuthor"
                />
            </section>
            <section class="editorSection">
                <AuthorList
                    v-if="editor"
                    :title="'Editor'"
                    :authorList="[editor]"
                    :setDisplayedAuthor="setDisplayedAuthor"
                    :displayedAuthor="displayedAuthor"
                />
                <AuthorList
                    v-if="yourself"
                    :title="'Yourself'"
                    :authorList="[yourself]"
                    :setDisplayedAuthor="setDisplayedAuthor"
                    :displayedAuthor="displayedAuthor"
                />
            </section>
            <section>
                <Collapsible title="Affiliations" :collapsibleHeight="affiliations.length * 30">
                    <AffiliationList :affiliationList="affiliations" />
                </Collapsible>
            </section>
            <footer>
                <h3 class="footerText">{{ journal }} | {{ section }}</h3>
            </footer>
        </article>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { IAuthor } from "@/common/interfaces/author.interface";
import { IDisplayedAuthor } from "@/common/interfaces/displayedAuthor.interface";
import { IAffiliation } from "@/common/interfaces/affiliation.interface";
import AuthorList from "@/components/AuthorList.vue";
import Collapsible from "@/components/Collapsible.vue";
import AffiliationList from "@/components/AffiliationList.vue";
import MainLogo from "@/components/MainLogo.vue";
import FrontiersChallengeService from "@/services/frontiersChallenge.service";

interface IArticleViewData {
    type: string;
    title: string;
    authors: IAuthor[];
    editor?: IAuthor;
    yourself?: IAuthor;
    affiliations: IAffiliation[];
    journal: string;
    section: string;
    displayedAuthor?: IDisplayedAuthor;
}

export default defineComponent({
    name: "Exercise1View",
    components: { AuthorList, Collapsible, AffiliationList, MainLogo },
    data(): IArticleViewData {
        return {
            type: "",
            title: "",
            authors: [],
            editor: undefined,
            yourself: undefined,
            affiliations: [],
            journal: "",
            section: "",
            displayedAuthor: undefined,
        };
    },

    async mounted() {
        this.type = await FrontiersChallengeService.getType();
        this.title = await FrontiersChallengeService.getTitle();
        this.authors = await FrontiersChallengeService.getAuthors();
        this.journal = await FrontiersChallengeService.getJournal();
        this.section = await FrontiersChallengeService.getSection();
        this.editor = await FrontiersChallengeService.getEditor();
        this.yourself = await FrontiersChallengeService.getYourself();
        this.affiliations = await FrontiersChallengeService.getAffiliations();
    },

    methods: {
        setDisplayedAuthor(displayedAuthor: IDisplayedAuthor) {
            this.displayedAuthor = displayedAuthor;
        },
    },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.mainTitle {
    font-size: 24px;
    font-weight: 700;
    line-height: 22px;
    margin-bottom: 25px;
}

.mainArticle {
    background-color: white;
    text-align: left;
    padding: 30px;
    margin: 0 auto;
    max-width: 659px;
    word-break: break-word;
}

.mainArticle section {
    margin-bottom: 15px;
}

.articleNote {
    color: #555555;
    font-size: 17px;
    font-weight: 100;
    line-height: 21px;
}

.articleIntro {
    font-size: 20px;
    font-weight: 700;
    line-height: 28px;
    margin: 0px;
}

.footerText {
    font-size: 15px;
    margin: 0;
}
</style>
