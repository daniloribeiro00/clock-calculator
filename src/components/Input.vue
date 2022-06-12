<script setup lang="ts">
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
  type: {
    type: String,
    required: false,
    default: 'time',
  },
  id: {
    type: String,
    required: false,
    default: '',
  },
});

defineEmits(['uptime:modelValue']);

const focusNext = () => {
  console.log('ok');
  if (
    (props.placeholder === '00:00' && props.modelValue.length === 5) ||
    (props.placeholder === '0' && props.modelValue.length === 1)
  ) {
    const input = document.getElementById(props.id);
    const nextInput = document.getElementById(
      `time-${Number(props.id.split('-')[1]) + 1}`
    );
    if (nextInput) {
      nextInput.focus();
    } else if (input) {
      input.blur();
      const button = document.getElementById('button') as HTMLButtonElement;
      button.click();
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
    <label :for="id" class="text-center text-sm text-white xs:text-base">{{
      label
    }}</label>
    <input
      v-bind="$attrs"
      :id="id"
      :value="modelValue"
      required
      :type="type"
      :placeholder="placeholder"
      autocomplete="off"
      class="h-14 w-32 rounded-lg border border-slate-700 bg-slate-800 text-center text-xl text-white caret-teal-600 outline-none ring-teal-600 transition-all duration-200 ease-in-out selection:bg-teal-600 selection:text-teal-900 focus:ring sm:h-12 sm:w-60"
      @input="$emit('uptime:modelValue', ($event.target as HTMLInputElement).value)"
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
