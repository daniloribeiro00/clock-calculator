<script setup lang="ts">
import { ref } from 'vue';

const date1 = ref('');
const date2 = ref('');
const date3 = ref('');
const totalTime = ref('');
</script>

<template>
  <div
    class="flex h-full w-full max-w-[1200px] flex-col items-center p-6"
  >
    <h1 class="text-2xl text-white">Horário de Saída</h1>
    <form class="flex flex-col items-center justify-center gap-12 py-4 h-[70%] sm:h-4/6">
      <div class="grid grid-cols-2 gap-x-4 gap-y-3">
        <h2 class="col-span-2 text-center text-xl text-white">Manhã</h2>
        <Input
          v-model="date1"
          label="Início da Jornada"
          autofocus
          id="date-1"
        />
        <Input v-model="date2" label="Saída para Intervalo" id="date-2" />
      </div>
      <div class="flex items-center justify-center gap-4">
        <div class="grid gap-y-3">
          <h2 class="col-span-2 text-center text-xl text-white">Tarde</h2>
          <Input v-model="date3" label="Retorno do Intervalo" id="date-3" />
        </div>
        <div class="grid h-full items-end gap-x-4 gap-y-3">
          <Input v-model="totalTime" label="Horas Trabalhadas" id="date-4" placeholder="0" />
        </div>
      </div>
    </form>
    <div class="flex w-full flex-col items-center justify-center h-1/5">
      <p class="text-2xl text-white">Horário de Saída</p>
      <p class="text-3xl text-white">00:00</p>
    </div>
  </div>
</template>
