<template>
    <div class="h-full">
        <button @click="run">Run</button>
        <div id="editor" class="h-full"></div>
    </div>
</template>

<script>
import * as monaco from 'monaco-editor';

export default {
    data: () => {
        return {
            editor: null,
        }
    },
    methods: {
        run() {
            window.console.log(this.editor.getValue());
        }
    },
    mounted() {
        this.editor = monaco.editor.create(document.getElementById('editor'), {
            value: 'console.log("Hello, world")',
            language: 'javascript',
            renderLineHighlight: 'none',
            scrollBeyondLastLine: false,
            disableLayerHinting: true,
            overviewRulerBorder: false,
            minimap: {
                enabled: false
            },
            scrollbar: {
                verticalSliderSize: 5,
                horizontalScrollbarSize: 5,
                useShadows: false
            }
        });
    }
}
</script>