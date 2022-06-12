<script setup lang="ts">
import { ref } from 'vue';
import Input from '@/components/Input.vue';

const time1 = ref('');
const time2 = ref('');
const time3 = ref('');
const totalTime = ref('8');
const finalTime = ref('00:00');

const handleSubmit = () => {
  const time = {
    // get input type hh:mm and convert it to minutes
    start:
      Number(time1.value.split(':')[0]) * 60 +
      Number(time1.value.split(':')[1]),
    interval:
      Number(time2.value.split(':')[0]) * 60 +
      Number(time2.value.split(':')[1]),
    return:
      Number(time3.value.split(':')[0]) * 60 +
      Number(time3.value.split(':')[1]),
  };

  const timeTotal = Number(totalTime.value) * 60;

  const finalTime2 = timeTotal - time.interval + time.start + time.return;

  const finalHours = String(Math.floor(finalTime2 / 60)).padStart(2, '0');
  const finalMinutes = String(Math.floor(finalTime2 % 60)).padStart(2, '0');

  console.log(`${finalHours}:${finalMinutes}`);

  if (
    !finalTime.value ||
    finalTime2 <= 0 ||
    time.interval <= time.start ||
    time.return <= time.interval ||
    finalTime2 <= time.return
  ) {
    // setIncorrectMessage1(true);
    // setHorarioSaida('00:00');
    // setTimeout(() => {
    // 	setIncorrectMessage1(false);
    // }, 5000);
    return;
  }

  // setIncorrectMessage1(false);
  finalTime.value = `${finalHours}:${finalMinutes}`;
};
</script>

<template>
  <div class="flex h-full w-full max-w-[1200px] flex-col items-center p-6">
    <h1 class="text-2xl text-white">Horário de Saída</h1>
    <form
      class="flex h-[70%] flex-col items-center justify-center gap-12 py-4 sm:h-4/6"
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
        <Input id="time-2" v-model="time2" label="Saída para Intervalo" />
      </div>
      <div class="flex items-center justify-center gap-4">
        <div class="grid gap-y-3">
          <h2 class="col-span-2 text-center text-xl text-white">Tarde</h2>
          <Input
            id="time-3"
            v-model="time3"
            label="Retorno do Intervalo"
            type="number"
          />
        </div>
        <div class="grid h-full items-end gap-x-4 gap-y-3">
          <Input
            id="time-4"
            v-model="totalTime"
            label="Horas Trabalhadas"
            placeholder="0"
          />
        </div>
      </div>
      <button id="button" class="hidden">enviar</button>
    </form>
    <div class="flex h-1/5 w-full flex-col items-center justify-center">
      <p class="text-2xl text-white">Saída às</p>
      <p class="text-3xl text-white">{{ finalTime }}</p>
    </div>
  </div>
</template>
