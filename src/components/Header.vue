<script setup lang="ts">
import { useLanguageStore } from '../stores/language';

const languageStore = useLanguageStore();

const setLanguage = () => {
  if (languageStore.language === 'pt') languageStore.setLanguage('en');
  else languageStore.setLanguage('pt');
};
</script>

<template>
  <header class="flex w-full justify-between p-6">
    <span class="flex items-center justify-center gap-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        class="h-6 w-6 text-gray-200"
        fill="currentColor"
      >
        <path
          d="M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"
        />
      </svg>
      <h1
        class="whitespace-pre-line text-xl leading-none text-gray-200 sm:whitespace-normal sm:text-2xl"
      >
        {{
          languageStore.language === 'pt'
            ? 'Calculadora de\n Horas Trabalhadas'
            : 'Clock Calculator'
        }}
      </h1>
    </span>
    <div class="flex items-center justify-center gap-8">
      <button
        aria-label="{{ globalStore.language === 'pt-BR' ? 'Change to English' : 'Mudar para português' }}"
        type="button"
        class="flex items-center justify-center gap-1.5 rounded-full text-gray-200 outline-none transition-colors duration-200 ease-in-out hover:underline"
        @click="setLanguage"
      >
        <span class="hidden pl-1 text-xs xs:block">
          {{ languageStore.language === 'pt' ? 'Português' : 'English' }}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
      <a
        href="https://danilo.duarteribeiro.com.br"
        target="_blank"
        rel="noreferrer, noopenner"
        class="group flex items-center justify-center gap-4 text-gray-200"
      >
        <p class="group-hover:underline">Danilo Ribeiro</p>
        <img
          src="https://avatars.githubusercontent.com/u/68981163?"
          class="duration-50 h-10 w-10 rounded-full transition-opacity ease-in-out group-hover:opacity-80"
        />
      </a>
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
