<template>
  <p class="form-item-sub">我们一起探索 cnSaaS.top 的无限可能吧！</p>
  <form class="form" autocomplete="off" @submit="submitFn">
    <FormItem label="邮箱" type="email" placeholder="请输入您的邮箱地址" :value="formData.email" name="email"
      svg='<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path></svg>'
      @update:value="updateFormItem($event, 'email')" />
    <FormItem label="密码" type="password" placeholder="请输入密码" :value="formData.password" name="password"
      svg='<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C9.243 2 7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zm6 10 .002 8H6v-8h12zm-9-2V7c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9z"></path></svg>'
      @update:value="updateFormItem($event, 'password')" />
    <button class="submit-btn" type="submit" shape="block" :disabled="verifyFormBool">注册并加入 cnSaaS</button>
  </form>
  <p class="form-item-desc flex flex-center">
    已有账号
    <router-link to="/login">
      立即登录
    </router-link>
  </p>
  <div class="flex flex-center divider-line"></div>
  <GoogleLogin :callback="googleCallbackFn" prompt auto-login>
    <button class="google-btn" type="button" shape="block">
      <img :src="GoogleIcon" alt="">
      使用 Google 帐号注册
    </button>
  </GoogleLogin>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import FormItem from '@/components/FormItem/index.vue'
import GoogleIcon from '@/assets/googleIcon.svg'
import type { CallbackTypes } from "vue3-google-login";
import { decodeCredential } from "vue3-google-login";

enum IFormItemKey {
  email = 'email',
  password = 'password'
}

const formData = ref({
  email: '',
  password: ''
});

function isEmail(str: string) {
  const reg = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
  return reg.test(str);
}

const verifyFormBool = computed(() => {
  return !(formData.value.email && isEmail(formData.value.email) && formData.value.password);
});

const updateFormItem = (value: string, name: keyof typeof IFormItemKey) => {
  formData.value[name] = value;
}

const googleCallbackFn: CallbackTypes.CredentialCallback = (response) => {
  const userData = decodeCredential(response?.credential)
  console.log("Handle the userData", userData)
}

const submitFn = (e: Event) => {
  e.preventDefault();
  console.log(formData.value);
  // fetch()
}
</script>

<style lang="scss" scoped>
form {
  width: 100%;
}
</style>
