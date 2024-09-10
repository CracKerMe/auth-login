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

<script setup lang="ts">
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

const textChangeFn = (e: Event) => {
  oValue.value = (e.target as HTMLInputElement).value
  emits('update:value', oValue.value)
}

watch(() => props.value, (newValue) => {
  oValue.value = newValue || ''
}, {
  immediate: true
})
</script>

<style lang="scss" scoped>
@import './index.module.scss';
</style>
