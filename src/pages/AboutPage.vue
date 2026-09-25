<template>
  <div class="about-page">

    <!-- Bagian 1: Cerita Kami -->
    <section class="cerita-kami">
      <h1>Cerita Kami</h1>
      <div class="cerita-content">
      <div class="cerita-teks">
          <p>
            Berawal dari kecintaan kami terhadap produk-produk lokal
              berkualitas, toko ini didirikan pada tahun 2024 oleh
              pemilik toko. ia percaya bahwa belanja online
              seharusnya terasa personal dan menyenangkan.
          </p>
          <p>
            Kami memilih sendiri setiap produk yang dijual — memastikan kualitas,
            harga yang jujur, dan pengalaman pelanggan yang hangat. Bagi kami,
            setiap pesanan bukan sekadar transaksi, melainkan kepercayaan yang
            harus kami jaga.
          </p>
          <p>
            Visi kami sederhana: menjadi toko online yang kalian rekomendasikan
            ke teman tanpa ragu.
            </p>
            </div>
        </div>
        <div class="cerita-gambar">
          <!-- Ganti src dengan gambar asli jika tersedia -->
          <div class="placeholder-img">
            <img src="https://i.pinimg.com/736x/c9/51/a7/c951a7a7018ac9f9eac9554b0502fbfa.jpg" alt="">

        </div>
      </div>
    </section>

    <!-- Bagian 2: Tim Kami -->
    <section class="tim-kami">
      <h1>Tim Kami</h1>
      <div class="tim-grid">
        <TeamCard
          v-for="anggota in daftarTim"
          :key="anggota.id"
          :nama="anggota.nama"
          :jabatan="anggota.jabatan"
        />
      </div>
    </section>

  </div>
</template>

<script setup>
import TeamCard from '../components/TeamCard.vue'

const daftarTim = [
  { id: 1, nama: 'Reiva Sifana', jabatan: 'Founder & CEO' },
  { id: 2, nama: 'Azriel Tirta WH', jabatan: 'UI/UX Designer' },
  { id: 3, nama: 'Aksara Gabriel', jabatan: 'Backend Developer' },
  { id: 4, nama: 'Cherly Ancika', jabatan: 'Marketing Manager' }
]
</script>

<style scoped>
img {
height: 380px;
width: 480px;
border-radius: 15px;

}

.about-page {
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
}

/* === Cerita Kami === */
.cerita-kami h1 {
  margin-bottom: 24px;
  color: rgb(174, 36, 144);
}

.cerita-content {
  display: flex;
  align-items: center;
  gap: 40px;
}

.cerita-teks {
  flex: 1;
}

.cerita-teks p {
  line-height: 1.7;
  color:rgb(220, 53, 181);
  margin-bottom: 12px;
}

.cerita-gambar {
  flex: 1;
}

.placeholder-img {
  width:100%;
  height: 280px;
 display: flex;
 justify-content: flex-end;
  border-radius: 12px;
  font-size: 3rem;
  color: #76ddf0;
}
/* display: flex;
flex-direction: column;
/* align-items: center; 
justify-content: flex-end; */

.placeholder-img span {
  font-size: 0.9rem;
  margin-top: 8px;
}

/* === Tim Kami === */
.tim-kami {
  margin-top: 60px;
}

.tim-kami h1 {
  margin-bottom: 24px;
  color: rgb(225, 45, 222);
}

.tim-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
}
</style>