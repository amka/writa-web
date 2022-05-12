<template>
  <div class="page row items-center justify-center">
    <q-card style="width: 480px" class="self-center">
      <q-form @submit="onSubmit" class="q-gutter-md">
        <q-card-section>
          <div class="text-h2">Sign Up</div>
        </q-card-section>

        <q-card-section>
          <q-input v-model="email" standout label="Email" :readonly="loading" class="q-my-md" />
          <q-input label="Password" v-model="password" standout type="password" :readonly="loading" class="q-my-md" />
          <q-checkbox label="I agree to the terms and conditions" v-model="acceptTerms" />
        </q-card-section>

        <q-card-actions class="justify-between">
          <q-btn flat :to="{ name: 'sign-in' }">
            Already a member?
          </q-btn>
          <q-btn unelevated color="primary" type="submit" :loading="loading">
            Register
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
import { useUsers } from '../../stores/users';

const users = useUsers();

let email = ref('');
let password = ref('');
let acceptTerms = ref(false);
let loading = ref(false);

const onSubmit = async () => {
  loading.value = true;
  console.log(email, password);

  try {
    await users.register(email.value, password.value);
  }
  catch (error) {
    console.log(error);
  }
  finally {
    loading.value = false;
  }
};
</script>
