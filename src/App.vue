<template>
  <router-view />
</template>

<script lang="ts" setup>
import { watch } from 'vue';
import { useAuth } from './stores/auth';

const authStore = useAuth();


</script>
