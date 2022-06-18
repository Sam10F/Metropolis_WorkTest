<template>
    <ul class="affiliationList">
        <li v-for="affiliation in affiliationList" :key="affiliation.id">
            <sup>{{ affiliation.id }}</sup
            >{{ affiliation.name }}, {{ affiliation.city }}, {{ affiliation.country }}
        </li>
    </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IAffiliation } from "@/common/interfaces/affiliation.interface";

export default defineComponent({
    name: "AffiliationList",
    props: {
        affiliationList: { type: Object as () => IAffiliation[], required: true },
    },
});
</script>

<style scoped lang="scss">
.affiliationList {
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: 18px;

    sup {
        font-weight: 500;
        margin-right: 5px;
    }

    li {
        height: 30px;
        line-height: 25px;
        font-weight: 100;
    }
}
</style>
