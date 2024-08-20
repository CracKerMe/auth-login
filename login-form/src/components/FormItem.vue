<template>
  <div class="form-item">
    <label :for="`${props.name}_form_item`">{{ props.label }}</label>
    <div>
      <span v-html="props.svg" />
      <input :type="props.type" :id="`${props.name}_form_item`" :placeholder="props.placeholder" v-model="oValue"
        autocapitalize="off" :autocomplete="props.type === 'password' ? 'new-password' : 'off'" :name="props.name"
        @change="textChangeFn" />
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, defineEmits } from 'vue'
const props = defineProps({
  label: String,
  type: String,
  placeholder: String,
  value: String,
  name: String,
  svg: String
})
const emits = defineEmits(['update:value'])

const oValue = ref(props.value)

const textChangeFn = (e) => {
  oValue.value = e.target.value
  emits('update:value', oValue.value)
}
</script>

<style lang="scss" scoped>
.form-item {
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
</style>