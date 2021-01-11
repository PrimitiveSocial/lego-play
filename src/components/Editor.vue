<template>
    <div class="h-full">
        <div id="editor" class="h-full"></div>
    </div>
</template>

<script>
//import EventBus from '@/EventBus';
import * as monaco from 'monaco-editor';
import EventBus from "@/EventBus";

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

        this.$nextTick(function () {
            let contentHeight = Math.min(1000, this.editor.getContentHeight());
            document.getElementById('editor').style.height = `${contentHeight}px`;
        })

        EventBus.$on('run-lego-config', () => {
            this.run();
            EventBus.$emit('update-preview-components');
        })
    }
}
</script>