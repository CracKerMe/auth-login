<template>
  <p class="form-item-sub">
    请输入您的邮箱地址，我们将发送一封包含重置密码链接的邮件到您的邮箱。
  </p>
  <form class="form" autocomplete="off" @submit="submitFn">
    <FormItem label="邮箱" type="email" placeholder="请输入您的邮箱地址" :value="formData.email" name="email"
      svg='<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path></svg>'
      @update:value="updateFormItem($event, 'email')" readonly />
    <OTPInput v-slot="{ slots }" v-model="formData.code" :maxlength="6">
      <!-- slots -->
    </OTPInput>
    <button class="submit-btn" type="submit" shape="block" :disabled="verifyFormBool">
      重置密码
    </button>
    <p class="form-item-desc flex flex-center">
      返回<router-link to="/login">登录</router-link>
    </p>
  </form>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import FormItem from '@/components/FormItem.vue';
import { useRoute } from 'vue-router';
import { OTPInput } from 'vue-input-otp'

const route = useRoute();
const formData = ref({
  email: '',
  code: ''
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

onMounted(() => {
  console.log(route.query.email);
  if (route.query.email) {
    formData.value.email = route.query.email;
  }
})
</script>

<style lang="scss" scoped></style>
