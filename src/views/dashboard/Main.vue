<template>
  <div class="flex">
    <Transition :duration="{ enter: 800, leave: 200 }" name="slide-fade">
      <nav
        v-show="menu"
        class="hidden md:block bg-primary-dark w-56 px-1 dark:bg-gray-800"
      >
        <div class="my-5">
          <a href="/" class="flex justify-center mb-5">
            <img src="/src/assets/logo.png" class="w-2/3" alt="GHiperERP" />
          </a>
          <ul class="space-y-2">
            <li>
              <a
                href="#"
                class="
                  flex
                  items-center
                  p-2
                  text-base
                  font-normal
                  text-gray-50
                  rounded-lg
                  dark:text-white
                  hover:bg-primary
                  dark:hover:bg-gray-700
                "
              >
                <svg
                  aria-hidden="true"
                  class="
                    w-6
                    h-6
                    text-gray-50
                    transition
                    duration-75
                    dark:text-gray-400
                    group-hover:text-gray-50
                    dark:group-hover:text-white
                  "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
                <span class="ml-3">CADASTROS</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="
                  flex
                  items-center
                  p-2
                  text-base
                  font-normal
                  text-gray-50
                  rounded-lg
                  dark:text-white
                  hover:bg-primary
                  dark:hover:bg-gray-700
                "
              >
                <svg
                  aria-hidden="true"
                  class="
                    flex-shrink-0
                    w-6
                    h-6
                    text-gray-50
                    transition
                    duration-75
                    dark:text-gray-400
                    group-hover:text-gray-50
                    dark:group-hover:text-white
                  "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  ></path>
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">FINANCEIRO</span>
                <span
                  class="
                    inline-flex
                    justify-center
                    items-center
                    px-2
                    ml-3
                    text-sm
                    font-medium
                    text-gray-800
                    bg-gray-200
                    rounded-full
                    dark:bg-gray-700 dark:text-gray-300
                  "
                  >Pro</span
                >
              </a>
            </li>
            <li>
              <a
                href="#"
                class="
                  flex
                  items-center
                  p-2
                  text-base
                  font-normal
                  text-gray-50
                  rounded-lg
                  dark:text-white
                  hover:bg-primary
                  dark:hover:bg-gray-700
                "
              >
                <svg
                  aria-hidden="true"
                  class="
                    flex-shrink-0
                    w-6
                    h-6
                    text-gray-50
                    transition
                    duration-75
                    dark:text-gray-400
                    group-hover:text-gray-50
                    dark:group-hover:text-white
                  "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"
                  ></path>
                  <path
                    d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
                  ></path>
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">ESTOQUE</span>
                <span
                  class="
                    inline-flex
                    justify-center
                    items-center
                    p-3
                    ml-3
                    w-3
                    h-3
                    text-sm
                    font-medium
                    text-blue-600
                    bg-blue-200
                    rounded-full
                    dark:bg-blue-900 dark:text-blue-200
                  "
                  >3</span
                >
              </a>
            </li>
            <li>
              <a
                href="#"
                class="
                  flex
                  items-center
                  p-2
                  text-base
                  font-normal
                  text-gray-50
                  rounded-lg
                  dark:text-white
                  hover:bg-primary
                  dark:hover:bg-gray-700
                "
              >
                <svg
                  aria-hidden="true"
                  class="
                    flex-shrink-0
                    w-6
                    h-6
                    text-gray-50
                    transition
                    duration-75
                    dark:text-gray-400
                    group-hover:text-gray-50
                    dark:group-hover:text-white
                  "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">FISCAL</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="
                  flex
                  items-center
                  p-2
                  text-base
                  font-normal
                  text-gray-50
                  rounded-lg
                  dark:text-white
                  hover:bg-primary
                  dark:hover:bg-gray-700
                "
              >
                <svg
                  aria-hidden="true"
                  class="
                    flex-shrink-0
                    w-6
                    h-6
                    text-gray-50
                    transition
                    duration-75
                    dark:text-gray-400
                    group-hover:text-gray-50
                    dark:group-hover:text-white
                  "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">VENDAS</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="
                  flex
                  items-center
                  p-2
                  text-base
                  font-normal
                  text-gray-50
                  rounded-lg
                  dark:text-white
                  hover:bg-primary
                  dark:hover:bg-gray-700
                "
              >
                <svg
                  aria-hidden="true"
                  class="
                    flex-shrink-0
                    w-6
                    h-6
                    text-gray-50
                    transition
                    duration-75
                    dark:text-gray-400
                    group-hover:text-gray-50
                    dark:group-hover:text-white
                  "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">PDV</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="
                  flex
                  items-center
                  p-2
                  text-base
                  font-normal
                  text-gray-50
                  rounded-lg
                  dark:text-white
                  hover:bg-primary
                  dark:hover:bg-gray-700
                "
              >
                <svg
                  aria-hidden="true"
                  class="
                    flex-shrink-0
                    w-6
                    h-6
                    text-gray-50
                    transition
                    duration-75
                    dark:text-gray-400
                    group-hover:text-gray-50
                    dark:group-hover:text-white
                  "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">OS</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="
                  flex
                  items-center
                  p-2
                  text-base
                  font-normal
                  text-gray-50
                  rounded-lg
                  dark:text-white
                  hover:bg-primary
                  dark:hover:bg-gray-700
                "
              >
                <svg
                  aria-hidden="true"
                  class="
                    flex-shrink-0
                    w-6
                    h-6
                    text-gray-50
                    transition
                    duration-75
                    dark:text-gray-400
                    group-hover:text-gray-50
                    dark:group-hover:text-white
                  "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap"
                  >COMANDAS / MESAS</span
                >
              </a>
            </li>
            <li>
              <a
                href="#"
                class="
                  flex
                  items-center
                  p-2
                  text-base
                  font-normal
                  text-gray-50
                  rounded-lg
                  dark:text-white
                  hover:bg-primary
                  dark:hover:bg-gray-700
                "
              >
                <svg
                  aria-hidden="true"
                  class="
                    flex-shrink-0
                    w-6
                    h-6
                    text-gray-50
                    transition
                    duration-75
                    dark:text-gray-400
                    group-hover:text-gray-50
                    dark:group-hover:text-white
                  "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">RELATORIOS</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </Transition>
    <section class="flex flex-col justify-between h-screen w-full">
      <header class="bg-white w-full h-12">
        <button class="h-full" @click="mostrarMenu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </button>
      </header>
      <div class="bg-fundo h-full">1</div>
      <div class="bg-red-100">1</div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: false,
    };
  },
  methods: {
    mostrarMenu() {
      this.menu = !this.menu;
    },
  },
};
</script>

<style>
.slide-fade-enter-active {
  transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}
</style>