<template>
  <div class="form-item">
    <label :for="`${props.name}_form_item`">{{ props.label }}</label>
    <div :class="{ 'readonly': props.readonly }">
      <span v-html="props.svg" />
      <input :type="props.type" :id="`${props.name}_form_item`" :placeholder="props.placeholder" :value="oValue"
        autocapitalize="off" :autocomplete="props.type === 'password' ? 'new-password' : 'off'" :name="props.name"
        @change="textChangeFn" :readonly="props.readonly" />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
const props = defineProps({
  label: String,
  type: String,
  placeholder: String,
  value: String,
  name: String,
  svg: String,
  readonly: {
    type: Boolean,
    default: false
  }
})
const emits = defineEmits(['update:value'])

const oValue = ref('')

const textChangeFn = (e) => {
  oValue.value = e.target.value
  emits('update:value', oValue.value)
}

watch(() => props.value, (newValue) => {
  oValue.value = newValue
}, {
  immediate: true
})
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
    color: #fafafa;
  }

  >div {
    display: flex;
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    border: 1px solid #27272a;
    transition: 0.2s;
    background: transparent;

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
      color: #bbbbbb;
    }

    input {
      display: block;
      width: 100%;
      height: 42px;
      padding: 0px 0.75rem;
      border: none;
      border-radius: unset;
      outline: none;
      color: #fafafa;
      background: transparent;
      font-size: 0.875rem;
      cursor: text;
      padding-left: 42px;

      &[readonly] {
        cursor: not-allowed;
        background: #27272a;
        color: #bbbbbb;
      }
    }

    &:not(.readonly):focus-within {
      border-color: #646cff;
      background: transparent;
    }
  }
}
</style>
