<template>
    <div>
        <h2 class="text-2xl font-semibold">My Projects</h2>
        <ul v-if="projects.length">
            <li v-for="project in projects" :key="project.id">
                <h3 class="font-bold">{{ project.title }}</h3>
                <p>{{ project.description }}</p>
                <a :href="project.link" target="_blank" class="text-blue-500">View Project</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            projects: []
        };
    },
    async mounted() {
        const response = await fetch("/api/projects");
        this.projects = await response.json();
    }
};
</script>
