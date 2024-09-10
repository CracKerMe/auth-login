<template>
  <p class="form-item-sub">
    <span style="font-weight: bold;color: #ffffff;">等等！</span>您可以选择减少接收邮件的频率，而不是彻底取消订阅。[<a href=""
      target="_blank">每周精选/每月摘要</a>] 或许更适合您？
  </p>
  <form class="form" autocomplete="off" @submit="submitFn">
    <FormItem label="邮箱" type="email" placeholder="请输入您的邮箱地址" :value="formData.email" name="email"
      svg='<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path></svg>'
      @update:value="updateFormItem($event, 'email')" />
    <button class="submit-btn" type="submit" shape="block" :disabled="verifyFormBool">
      我意已决，取消订阅
    </button>
    <p class="form-item-desc">
      <a href="https://cnsaas.top" target="_blank" rel="noopener noreferrer">去cnSaaS看看</a>
    </p>
  </form>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import FormItem from '@/components/FormItem/index.vue'

enum IFormItemKey {
  email = 'email'
}

const formData = ref({
  email: ''
});

function isEmail(str: string) {
  const reg = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
  return reg.test(str);
}

const verifyFormBool = computed(() => {
  return !formData.value.email && !isEmail(formData.value.email);
});

const updateFormItem = (value: string, name: keyof typeof IFormItemKey) => {
  formData.value[name] = value;
};

const submitFn = (e: Event) => {
  e.preventDefault();
  console.log(formData.value);
};
</script>

<style lang="scss" scoped></style>
