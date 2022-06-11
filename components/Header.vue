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
    <h1 class="text-2xl leading-none text-white">
      Calculadora de Horas Trabalhadas
    </h1>
    <div class="flex items-center justify-center gap-4">
      <Transition name="fade" mode="out-in">
        <p
          v-if="globalStore.mode === 'totalTime'"
          class="text-sm leading-tight text-white"
        >
          Total de Horas
        </p>
        <p v-else class="text-sm leading-tight text-white">Horário de Saída</p>
      </Transition>
      <Switch
        v-model="enabled"
        :class="enabled ? 'bg-teal-700' : 'bg-teal-900'"
        class="relative inline-flex h-6 w-12 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent outline-none ring-teal-600 ring-offset-2 transition-all duration-200 ease-in-out focus:ring sm:h-7 sm:w-14"
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

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.05s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 50%;
}
</style>
