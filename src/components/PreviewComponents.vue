<template>
    <div>
        <div class="mb-6">
            <text-input placeholder="Enter name" v-model="name"></text-input>
        </div>

        <div class="mb-6">
            <dropdown :options="topics" v-model="topic" placeholder="Select dev stack" :multiple="true" :searchable="false" class="mt-8">
            </dropdown>
        </div>

        <div class="mb-6">
            <checkbox-input name="is_published" label="Accept terms and conditions" v-model="isPublished"></checkbox-input>
        </div>

        <div class="mb-6">
            <radio-input name="team" :options="servers" v-model="server"></radio-input>
        </div>

        <div class="mb-6">
            <toggle v-model="isOn"></toggle> Dark mode
        </div>

        <div class="mb-6">
            <tabs>
                <tab title="laravel">
                    <p>Laravel is a web application framework with elegant syntax.</p>
                </tab>
                <tab title="vue">
                    <p>The Progressive JavaScript Framework.</p>
                </tab>
                <tab title="tailwind" :active="true">
                    <p>A utility-first CSS framework for rapidly building custom designs.</p>
                </tab>
            </tabs>
        </div>

        <div class="mt-12 flex justify-between">
            <primary-button>Save</primary-button>
            <secondary-button>Cancel</secondary-button>
        </div>
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            name: '',
            topics: [
                { value: 1, label: "Vue"},
                { value: 2, label: "React"},
                { value: 3, label: "Alpine"},
                { value: 4, label: "Bootstrap"},
                { value: 5, label: "Tailwind"},
            ],
            topic: null,
            isPublished: true,
            servers: [
                { value: 1, label: "AWS"},
                { value: 2, label: "Digital Ocean"},
                { value: 3, label: "Linode"},
                { value: 4, label: "Other"},
            ],
            server: 1,
            isOn: false
        }
    }
}
</script>