<script setup lang="ts">
import { watch } from 'vue';
import { useGlobalStore } from '@/stores/globalStore';
import Header from '@/components/Header.vue';
import TotalTime from '@/views/TotalTime.vue';
import EndTime from '@/views/EndTime.vue';

const globalStore = useGlobalStore();

watch(globalStore, () => {
  setTimeout(() => {
    const input = document.getElementById('time-1') as HTMLInputElement;
    if (input) input.focus();
  }, 200);
});
</script>

<template>
  <main
    class="flex h-screen w-screen flex-col items-center bg-gradient-to-bl from-[#172c30] via-[#14222d] to-[#141b2d]"
  >
    <Header />
    <Transition name="page" mode="out-in">
      <KeepAlive>
        <TotalTime v-if="globalStore.mode === 'totalTime'" />
        <EndTime v-else />
      </KeepAlive>
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
.fade-enter-active,
.fade-leave-active {
  transition: all 0.15s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0%;
}
</style>
