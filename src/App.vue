<template>
    <div id="app" class="bg-white h-full w-full font-sans antialiased fixed">
        <div class="flex flex-row h-full">
            <div class="w-3/5 p-4 border-r-4 h-full">
                <editor></editor>
            </div>
            <div class="w-2/5 p-4">
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
