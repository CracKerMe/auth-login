<template>
  <form class="form" autocomplete="off" @submit="submitFn">
    <ul>
      <FormItem label="Email Address" type="email" placeholder="your@email.address" :value="formData.email" name="email"
        svg='<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path></svg>'
        @update:value="updateFormItem($event, 'email')" />
      <!-- <li>
        <label for="emailAddress">Email Address</label>
        <div>
          <span>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z">
              </path>
            </svg>
          </span>
          <input type="email" id="emailAddress" placeholder="your@email.address" v-model="formData.email"
            autocapitalize="off" autocomplete="off" name="email" />
        </div>
      </li> -->
      <FormItem label="Password" type="password" placeholder="password" :value="formData.password" name="password"
        svg='<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C9.243 2 7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zm6 10 .002 8H6v-8h12zm-9-2V7c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9z"></path></svg>'
        @update:value="updateFormItem($event, 'password')" />
      <!-- <li>
        <label for="password">Password</label>
        <div>
          <span>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 2C9.243 2 7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zm6 10 .002 8H6v-8h12zm-9-2V7c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9z">
              </path>
            </svg>
          </span>
          <input type="password" id="password" placeholder="password" v-model="formData.password" name="password"
            autocomplete="new-password" />
        </div>
      </li> -->
      <button type="submit" shape="block" :disabled="verifyFormBool">Login to cnSaaS</button>
    </ul>
  </form>
</template>

<script setup>
import { ref, computed } from 'vue';
import FormItem from './FormItem.vue'
const formData = ref({
  email: '',
  password: ''
});
// const verifyFormBool = ref(true);
const verifyFormBool = computed(() => {
  return !formData.value.email || !formData.value.password;
});

const updateFormItem = (value, name) => {
  formData.value[name] = value;
}
const submitFn = (e) => {
  e.preventDefault();
  console.log(formData.value);
}
</script>

<style lang="scss" scoped>
form {
  width: 100%;
}

ul {
  li {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    &:not(:last-child) {
      margin-bottom: 1.25rem;
    }

    label {
      display: block;
      font-size: 0.875rem;
      font-weight: 500;
      line-height: 1.25rem;
      color: #566072;
    }

    >div {
      display: flex;
      position: relative;
      overflow: hidden;
      border-radius: 8px;
      border: 1px solid #d1d5db;
      transition: 0.2s;
      background: #ffffff;

      >span {
        display: flex;
        flex-shrink: 0;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0px;
        left: 0px;
        width: 42px;
        height: 100%;
        color: #9ba1ab;
      }

      input {
        display: block;
        width: 100%;
        height: 42px;
        padding: 0px 0.75rem;
        border: none;
        border-radius: unset;
        outline: none;
        color: #272a2f;
        background: transparent;
        font-size: 0.875rem;
        cursor: text;
        padding-left: 42px;

        &:focus {
          border-color: #646cff;
          background: transparent;
        }
      }
    }
  }

  >button {
    appearance: none;
    flex-shrink: 0;
    transition: 0.2s;
    display: inline-flex;
    align-items: center;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
    font-weight: 500;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    height: 44px;
    font-size: 0.875rem;
    padding: 0px 1rem;
    width: 100%;
    justify-content: center;
    border: 1px solid #5845ee;
    background-color: #5845ee;
    color: #ffffff;

    &[disabled] {
      cursor: not-allowed;
      background-color: #d1d5db;
      border-color: #d1d5db;
      color: #ffffff;
    }
  }
}
</style>
