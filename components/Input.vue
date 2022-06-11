<script setup lang="ts">
import { maska } from 'maska';
import { ref } from 'vue';

const vMaska = maska;

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    required: false,
    default: '',
  },
  placeholder: {
    type: String,
    required: false,
    default: '00:00',
  },
  id: {
    type: String,
    required: false,
    default: 0,
  },
});

defineEmits(['update:modelValue']);

const focusNext = () => {
  if (props.modelValue.length === 5) {
    const input = document.getElementById(props.id);
    const nextInput = document.getElementById(
      `date-${Number(props.id.split('-')[1]) + 1}`
    );
    if (nextInput) {
      nextInput.focus();
    } else if (input) {
      input.blur();
    }
  }
};

const selectAll = () => {
  const input = document.getElementById(props.id) as HTMLInputElement;
  if (input) {
    input.select();
  }
};
</script>

<template>
  <div class="flex flex-col items-center gap-2">
    <label :for="id" class="text-white text-center text-sm xs:text-base">{{ label }}</label>
    <input
      :value="modelValue"
      v-bind="$attrs"
      :id="id"
      v-maska="{
        mask: 'Z#:Y#',
        tokens: { Z: { pattern: /[0-2]/ }, Y: { pattern: /[0-5]/ } },
      }"
      :placeholder="placeholder"
      autocomplete="off"
      class="h-14 w-32 sm:w-60 rounded-lg border border-slate-700 bg-slate-800  text-xl text-white caret-teal-600 outline-none ring-teal-600 transition-all duration-200 ease-in-out selection:bg-teal-600 selection:text-teal-900 focus:ring sm:h-12"
      :class="placeholder === '00:00' ? 'px-[2.4rem] sm:px-[5.8rem]' : 'px-14 sm:px-28'"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      @keyup="focusNext"
      @click="selectAll"
      @focus="selectAll"
    />
  </div>
</template>

<style scoped>
input[type='time']::-webkit-calendar-picker-indicator {
  background: none;
  width: 0;
  display: none;
}
</style>
