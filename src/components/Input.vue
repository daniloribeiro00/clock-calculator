<script setup lang="ts">
type Props = {
  label?: string;
  placeholder?: string;
  type?: string;
  autofocus?: boolean;
  max?: string;
  required?: boolean;
  focused?: boolean;
};

const modelValue = defineModel<string>();

const props = defineProps<Props>();

const selectAll = (event: Event) => {
  const input = event.target as HTMLInputElement;
  if (input && props.placeholder === '0') {
    input.select();
  }
};

const focusNextElement = (event: KeyboardEvent) => {
  if (event.key === 'Enter') {
    const nextElement = event.target as HTMLInputElement;
    if (nextElement.nextElementSibling) {
      (
        nextElement.nextElementSibling as HTMLInputElement | HTMLButtonElement
      )?.focus();
    }
  }
};
</script>

<template>
  <div
    :class="[
      'duration-50 flex flex-col items-center gap-2 rounded-lg transition-all',
      focused && 'outline outline-1 outline-offset-8 outline-gray-300',
    ]"
  >
    <label
      v-if="label"
      class="text-center text-sm text-gray-200 sm:text-base"
    >
      {{ label }}
    </label>
    <input
      v-bind="$attrs"
      v-model="modelValue"
      maxlength="2"
      min="0"
      :max="max ?? 10"
      :required="required"
      :type="type ?? 'time'"
      :placeholder="placeholder ?? '00:00'"
      autocomplete="off"
      :autofocus="autofocus"
      class="flex h-12 w-36 items-center justify-center rounded-lg border border-slate-700 bg-slate-800 text-center text-xl text-gray-200 caret-teal-600 outline-none ring-teal-600 transition-all duration-200 ease-in-out selection:bg-[#bcd4fb] selection:text-black focus:ring sm:h-12 sm:w-60 lg:w-72"
      @click="selectAll"
      @focus="selectAll"
      @keydown.enter="focusNextElement"
    />
  </div>
</template>

<style>
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
  appearance: textfield;
  -moz-appearance: textfield;
}
</style>
