<template>
    <div class="multi-level-menu">
        <div class="label-wrapper" @click="toggleChildren">
            <div :style="indent" :class="labelClasses">
                <span class="label" :class="{ dropdownIconLabel: nodes && nodes.length }">{{ label }}</span>
            </div>
        </div>
        <div v-if="showChildren">
            <MultiLevelMenu
                v-for="(node, index) in nodes"
                :key="index"
                :nodes="node.nodes || []"
                :label="node.label || ''"
                :depth="(depth || 0) + 1"
            >
            </MultiLevelMenu>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface IExercise2ViewData {
    showChildren: boolean;
}

export default defineComponent({
    name: "MultiLevelMenu",
    props: {
        label: { type: String, required: false },
        nodes: { type: Object, required: false },
        depth: { type: Number, required: false },
    },
    data(): IExercise2ViewData {
        return {
            showChildren: false,
        };
    },
    computed: {
        labelClasses() {
            return { "has-children": this.nodes, dropdownIconOpen: this.showChildren };
        },
        indent() {
            return { transform: `translate(${(this.depth || 0) * 50}px)` };
        },
    },
    methods: {
        toggleChildren() {
            this.showChildren = !this.showChildren;
        },
    },
});
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables";
@import "@/assets/styles/dropdownIcon";

body {
    font-family: "Open Sans", sans-serif;
    font-size: 18px;
    font-weight: 300;
    line-height: 1em;
}

.container {
    width: 300px;
    margin: 0 auto;
}

.multi-level-menu {
    color: $custom-blue;
    .label-wrapper {
        padding-bottom: 10px;
        margin-bottom: 10px;
        .has-children {
            cursor: pointer;
        }

        .label {
            position: relative;
            padding-right: 30px;
        }
    }
}
</style>
