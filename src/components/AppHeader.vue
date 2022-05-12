<template>
  <q-header reveal bordered class="bg-primary text-white">
    <q-toolbar>
      <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

      <q-toolbar-title>
        <q-avatar>
          <q-icon name="las la-feather-alt" />
        </q-avatar>
        Writa
      </q-toolbar-title>

      <template v-if="!authStore.isAuthenticated">
        <q-separator dark vertical />
        <q-btn stretch flat label="Sign In" :to="{ name: 'sign-in' }" />
        <q-separator dark vertical />
        <q-btn stretch flat label="Register" :to="{ name: 'sign-up' }" />
      </template>
      <template v-else>
        <q-separator dark vertical />
        <q-btn stretch flat label="Logout" @click="logout" />
      </template>
    </q-toolbar>
  </q-header>
</template>

<script lang="ts" setup>
import { ref, defineEmits } from 'vue';
import { useAuth } from 'stores/auth';
import { useRouter } from 'vue-router';

const authStore = useAuth();
const router = useRouter();

const emit = defineEmits(['toggle-left-drawer'])

const leftDrawerOpen = ref(false)

const toggleLeftDrawer = () => {
  emit('toggle-left-drawer', leftDrawerOpen.value)
}

const logout = () => {
  authStore.resetTokens();
  router.push({ name: 'sign-in' })
}
</script>
