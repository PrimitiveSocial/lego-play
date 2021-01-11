<template>
    <div class="h-full">
        <button @click="run">Run</button>
        <div id="editor" class="h-full"></div>
    </div>
</template>

<script>
import * as monaco from 'monaco-editor';
import legoConfig from 'raw-loader!./../lego.config.txt';

export default {
    data: () => {
        return {
            editor: null,
            code: ''
        }
    },
    methods: {
        run() {
            window.console.log(this.editor.getValue());
        }
    },
    mounted() {
        this.code = legoConfig;
        this.editor = monaco.editor.create(document.getElementById('editor'), {
            value: this.code,
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