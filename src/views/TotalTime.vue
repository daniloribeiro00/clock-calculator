<script setup lang="ts">
import { ref } from 'vue';

import Input from '@/components/Input.vue';

const time1 = ref('');
const time2 = ref('');
const time3 = ref('');
const time4 = ref('');
const finalTime = ref('00:00');

const isIncorrect = ref(false);

const handleSubmit = () => {
  const time = {
    start: Number(time1.value.split(':')[0]) * 60 + Number(time1.value.split(':')[1]),
    interval: Number(time2.value.split(':')[0]) * 60 + Number(time2.value.split(':')[1]),
    return: Number(time3.value.split(':')[0]) * 60 + Number(time3.value.split(':')[1]),
    final: Number(time4.value.split(':')[0]) * 60 + Number(time4.value.split(':')[1]),
  };

  const workedTime = time.interval - time.start + (time.final - time.return);

  const finalHours = String(Math.floor(workedTime / 60)).padStart(2, '0');
  const finalMinutes = String(Math.floor(workedTime % 60)).padStart(2, '0');

  if (
    !workedTime ||
    workedTime <= 0 ||
    time.interval <= time.start ||
    time.return <= time.interval ||
    time.final <= time.return
  ) {
    isIncorrect.value = true;
    const input = document.getElementById('time-1') as HTMLInputElement;
    if (input) input.focus();
    setTimeout(() => {
      isIncorrect.value = false;
    }, 3000);
    return;
  }

  isIncorrect.value = false;
  finalTime.value = `${finalHours}:${finalMinutes}`;
};
</script>

<template>
  <div class="flex h-full w-full max-w-[1200px] flex-col items-center p-6">
    <h1 class="text-2xl text-white">Total de Horas Trabalhadas</h1>
    <form
      class="flex h-[77%] flex-col items-center justify-center gap-12 py-4"
      @submit.prevent="handleSubmit"
    >
      <div class="grid grid-cols-2 gap-x-4 gap-y-3">
        <h2 class="col-span-2 text-center text-xl text-white">Manhã</h2>
        <Input
          id="time-1"
          v-model="time1"
          label="Início da Jornada"
          autofocus
        />
        <Input
          id="time-2"
          v-model="time2"
          label="Saída para Intervalo"
        />
      </div>
      <div class="grid grid-cols-2 gap-x-4 gap-y-3">
        <h2 class="col-span-2 text-center text-xl text-white">Tarde</h2>
        <Input
          id="time-3"
          v-model="time3"
          label="Retorno do Intervalo"
        />
        <Input
          id="time-4"
          v-model="time4"
          label="Término da Jornada"
        />
      </div>
      <button
        id="button"
        class="relative mt-2 rounded-lg bg-teal-800 px-12 py-3 text-white outline-none transition-all hover:bg-teal-900 focus:ring focus:ring-teal-600"
      >
        <Transition
          name="fade"
          :duration="200"
        >
          <span
            v-if="isIncorrect"
            class="absolute inset-x-0 -top-7 text-sm text-red-500"
          >
            Dados inválidos!
          </span>
        </Transition>
        Calcular
      </button>
    </form>
    <div class="flex h-[20%] w-full flex-col items-center justify-center sm:h-auto">
      <p class="text-2xl text-white">Total</p>
      <p class="text-3xl text-white">{{ finalTime }}</p>
    </div>
  </div>
</template>
