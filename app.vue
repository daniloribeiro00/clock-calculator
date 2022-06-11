<script setup lang="ts">
import { useGlobalStore } from './stores/globalStore';

const globalStore = useGlobalStore();
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
    <Transition name="fade" mode="out-in">
      <TotalTime v-if="globalStore.mode === 'totalTime'" />
      <EndTime v-else />
    </Transition>
  </main>
</template>
