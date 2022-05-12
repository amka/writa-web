<template>
  <div class="page row items-center justify-center">
    <q-card style="width: 480px" class="self-center">
      <q-form @submit="onSubmit" class="q-gutter-md">
        <q-card-section>
          <div class="text-h2">Sign In</div>
        </q-card-section>

        <q-card-section>
          <q-input v-model="email" filled label="Email" :readonly="loading" class="q-my-md" />
          <q-input label="Password" v-model="password" filled type="password" :readonly="loading" class="q-my-md" />
        </q-card-section>
        <q-card-actions class="justify-between">
          <q-btn flat :to="{ name: 'sign-up' }">
            Not a memmber?
          </q-btn>
          <q-btn unelevated color="primary" type="submit" :loading="loading">
            Login
          </q-btn>
        </q-card-actions>
      </q-form>
    </q-card>
  </div>
</template>
<style>
</style>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuth } from 'src/stores/auth';
import { useUsers } from 'src/stores/users';

const router = useRouter();
const users = useUsers();
const authStore = useAuth();

let email = ref('');
let password = ref('');
let loading = ref(false);

const onSubmit = async () => {
  loading.value = true;

  try {
    await users.login(email.value, password.value);

    if (authStore.isAuthenticated) {
      router.replace('/')
    }
  } catch (error) {
    console.log(error)
  } finally {

    loading.value = false;
  }


};
</script>
