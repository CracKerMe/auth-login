<template>
  <p class="form-item-sub">欢迎来到 cnSaaS, 登录以继续</p>
  <form class="form" autocomplete="off" @submit="submitFn">
    <FormItem label="邮箱" type="email" placeholder="请输入您的邮箱地址" :value="formData.email" name="email"
      svg='<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path></svg>'
      @update:value="updateFormItem($event, 'email')" />
    <FormItem label="密码" type="password" placeholder="请输入密码" :value="formData.password" name="password"
      svg='<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C9.243 2 7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zm6 10 .002 8H6v-8h12zm-9-2V7c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9z"></path></svg>'
      @update:value="updateFormItem($event, 'password')" />
    <button class="submit-btn" type="submit" shape="block" :disabled="verifyFormBool">登录到 cnSaaS</button>
  </form>
  <p class="form-item-desc flex flex-center">
    忘记密码?
    <router-link to="/auth/forgotten-password">
      找回密码
    </router-link>
  </p>
</template>

<script setup>
import { ref, computed } from 'vue';
import FormItem from '@/components/FormItem.vue'
const formData = ref({
  email: '',
  password: ''
});

function isEmail(str) {
  const reg = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
  return reg.test(str);
}

const verifyFormBool = computed(() => {
  return !(formData.value.email && isEmail(formData.value.email) && formData.value.password);
});

const updateFormItem = (value, name) => {
  formData.value[name] = value;
}

const submitFn = (e) => {
  e.preventDefault();
  console.log(formData.value);
  fetch()
}
</script>

<style lang="scss" scoped>
form {
  width: 100%;
}
</style>
