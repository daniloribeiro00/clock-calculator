<template>
  <header class="flex w-full justify-between p-6">
    <span class="flex items-center justify-center gap-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        class="h-6 w-6 text-white"
        fill="currentColor"
      >
        <path
          d="M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"
        />
      </svg>
      <h1
        class="whitespace-pre-line text-xl leading-none text-white sm:whitespace-normal sm:text-2xl"
      >
        {{ 'Calculadora de\n Horas Trabalhadas' }}
      </h1>
    </span>
    <div class="flex items-center justify-center gap-4">
      <a
        href="https://danilo.duarteribeiro.com.br"
        target="_blank"
        rel="noreferrer, noopenner"
        class="group flex items-center justify-center gap-4 text-white"
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
