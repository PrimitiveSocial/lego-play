<template>
    <div class="h-full">
        <button @click="run">Run</button>
        <div id="editor" class="h-full"></div>
    </div>
</template>

<script>
import EventBus from '@/EventBus';
import * as monaco from 'monaco-editor';

export default {
    data: () => {
        return {
            editor: null,
            code: null
        }
    },
    methods: {
        run() {
            this.code = this.editor.getValue();
            window.Lego = JSON.parse(this.code);
            EventBus.$emit('run-lego-config');
        }
    },
    created() {
        window.Lego = require('../lego.config');
    },
    mounted() {
        this.code = JSON.stringify(JSON.parse(JSON.stringify(window.Lego)),null,2);

        this.editor = monaco.editor.create(document.getElementById('editor'), {
            value: this.code,
            language: 'json',
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