<template>
  <h2>Forgot your password?</h2>
  <p class="tips">
    Enter your email address you've registered with so we can send you password reset link.
  </p>
  <form class="form" autocomplete="off" @submit="submitFn">
    <FormItem label="Email Address" type="email" placeholder="your email address" :value="formData.email" name="email" svg='<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path></svg>' @update:value="updateFormItem($event, 'email')" />
    <button class="submit-btn" type="submit" shape="block" :disabled="verifyFormBool">
      Send reset instructions
    </button>
    <p class="form-item-desc">
      Or go back to <router-link to="/login">Login</router-link>
    </p>
  </form>
</template>

<script setup>
import { ref, computed } from 'vue';
import FormItem from '@/components/FormItem.vue';
const formData = ref({
  email: ''
});

function isEmail(str) {
  const reg = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
  return reg.test(str);
}

const verifyFormBool = computed(() => {
  return !formData.value.email && !isEmail(formData.value.email);
});

const updateFormItem = (value, name) => {
  formData.value[name] = value;
};

const submitFn = (e) => {
  e.preventDefault();
  console.log(formData.value);
};
</script>

<style lang="scss" scoped>
h2 {
  font-weight: 500;
  line-height: 1.45;
  color: #fafafa;
  margin-bottom: 0.5rem;
}

.tips {
  max-width: 760px;
  line-height: 1.5;
  font-size: 14px;
  word-wrap: normal;
  white-space: normal;
  color: #a1a1aa;
  margin-bottom: 1.5rem;
}
</style>
