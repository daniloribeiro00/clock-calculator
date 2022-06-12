<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { Switch } from '@headlessui/vue';
import { useGlobalStore } from '../stores/globalStore';

const globalStore = useGlobalStore();

const enabled = ref(false);

watch(enabled, () => {
  globalStore.setMode(enabled.value ? 'endTime' : 'totalTime');
});

onMounted(() => {
  enabled.value = localStorage.getItem('mode') === 'endTime' ? true : false;
});
</script>

<template>
  <header class="flex w-full justify-between p-6">
    <span class="flex items-center justify-center gap-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        class="h-5 w-5 pb-px text-white"
        fill="currentColor"
      >
        <path
          d="M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"
        />
      </svg>
      <h1
        class="whitespace-pre-line text-xl leading-none text-white sm:whitespace-normal sm:text-2xl"
      >
        {{ 'Calculadora de\n Horas Trabalhadas' }}
      </h1>
    </span>
    <div class="flex items-center justify-center gap-4">
      <Transition name="header" mode="out-in">
        <p
          v-if="globalStore.mode === 'totalTime'"
          class="whitespace-pre-line text-right text-sm leading-tight text-white sm:whitespace-normal"
        >
          {{ 'Total de\n Horas' }}
        </p>
        <p
          v-else
          class="whitespace-pre-line text-right text-sm leading-tight text-white sm:whitespace-normal"
        >
          {{ 'Horário\n de Saída' }}
        </p>
      </Transition>
      <Switch
        v-model="enabled"
        :class="enabled ? 'bg-teal-700' : 'bg-teal-900'"
        class="relative inline-flex h-6 w-12 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent outline-none ring-teal-600 transition-all duration-200 ease-in-out focus:ring sm:h-7 sm:w-14"
      >
        <span class="sr-only">Alterar modo</span>
        <span
          aria-hidden="true"
          :class="enabled ? 'translate-x-6 sm:translate-x-7 ' : 'translate-x-0'"
          class="pointer-events-none flex h-5 w-5 transform items-center justify-center rounded-full bg-white shadow-lg outline-none ring-0 transition duration-200 ease-in-out sm:h-6 sm:w-6"
        />
      </Switch>
    </div>
  </header>
</template>

<style scoped>
.header-enter-active,
.header-leave-active {
  transition: all 0.05s ease;
}

.header-enter-from,
.header-leave-to {
  opacity: 50%;
}
</style>
