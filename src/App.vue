<template>
    <div id="app" class="bg-white w-full font-sans antialiased p-4 bg-black">
        <div class="border-b pb-4 flex justify-between items-center" >
            <div>
                <span class="font-bold text-black text-2xl uppercase">Lego</span>
                <span class="font-bold text-blue-400 text-2xl uppercase">Play</span>
                <div class="text-gray-500 text-sm">Customize lego while live-previewing its components in your browser</div>
            </div>
            <div>
                <primary-button @click="run" class="flex items-center justify-center text-sm">
                    <icon name="play" class="w-5 h-5 inline-block mr-2"></icon>
                    <span>Run</span>
                </primary-button>
            </div>
        </div>
        <div class="flex flex-row py-4">
            <div class="w-3/5 pr-6">
                <editor></editor>
            </div>
            <div class="w-2/5 pl-6 border-l-2">
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
        }
    }
}
</script>
