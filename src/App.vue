<template>
    <div id="app" class="bg-white w-full font-sans antialiased">
        <div class="border-b flex justify-between items-center p-4" ref="header">
            <div>
                <span class="font-bold text-black text-2xl uppercase">Lego</span>
                <span class="font-bold text-blue-400 text-2xl uppercase">Play</span>
                <div class="text-gray-500 text-sm">Customize lego while live-previewing its components in your browser</div>
            </div>
            <div>
                <button @click="run" class="flex items-center justify-center rounded text-sm text-white bg-gray-600 px-4 py-2 hover:bg-gray-800 focus:outline-none">
                    <icon name="play" class="w-4 h-4 inline-block mr-1"></icon>
                    Run
                </button>
            </div>
        </div>
        <div class="flex" ref="editor-previews-container">
            <div class="w-3/5 pr-2 bg-white">
                <editor></editor>
            </div>
            <div class="w-2/5 pl-2">
                <preview-components></preview-components>
            </div>
        </div>
    </div>
</template>

<script>
import EventBus from "@/EventBus";
import Editor from "@/components/Editor";
import PreviewComponents from "@/components/PreviewComponents";

export default {
    name: 'App',
    components: {
        Editor,
        PreviewComponents
    },
    methods: {
        run() {
            EventBus.$emit('run-lego-config');
        },
        setEditorHeight() {
            let documentHeight = document.documentElement.scrollHeight;
            let headerHeight = this.$refs['header'].clientHeight;

            this.$refs['editor-previews-container'].style.height = (documentHeight - headerHeight) + 'px';
        }
    },
    mounted() {
        this.setEditorHeight();
        //window.addEventListener("resize", this.setEditorHeight);
    }
}
</script>
