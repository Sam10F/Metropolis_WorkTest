<template>
    <article class="collapsible" :class="{ 'dropdown-icon-open': open }" :style="cssProps">
        <span class="collapsible-title dropdownIcon-label" @click="toggleCollapsible">{{ title }}</span>
        <div class="collapsible-container">
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
.collapsible-title {
    position: relative;
    padding-right: 30px;
    cursor: pointer;
    color: $custom-blue;
}

.collapsible-container {
    transition: 0.5s ease-in-out;
    overflow: hidden;
    height: 0;
}

.collapsible.dropdown-icon-open {
    .collapsible-container {
        height: var(--collapsible-height);
    }
}
</style>
