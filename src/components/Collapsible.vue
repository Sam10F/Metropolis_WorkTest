<template>
    <article class="collapsible" :class="{ dropdownIconOpen: open }" :style="cssProps">
        <span class="collapsibleTitle dropdownIconLabel" @click="toggleCollapsible">{{ title }}</span>
        <div class="collapsibleContainer">
            <slot></slot>
        </div>
    </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "CustomCollapsible",
    props: {
        title: { type: String, required: true },
        collapsibleHeight: { type: Number, required: true },
    },
    data() {
        return {
            open: false,
        };
    },
    computed: {
        cssProps() {
            return {
                "--collapsible-height": String(this.collapsibleHeight) + "px",
            };
        },
    },
    methods: {
        toggleCollapsible() {
            this.open = !this.open;
        },
    },
});
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables";
@import "@/assets/styles/dropdownIcon";
.collapsibleTitle {
    position: relative;
    padding-right: 30px;
    color: $custom-blue;
}

.collapsibleContainer {
    transition: 0.5s ease-in-out;
    overflow: hidden;
    height: 0;
}

.collapsible.dropdownIconOpen {
    .collapsibleContainer {
        height: var(--collapsible-height);
    }
}
</style>
