
<template>
  <div class="min-h-screen bg-pink-50">

    <!-- Container Utama -->
    <div class="mx-auto max-w-5xl px-5 py-10 md:py-14">

      <!-- =========================
           CERITA KAMI
      ========================== -->
      <section
        class="overflow-hidden rounded-3xl bg-white p-6 shadow-lg shadow-pink-100 md:p-10"
      >

        <div class="mb-8 text-center">
          <span
            class="rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-500"
          >
             Tentang Kami
          </span>

          <h1
            class="mt-4 text-3xl font-extrabold text-pink-500 md:text-4xl"
          >
            Cerita Kami
          </h1>

          <div
            class="mx-auto mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-pink-300 to-purple-400"
          ></div>
        </div>

        <!-- Content -->
        <div
          class="flex flex-col items-center gap-10 md:flex-row"
        >

          <!-- Teks -->
          <div class="flex-1">
            <p class="mb-4 leading-7 text-gray-600">
              Berawal dari kecintaan kami terhadap produk-produk lokal
              berkualitas, toko ini didirikan pada tahun 2024 oleh
              pemilik toko. ia percaya bahwa belanja online
              seharusnya terasa personal dan menyenangkan.
            </p>

            <p class="mb-4 leading-7 text-gray-600">
              Kami memilih sendiri setiap produk yang dijual — memastikan
              kualitas, harga yang jujur, dan pengalaman pelanggan yang
              hangat. Bagi kami, setiap pesanan bukan sekadar transaksi,
              melainkan kepercayaan yang harus kami jaga.
            </p>

            <p class="leading-7 text-gray-600">
               kami yakin ini menjadi toko online yang kalian
              rekomendasikan ke teman tanpa ragu. 
            </p>

            <!-- Highlight -->
            <div
              class="mt-6 rounded-2xl border-l-4 border-pink-400 bg-pink-50 p-4"
            >
              <p class="text-sm font-medium italic text-pink-600">
                "Belanja dengan nyaman, tampil lebih percaya diri." 
              </p>
            </div>
          </div>

          <!-- Gambar -->
          <div class="w-full flex-1">
            <div
              class="overflow-hidden rounded-3xl bg-gradient-to-br from-pink-200 to-purple-200 p-2 shadow-lg"
            >
              <img
                src="https://i.pinimg.com/736x/c9/51/a7/c951a7a7018ac9f9eac9554b0502fbfa.jpg"
                alt="Cerita Sifareiva Onlineshop"
                class="h-[300px] w-full rounded-2xl object-cover transition duration-500 hover:scale-105"
              />
            </div>
          </div>

        </div>
      </section>


      <!-- =========================
           TIM KAMI
      ========================== -->
      <section class="mt-16">

        <!-- Judul -->
        <div class="mb-8 text-center">

          <span
            class="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-500"
          >
          
          </span>

          <h1
            class="mt-4 text-3xl font-extrabold text-purple-500 md:text-4xl"
          >
            Tim Kami
          </h1>

          <p class="mx-auto mt-3 max-w-xl text-gray-500">
            Kenali orang-orang hebat yang bekerja di balik
            Sifareiva Onlineshop.
          </p>

        </div>

        <!-- Team Grid -->
        <div
          class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          <TeamCard
            v-for="anggota in daftarTim"
            :key="anggota.id"
            :nama="anggota.nama"
            :jabatan="anggota.jabatan"
          />
        </div>

      </section>

    </div>

  </div>
</template>

<script setup>
import TeamCard from '../components/TeamCard.vue'

const daftarTim = [
  {
    id: 1,
    nama: 'Reiva sifana MA',
    jabatan: 'Founder & CEO'
  },
  {
    id: 2,
    nama: 'Azriel Tirta WH',
    jabatan: 'UI/UX Designer'
  },
  {
    id: 3,
    nama: 'Aksara Dinata ',
    jabatan: 'Backend Developer'
  },
  {
    id: 4,
    nama: 'Cherly Ancika ',
    jabatan: 'Marketing Manager'
  }
]
</script>
