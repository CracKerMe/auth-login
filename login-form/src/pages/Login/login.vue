<template>
  <Form />
  <p class="forget-tips">
    Did you forget your password?
    <router-link to="/auth/forgotten-password">
      Reset it now
    </router-link>
  </p>
</template>

<script setup>
import Form from '@/components/Form.vue'
</script>

<style lang="scss" scoped>
.forget-tips {
  margin-top: 1.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
  color: #566072;

  a {
    color: #5845ee;
    margin-left: 0.25rem;
  }
}
</style>