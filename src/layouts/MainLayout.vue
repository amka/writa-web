<template>
  <q-layout view="hHr lpR lfr">

    <app-header @toggleLeftDrawer="toggleLeftDrawer" />

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script lang="ts" setup>
import AppHeader from 'src/components/AppHeader.vue'
import { ref } from 'vue'

const leftDrawerOpen = ref(false)

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
