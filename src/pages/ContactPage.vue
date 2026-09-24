<script setup>
import { ref } from 'vue'

const nama = ref('')
const email = ref('')
const pesan = ref('')
</script>

<template>
  <div class="min-h-screen bg-pink-50">
    <main class="mx-auto max-w-5xl px-5 py-10 md:py-14">

      <!-- Banner -->
      <section
        class="rounded-3xl bg-gradient-to-br from-pink-200 via-purple-200 to-pink-300 px-6 py-14 text-center text-white shadow-xl shadow-pink-100"
      >
        <h1 class="text-3xl font-extrabold md:text-4xl">
          Hubungi Kami
        </h1>

        <p class="mt-3 text-sm text-white/90 md:text-base">
          Kami siap membantu dan melayani anda
        </p>
      </section>

      <!-- Konten Contact -->
      <section class="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">

        <!-- Info Kontak -->
        <div
          class="rounded-3xl bg-gradient-to-br from-pink-100 to-purple-100 p-7 shadow-lg shadow-pink-100"
        >
          <h2 class="mb-6 text-2xl font-bold text-pink-500">
            Info Kontak
          </h2>

          <div class="space-y-5">

            <div class="flex items-center gap-4">
              <div
                class="flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl shadow-sm"
              >
                📍
              </div>

              <div>
                <p class="font-semibold text-gray-700">
                  Alamat
                </p>

                <p class="text-sm text-gray-600">
                  KiaraCondong, Bandung
                </p>
              </div>
            </div>

            <div class="flex items-center gap-4">
              <div
                class="flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl shadow-sm"
              >
                ☎️
              </div>

              <div>
                <p class="font-semibold text-gray-700">
                  Telepon
                </p>

                <p class="text-sm text-gray-600">
                  083144903859
                </p>
              </div>
            </div>

            <div class="flex items-center gap-4">
              <div
                class="flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl shadow-sm"
              >
                ✉️
              </div>

              <div>
                <p class="font-semibold text-gray-700">
                  Email
                </p>

                <p class="break-all text-sm text-gray-600">
                  EleganceIsTamlees@gmail.com
                </p>
              </div>
            </div>

            <div class="flex items-center gap-4">
              <div
                class="flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl shadow-sm"
              >
                🕰️
              </div>

              <div>
                <p class="font-semibold text-gray-700">
                  Jam Operasional
                </p>

                <p class="text-sm text-gray-600">
                  Open 07:30 - Close 22:00
                </p>
              </div>
            </div>

          </div>
        </div>

        <!-- Form -->
        <div
          class="rounded-3xl bg-white p-7 shadow-lg shadow-pink-100"
        >
          <h2 class="mb-6 text-2xl font-bold text-purple-500">
            Kirim Pesan
          </h2>

          <form class="space-y-5">

            <!-- Nama -->
            <div>
              <label
                for="nama"
                class="mb-2 block text-sm font-semibold text-gray-700"
              >
                Nama
              </label>

              <input
                id="nama"
                v-model="nama"
                type="text"
                placeholder="Nama kamu"
                class="w-full rounded-xl border border-pink-200 bg-pink-50 px-4 py-3 text-gray-700 outline-none transition focus:border-pink-400 focus:bg-white focus:ring-2 focus:ring-pink-200"
              />
            </div>

            <!-- Email -->
            <div>
              <label
                for="email"
                class="mb-2 block text-sm font-semibold text-gray-700"
              >
                Email
              </label>

              <input
                id="email"
                v-model="email"
                type="email"
                placeholder="email@contoh.com"
                class="w-full rounded-xl border border-pink-200 bg-pink-50 px-4 py-3 text-gray-700 outline-none transition focus:border-pink-400 focus:bg-white focus:ring-2 focus:ring-pink-200"
              />
            </div>

            <!-- Pesan -->
            <div>
              <label
                for="pesan"
                class="mb-2 block text-sm font-semibold text-gray-700"
              >
                Pesan
              </label>

              <textarea
                id="pesan"
                v-model="pesan"
                rows="4"
                placeholder="Tulis pesan kamu di sini..."
                class="w-full resize-none rounded-xl border border-pink-200 bg-pink-50 px-4 py-3 text-gray-700 outline-none transition focus:border-pink-400 focus:bg-white focus:ring-2 focus:ring-pink-200"
              ></textarea>
            </div>

            <!-- Tombol -->
            <button
              type="button"
              class="w-full rounded-full bg-gradient-to-r from-pink-400 to-purple-400 px-6 py-3 font-bold text-white shadow-md transition duration-300 hover:-translate-y-1 hover:from-pink-500 hover:to-purple-500 hover:shadow-lg"
            >
              Kirim Pesan 
            </button>
            <P>terimakasih pesanan akan segera kami proses.</P>

          </form>
        </div>

      </section>
    </main>
  </div>
</template>
