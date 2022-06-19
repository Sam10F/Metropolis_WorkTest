<template>
    <section id="Exercise2" class="mainSection">
        <h4>
            Multi-level menu component<br /><small
                >To test it, go to the file 'Exercise2View.vue' and edit the object defaultTree</small
            >
        </h4>
        <div id="app">
            <MultiLevelMenu :nodes="tree.nodes" :depth="0" :label="tree.label"></MultiLevelMenu>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import MultiLevelMenu from "@/components/MultiLevelMenu.vue";

interface ITree {
    label: string;
    nodes?: ITree[];
}

const defaultTree: ITree = {
    label: "item0",
    nodes: [
        {
            label: "item1",
            nodes: [
                {
                    label: "item1.1",
                    nodes: [
                        {
                            label: "item1.1.1",
                        },
                    ],
                },
                {
                    label: "item1.2",
                    nodes: [
                        {
                            label: "item1.2.1",
                        },
                    ],
                },
            ],
        },
        {
            label: "item2",
        },
    ],
};

export default defineComponent({
    name: "Exercise2View",
    components: { MultiLevelMenu },
    data() {
        return {
            tree: defaultTree,
        };
    },
});
</script>
