<template>
  <div>
    <aside
      class="flex flex-col lg:items-center bg-white text-gray-700 shadow h-full"
    >
      <!-- Side Nav Bar-->

      <ul class="flex justify-evenly border border-black w-full">
        <!-- Items Section -->

        <li class="hover:bg-gray-100">
          <a
            href="/individual-home"
            class="
              h-14
              w-16
              px-4
              flex flex
              justify-center
              items-center
              focus:text-orange-500
            "
          >
            <img
              class="mx-auto"
              src="../assets/icons/home.png"
              alt="Home"
            />
          </a>
        </li>

        <li class="hover:bg-gray-100">
          <a
            href="/individual-home"
            class="
                h-14
              w-16
              px-4
              flex flex
              justify-center
              items-center
              focus:text-orange-500
            "
          >
            <img
              class="mx-auto"
              src="../assets/icons/qr-code.png"
              alt="qe code"
            />
          </a>
        </li>

        <li class="hover:bg-gray-100">
          <a
            href="/individual-health-declaration-form"
            class="
                h-14
              w-16
              px-4
              flex flex
              justify-center
              items-center
              focus:text-orange-500
            "
          >
            <img
              class="mx-auto"
              src="../assets/icons/question.png"
              alt="svelte logo"
            />
          </a>
        </li>

        <li class="hover:bg-gray-100">
          <a
            href="/individual-update-profile"
            class="
                h-14
              w-16
              px-4
              flex flex
              justify-center
              items-center
              focus:text-orange-500
            "
          >
            <img
              class="mx-auto"
              src="../assets/icons/settings.png"
              alt="svelte logo"
            />
          </a>
        </li>
     <li class="hover:bg-gray-100">
          <!-- Action Section -->
          <button
            @click="logout"
            class="
                h-14
              w-16
              px-4
              flex flex
              justify-center
              items-center
              focus:text-orange-500
            "
          >
            <svg
              class="h-5 w-5 text-red-700"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
          </button>
        </li>
      </ul>
    </aside>
  </div>
</template>


<script>
import { defineComponent } from "vue";

export default defineComponent({
  components: {},

  methods: {
    logout() {
      this.$router.push("/individual-login");
    },
  },
});
</script>