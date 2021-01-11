<template>
    <div id="app" class="bg-white h-full w-full font-sans antialiased fixed p-4">
        <div class="border-b mb-4 pb-4">
            <span class="font-bold text-black text-2xl uppercase space-x-0.5">Lego</span>
            <span class="font-bold text-purple-400 text-2xl uppercase">Play</span>
            <div class="text-gray-500 text-sm">Customize lego while live-previewing its components in your browser</div>
        </div>
        <div class="flex flex-row h-full">
            <div class="w-3/5 border-r-4 h-full pr-8">
                <editor></editor>
            </div>
            <div class="w-2/5">
                <preview-components></preview-components>
            </div>
        </div>
    </div>
</template>

<script>
import Editor from "@/components/Editor";
import PreviewComponents from "@/components/PreviewComponents";

export default {
    name: 'App',
    components: {
        Editor,
        PreviewComponents
    }
}
</script>
