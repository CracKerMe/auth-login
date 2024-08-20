<template>
  <Form />
  <p class="form-item-desc">
    Did you forget your password?
    <router-link to="/auth/forgotten-password">
      Reset it now
    </router-link>
  </p>
</template>

<script setup>
import Form from '@/components/Form.vue'
</script>

<style lang="scss" scoped></style>
