<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute('/users/u_[name]')
</script>

<template>
{{route.params.name}}
</template>
