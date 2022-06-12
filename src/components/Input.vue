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

const emit = defineEmits(['update:modelValue']);

const input = (event: Event) => {
  const input = document.getElementById(props.id) as HTMLInputElement;

  let value = (event.target as HTMLInputElement).value;

  if (input.type === 'number') {
    if (value.length > 2) {
      value = value.slice(0, 2);
      input.value = value.slice(0, 2);
    }
    if (Number(value) > 10) {
      value = '10';
      input.value = '10';
    }
  }

  emit('update:modelValue', value);
};

const selectAll = () => {
  const input = document.getElementById(props.id) as HTMLInputElement;
  if (input && props.placeholder === '0') {
    input.select();
  }
};
</script>

<template>
  <div class="flex flex-col items-center gap-2">
    <label :for="id" class="text-center text-sm text-white xs:text-base">
      {{ label }}
    </label>
    <input
      v-bind="$attrs"
      :id="id"
      :value="modelValue"
      maxlength="2"
      min="0"
      max="10"
      required
      :type="type"
      :placeholder="placeholder"
      autocomplete="off"
      class="h-14 w-32 rounded-lg border border-slate-700 bg-slate-800 text-center text-xl text-white caret-teal-600 outline-none ring-teal-600 transition-all duration-200 ease-in-out selection:bg-[#bcd4fb] selection:text-black focus:ring sm:h-12 sm:w-60"
      @input="input"
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
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type='number'] {
  -moz-appearance: textfield;
}
</style>
