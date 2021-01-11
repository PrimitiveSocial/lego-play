<template>
    <div class="h-full p-4">
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
        }
    },
    created() {
        window.Lego = require('../lego.config');
    },
    mounted() {
        this.code = JSON.stringify(JSON.parse(JSON.stringify(window.Lego)),null,2);

        this.editor = monaco.editor.create(document.getElementById('editor'), {
            theme: 'vs-dark',
            value: this.code,
            language: 'json',
            fontSize: 14,
            renderLineHighlight: 'none',
            scrollBeyondLastLine: false,
            disableLayerHinting: true,
            overviewRulerBorder: true,
            fixedOverflowWidgets: true,
            automaticLayout: true,
            minimap: {
                enabled: false
            },
            scrollbar: {
                verticalSliderSize: 12,
                horizontalScrollbarSize: 12,
                useShadows: true
            }
        });

        EventBus.$on('run-lego-config', () => {
            this.run();
            EventBus.$emit('update-preview-components');
        })
    }
}
</script>