<script setup lang="ts">
import { ref, watch } from 'vue';

import Header from './components/Header.vue';
import Input from './components/Input.vue';
import { useLanguageStore } from './stores/language';

const languageStore = useLanguageStore();

const morningStart = ref('');
const morningEnd = ref('');
const afternoonStart = ref('');
const afternoonEnd = ref('');

const totalWorkTime = ref('08:00');

const isIncorrect = ref(false);
const focused = ref<'afternoonEnd' | 'totalWorkTime' | 'off'>('off');

const calculate = (type: 'calc-end' | 'calc-total') => {
  const time = {
    morningStart:
      Number(morningStart.value.split(':')[0]) * 60 +
      Number(morningStart.value.split(':')[1]),
    morningEnd:
      Number(morningEnd.value.split(':')[0]) * 60 +
      Number(morningEnd.value.split(':')[1]),
    afternoonStart:
      Number(afternoonStart.value.split(':')[0]) * 60 +
      Number(afternoonStart.value.split(':')[1]),
    afternoonEnd:
      Number(afternoonEnd.value.split(':')[0]) * 60 +
      Number(afternoonEnd.value.split(':')[1]),
    totalWorkTime:
      Number(totalWorkTime.value.split(':')[0]) * 60 +
      Number(totalWorkTime.value.split(':')[1]),
  };

  const resultTime =
    type === 'calc-end'
      ? time.totalWorkTime -
        (time.morningEnd ? time.morningEnd : 0) +
        time.morningStart +
        (time.afternoonStart ? time.afternoonStart : 0)
      : (time.morningEnd ? time.morningEnd : 0) -
        time.morningStart +
        (time.afternoonEnd - (time.afternoonStart ? time.afternoonStart : 0));

  const finalHours = Math.floor(resultTime / 60);
  const finalMinutes = Math.floor(resultTime % 60);

  if (type === 'calc-end') {
    if (
      time.morningStart > 0 &&
      (!isNaN(time.morningEnd) ? time.morningEnd > time.morningStart : true) &&
      (!isNaN(time.afternoonStart)
        ? time.afternoonStart > time.morningEnd
        : true) &&
      time.totalWorkTime > 0 &&
      time.totalWorkTime < 12 * 60 &&
      resultTime > 0
    ) {
      isIncorrect.value = false;

      afternoonEnd.value = `${String(Math.floor(finalHours)).padStart(2, '0')}:${String(Math.floor(finalMinutes)).padStart(2, '0')}`;

      setTimeout(() => {
        focused.value = 'afternoonEnd';
      }, 50);
    } else {
      isIncorrect.value = true;

      afternoonEnd.value = '00:00';
    }
  }

  if (type === 'calc-total') {
    if (
      time.morningStart > 0 &&
      (!isNaN(time.morningEnd) ? time.morningEnd > time.morningStart : true) &&
      (!isNaN(time.afternoonStart)
        ? time.afternoonStart > time.morningEnd
        : true) &&
      time.afternoonEnd > 0 &&
      time.afternoonEnd > (time.afternoonStart ? time.afternoonStart : 0) &&
      resultTime > 0
    ) {
      isIncorrect.value = false;

      totalWorkTime.value = `${String(Math.floor(finalHours)).padStart(2, '0')}:${String(Math.floor(finalMinutes)).padStart(2, '0')}`;
      setTimeout(() => {
        focused.value = 'totalWorkTime';
      }, 50);
    } else {
      isIncorrect.value = true;

      totalWorkTime.value = '00:00';
    }
  }
};

watch(
  [morningStart, morningEnd, afternoonStart, afternoonEnd, totalWorkTime],
  () => {
    focused.value = 'off';
  }
);

if (!navigator.language.toLowerCase().startsWith('pt')) {
  languageStore.setLanguage('en');
} else {
  languageStore.setLanguage('pt');
}
</script>

<template>
  <main
    class="flex h-full min-h-screen w-screen flex-col items-center bg-gradient-to-bl from-[#172c30] via-[#14222d] to-[#141b2d]"
  >
    <Header />
    <div
      class="-mt-8 flex h-full w-full max-w-[1200px] flex-1 flex-col items-center justify-center p-3"
    >
      <form class="flex flex-col items-center justify-center gap-8 py-4">
        <div
          class="grid grid-cols-2 gap-x-5 gap-y-3 rounded-lg border border-gray-600 p-5"
        >
          <h2 class="col-span-2 text-center text-xl leading-none text-gray-200">
            {{ languageStore.language === 'pt' ? 'Manhã' : 'Morning' }}
          </h2>
          <Input
            v-model="morningStart"
            :label="
              languageStore.language === 'pt' ? 'Início da jornada' : 'Clock in'
            "
            required
            autofocus
          />
          <Input
            v-model="morningEnd"
            :label="
              languageStore.language === 'pt'
                ? 'Saída para intervalo'
                : 'Break in'
            "
          />
        </div>
        <div
          class="grid grid-cols-2 gap-x-5 gap-y-3 rounded-lg border border-gray-600 p-5"
        >
          <h2 class="col-span-2 text-center text-xl leading-none text-gray-200">
            {{ languageStore.language === 'pt' ? 'Tarde' : 'Afternoon' }}
          </h2>
          <Input
            v-model="afternoonStart"
            :label="
              languageStore.language === 'pt'
                ? 'Retorno do intervalo'
                : 'Break out'
            "
          />
          <Input
            v-model="afternoonEnd"
            :label="
              languageStore.language === 'pt'
                ? 'Término da jornada'
                : 'Clock out'
            "
            :focused="focused === 'afternoonEnd'"
          />
        </div>
        <div
          class="flex w-full flex-col gap-x-5 gap-y-5 rounded-lg border border-gray-600 p-5"
        >
          <h2 class="text-center text-xl leading-none text-gray-200">
            {{ languageStore.language === 'pt' ? 'Resultado' : 'Result' }}
          </h2>
          <Input
            v-model="totalWorkTime"
            class="!w-full"
            :focused="focused === 'totalWorkTime'"
          />
        </div>
        <div class="relative flex w-full flex-col gap-5 sm:flex-row">
          <button
            id="button"
            type="button"
            class="relative w-full rounded-lg bg-teal-800 p-3 text-sm text-gray-200 outline-none transition-all hover:bg-teal-900 focus:ring focus:ring-teal-600 lg:text-base"
            @click="calculate('calc-end')"
          >
            {{
              languageStore.language === 'pt'
                ? 'Calcular Término da Jornada'
                : 'Calculate End of Shift'
            }}
          </button>
          <button
            id="button"
            type="button"
            class="relative w-full rounded-lg bg-teal-800 p-3 text-sm text-gray-200 outline-none transition-all hover:bg-teal-900 focus:ring focus:ring-teal-600 lg:text-base"
            @click="calculate('calc-total')"
          >
            {{
              languageStore.language === 'pt'
                ? 'Calcular Total de Horas Trabalhadas'
                : 'Calculate Total Hours Worked'
            }}
          </button>
          <Transition
            name="fade"
            :duration="200"
          >
            <span
              v-if="isIncorrect"
              class="absolute top-20 flex w-full items-center justify-center text-sm text-red-500"
            >
              {{
                languageStore.language === 'pt'
                  ? 'Dados inválidos!'
                  : 'Invalid Data!'
              }}
            </span>
          </Transition>
        </div>
      </form>
    </div>
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
