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
  <div class="flex flex-center divider-line"></div>
  <GoogleLogin :callback="googleCallbackFn" prompt auto-login>
    <button class="google-btn" type="button" shape="block">
      <img :src="GoogleIcon" alt="">
      使用 Google 帐号登录
    </button>
  </GoogleLogin>
  <p class="form-item-desc flex flex-center">
    还没有账号？
    <router-link to="/register">
      点我注册
    </router-link>
  </p>
  <p class="form-item-desc flex flex-center">
    登录即表示您同意我们的
    <a href="https://cnsaas.top/policy.html" target="_blank">
      隐私政策
    </a>
    &nbsp; & &nbsp;
    <a href="https://cnsaas.top/services.html" target="_blank">
      服务协议
    </a>
  </p>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import FormItem from '@/components/FormItem/index.vue'
import GoogleIcon from '@/assets/googleIcon.svg'
import type { CallbackTypes } from "vue3-google-login";
import { decodeCredential } from "vue3-google-login";
import { useRouter, useRoute } from 'vue-router';


const router = useRouter();
const route = useRoute();
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

const submitFn = (e: Event) => {
  e.preventDefault();
  console.log(formData.value);
  fetch(`http://localhost:3333/api/login`, {
    method: 'POST',
    body: JSON.stringify({
      appId: route.query?.appId,
      email: formData.value.email,
      password: formData.value.password
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if (data.code === 0) {
        localStorage.setItem('token', data.data.token)
        location.href = `${route.query?.redirect}?token=${data.data.token}`
      } else {
        alert(data.message)
      }
    })
    .catch(err => console.log(err))
};

const googleCallbackFn: CallbackTypes.CredentialCallback = (response) => {
  const userData = decodeCredential(response?.credential)
  console.log("Handle the userData", userData)
  localStorage.setItem("_userData", JSON.stringify(userData))
  router.replace({ name: 'Account' })
  // const mockUserData = {
  //   aud: "234225060379-j1r9h4ubf181q7mldd0n2s18tv26q12r.apps.googleusercontent.com",
  //   azp: "234225060379-j1r9h4ubf181q7mldd0n2s18tv26q12r.apps.googleusercontent.com",
  //   email: "sarrazinparfait@gmail.com",
  //   email_verified: true,
  //   exp: 1725935219,
  //   family_name: "Sarrazin",
  //   given_name: "Parfait",
  //   iat: 1725931619,
  //   iss: "https://accounts.google.com",
  //   jti: "1ed4784de409bf374a0ed494755893cd098b8b0e",
  //   name: "Parfait Sarrazin",
  //   nbf: 1725931319,
  //   picture: "https://lh3.googleusercontent.com/a/ACg8ocKVcHViagVQWbIjrG37yzYVYBT1VuVtBt40QuxCadNF1lrRtPM=s96-c",
  //   sub: "115187129132192479884"
  // }
}
</script>

<style lang="scss" scoped>
form {
  width: 100%;
}

.g-btn-wrapper {
  width: 100%;
}
</style>
