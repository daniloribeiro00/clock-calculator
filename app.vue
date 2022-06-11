<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { useGlobalStore } from './stores/globalStore';

const globalStore = useGlobalStore();

onMounted(() => {
  const mode = localStorage.getItem('mode');

  if (mode) {
    globalStore.setMode(mode);
  } else {
    localStorage.setItem('mode', globalStore.mode);
  }
});

watch(globalStore, () => {
  localStorage.setItem('mode', globalStore.mode);
});
</script>

<template>
  <Head>
    <Title>Calculadora de Horas</Title>
    <Meta
      name="Calculadora de Horas"
      content="Calculadora de Horas Trabalhadas"
    />
    <Body class="bg-[#161f2c]" />
  </Head>
  <main
    class="flex h-screen w-screen flex-col items-center bg-gradient-to-bl from-[#172c30] via-[#14222d] to-[#141b2d]"
  >
    <Header />
    <Transition name="page" mode="out-in">
      <TotalTime v-if="globalStore.mode === 'totalTime'" />
      <EndTime v-else />
    </Transition>
  </main>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.15s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0%;
}
</style>
