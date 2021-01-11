<template>
    <div class="h-full">
        <primary-button @click="run" class="w-full text-center mb-4">
            <icon name="play" class="w-4 h-4 inline-block"></icon> Run
        </primary-button>
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