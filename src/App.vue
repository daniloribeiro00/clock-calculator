<script setup lang="ts">
import { useGlobalStore } from '@/stores/globalStore';
import Header from '@/components/Header.vue';
import TotalTime from '@/components/TotalTime.vue';
import EndTime from '@/components/EndTime.vue';

const globalStore = useGlobalStore();
</script>

<template>
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
