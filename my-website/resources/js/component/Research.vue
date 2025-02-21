<template>
    <div>
        <h2 class="text-2xl font-semibold">My Research & Publications</h2>
        <ul v-if="research.length">
            <li v-for="item in research" :key="item.id">
                <h3 class="font-bold">{{ item.title }}</h3>
                <p>{{ item.description }}</p>
                <a :href="item.publication_link" target="_blank" class="text-blue-500">View Publication</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            research: []
        };
    },
    async mounted() {
        const response = await fetch("/api/research");
        this.research = await response.json();
    }
};
</script>
