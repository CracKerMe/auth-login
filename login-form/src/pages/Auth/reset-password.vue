<template>
  <p class="form-item-sub">
    请输入您的邮箱地址，我们将发送一封包含重置密码链接的邮件到您的邮箱。
  </p>
  <form class="form" autocomplete="off" @submit="submitFn">
    <FormItem label="邮箱" type="email" placeholder="请输入您的邮箱地址" :value="formData.email" name="email"
      svg='<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path></svg>'
      @update:value="updateFormItem($event, 'email')" readonly />
    <p class="label-name">邮箱验证码</p>
    <OTPInput v-slot="{ slots }" v-model="formData.code" :maxlength="6" @complete="codeCompleteFn">
      <div class="otp-wrapper flex">
        <div v-for="(slot, idx) in slots" v-bind="slot" :key="idx" :class="{ 'current': slot.hasFakeCaret }">
          <p v-if="slot.char">{{ slot.char }}</p>
          <div v-else class="otp-box">
            <div class="otp-box-inner" v-show="slot.isActive"></div>
          </div>
        </div>
      </div>
    </OTPInput>
    <button class="submit-btn" type="submit" shape="block" :disabled="verifyFormBool">
      <!-- 重置密码 -->
      <span v-if="loading">重置密码中...</span>
      <span v-else>重置密码</span>
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
const loading = ref(false);

function isEmail(str) {
  const reg = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
  return reg.test(str);
}

const verifyFormBool = computed(() => {
  return !(formData.value.email && isEmail(formData.value.email) && formData.value.code && formData.value.code.length === 6 && !loading.value);
});

const updateFormItem = (value, name) => {
  formData.value[name] = value;
};

const submitFn = (e) => {
  e && e.preventDefault();
  console.log(formData.value);
  loading.value = true;

  setTimeout(() => {
    loading.value = false;
  }, 1000);
};

const codeCompleteFn = (code) => {
  console.log(code);
  submitFn();
};

onMounted(() => {
  console.log(route.query.email);
  if (route.query.email) {
    formData.value.email = route.query.email;
  }
});
</script>

<style lang="scss" scoped>
.label-name {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
  color: #fafafa;
}

.otp-wrapper {
  gap: 0.5rem;
  margin-top: 0.5rem;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
  margin-bottom: 1.5rem;

  >div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 42px;
    height: 42px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 0.25rem;

    &.current {
      border-color: #ffffff;
    }
  }

  p {
    font-size: 1.25rem;
    font-weight: bold;
    color: #ffffff;
  }

  .otp-box {
    width: 100%;
    height: 100%;
    position: relative;

    .otp-box-inner {
      width: 1px;
      height: 50%;
      position: absolute;
      left: 50%;
      top: 25%;
      background-color: #ffffff;
      animation: blink 1s infinite;
    }
  }
}

@keyframes blink {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}
</style>
