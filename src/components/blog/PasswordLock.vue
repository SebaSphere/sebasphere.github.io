<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  filename: string;
  password: string;
}>();

const unlocked = ref(false);
const input = ref('');
const error = ref(false);

function attempt() {
  if (input.value.trim() === props.password) {
    unlocked.value = true;
    error.value = false;
  } else {
    error.value = true;
    input.value = '';
  }
}
</script>

<template>
  <slot v-if="unlocked" />
  <div v-else class="password-lock">
    <p class="lock-label">Enter a password to view (you better not cheat and just view source).</p>
    <div class="lock-form">
      <input
        v-model="input"
        type="password"
        placeholder="Enter password"
        @keydown.enter="attempt"
        autofocus
      />
      <button @click="attempt">Unlock</button>
    </div>
    <p v-if="error" class="lock-error">Incorrect password.</p>
  </div>
</template>

<style scoped>
.password-lock {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 3rem 1rem;
}

.lock-label {
  font-size: 1.1rem;
  color: #555;
}

.lock-form {
  display: flex;
  gap: 0.5rem;
}

.lock-form input {
  padding: 0.4rem 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  outline: none;
}

.lock-form input:focus {
  border-color: #555;
}

.lock-form button {
  padding: 0.4rem 1rem;
  border: 1px solid #555;
  border-radius: 4px;
  background: #555;
  color: white;
  cursor: pointer;
  font-size: 1rem;
}

.lock-form button:hover {
  background: #333;
}

.lock-error {
  color: #c00;
  font-size: 0.9rem;
}
</style>
