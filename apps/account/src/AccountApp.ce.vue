<script setup lang="ts">
import { ref } from 'vue';

const notificationsOn = ref(true);

function toggleNotifications() {
  notificationsOn.value = !notificationsOn.value;
}
</script>

<template>
  <section class="account">
    <p class="eyebrow">@demo/account</p>
    <h2>Team Account</h2>
    <p class="name">Jane Doe</p>
    <p class="plan">Pro plan</p>
    <button type="button" @click="toggleNotifications">
      Notifications: {{ notificationsOn ? 'on' : 'off' }}
    </button>
  </section>
</template>

<style>
:host {
  display: block;
  font-family: system-ui, sans-serif;
}

.account {
  border: 2px solid var(--color-brand, #0f766e);
  background: #f0fdfa;
  border-radius: 16px;
  padding: 1.25rem;
  color: #134e4a;
}

.eyebrow {
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--color-brand, #0f766e);
}

h2 {
  margin: 0.25rem 0 0.75rem;
  font-size: 1.5rem;
}

.name,
.plan {
  margin: 0.15rem 0;
}

button {
  margin-top: 1rem;
  border: 0;
  border-radius: 8px;
  padding: 0.45rem 0.8rem;
  background: var(--color-brand, #0f766e);
  color: var(--color-brand-foreground, #fff);
  cursor: pointer;
}
</style>
