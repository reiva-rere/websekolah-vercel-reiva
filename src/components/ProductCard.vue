<script setup>
import { ref } from 'vue'

defineProps({
  nama: String,
  harga: Number,
  gambar: String
})

const ditambahkan = ref(false)
const zoomFoto = ref(false)

const tambahKeKeranjang = () => {
  ditambahkan.value = true

  setTimeout(() => {
    ditambahkan.value = false
  }, 2000)
}

const bukaZoom = () => {
  zoomFoto.value = true
}

const tutupZoom = () => {
  zoomFoto.value = false
}
</script>

<template>
  <div
    class="group overflow-hidden rounded-2xl border border-pink-100 bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
  >

    <!-- Foto Produk -->
    <div
      class="cursor-zoom-in overflow-hidden"
      @click="bukaZoom"
    >
      <img
        :src="gambar"
        :alt="nama"
        class="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
      />
    </div>

    <!-- Informasi Produk -->
    <div class="p-5">

      <h2 class="mb-2 text-lg font-bold capitalize text-pink-500">
        {{ nama }}
      </h2>

      <p class="mb-4 text-lg font-extrabold text-purple-500">
        Rp {{ harga.toLocaleString('id-ID') }}
      </p>

      <!-- Tombol Keranjang -->
      <button
        type="button"
        @click="tambahKeKeranjang"
        class="w-full rounded-full border-2 border-pink-300 bg-white px-5 py-3 font-bold text-pink-500 shadow-sm transition duration-300 hover:bg-pink-400 hover:text-white hover:shadow-lg"
      >
        🛒 Tambah ke Keranjang
      </button>

      <!-- Pesan Berhasil -->
      <p
        v-if="ditambahkan"
        class="mt-3 rounded-full bg-white-100 px-4 py-2 text-center text-sm font-semibold text-orange-600"
      >
        ✓ Ditambahkan ke keranjang
      </p>

    </div>
  </div>

  <!-- Modal Zoom Foto -->
  <div
    v-if="zoomFoto"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-5"
    @click="tutupZoom"
  >

    <!-- Tombol Close -->
    <button
      type="button"
      class="absolute right-6 top-6 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl font-bold text-pink-500 shadow-lg transition hover:scale-110 hover:bg-pink-100"
      @click="tutupZoom"
    >
      ✕
    </button>

    <!-- Foto Besar -->
    <img
      :src="gambar"
      :alt="nama"
      class="max-h-[90vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl transition duration-300"
      @click.stop
    />

  </div>
</template>
