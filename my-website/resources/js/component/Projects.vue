<template>
    <div>
        <h2>My Projects</h2>
        <ul v-if="projects.length">
            <li v-for="project in projects" :key="project.id">
                <h3>{{ project.title }}</h3>
                <p>{{ project.description }}</p>
                <a :href="project.link" target="_blank" v-if="project.link">View Project</a>
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
