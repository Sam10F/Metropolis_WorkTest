<template>
    <article class="collapsible" :class="{ open: open }" :style="cssProps">
        <span class="collapsibleTitle" @click="toggleCollapsible">{{ title }}</span>
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
.collapsibleTitle {
    position: relative;
    padding-right: 30px;
    color: #00a0d2;
}

.collapsibleTitle::after {
    content: "";
    border: solid #00a0d2;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 3px;
    position: absolute;
    right: 0.75rem;
    top: 9px;
    transition: 0.2s ease-in-out;
    transform: translateY(-48%) rotate(45deg);
}

.collapsibleContainer {
    transition: 0.5s ease-in-out;
    overflow: hidden;
    height: 0;
}

.collapsible.open {
    .collapsibleTitle::after {
        transform: translateY(0%) rotate(-135deg);
    }

    .collapsibleContainer {
        height: var(--collapsible-height);
    }
}
</style>
