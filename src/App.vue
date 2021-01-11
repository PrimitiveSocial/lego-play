<template>
    <div id="app" class="bg-gray-100 h-full w-full fixed">
        <div class="flex flex-rowå h-full">
            <div class="w-1/2 p-4 border-r-4 h-full">
                <editor></editor>
            </div>
            <div class="w-1/2 p-4">pane 2</div>
        </div>
    </div>
</template>

<script>
import Editor from "@/components/Editor";

export default {
    name: 'App',
    components: {
        Editor
    }
}
</script>
