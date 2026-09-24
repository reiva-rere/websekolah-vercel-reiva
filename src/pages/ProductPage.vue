<script setup>
import ProductCard from '../components/ProductCard.vue'
 
const daftarProduk = [
  {
    id: 1,
    nama: 'gaun elegant',
    harga: 1250000,
    gambar:
      'https://i.pinimg.com/1200x/03/90/f4/0390f4b0a23ef55c44c118cdecef65cd.jpg'
  },
  {
    id: 2,
    nama: 'flatshoes wanita',
    harga: 550000,
    gambar:
      'https://i.pinimg.com/736x/9d/75/e7/9d75e7579c1acc3aafc9b29e3deadba9.jpg'
  },
   {
    id: 3,
    nama: 'tas wanita elegant',
    harga: 998000,
    gambar:
      'https://i.pinimg.com/736x/dd/77/10/dd7710a7a617aefe628d88d4d30f22db.jpg'
  },
  {
    id: 4,
    nama: 'gaun mewah',
    harga: 5285000,
    gambar:
      'https://i.pinimg.com/736x/2f/f3/69/2ff369d25c40efb6c04a50db4f012ac5.jpg'
  },
  {
    id: 5,
    nama: 'high heels',
    harga: 1285000,
    gambar:
      'https://i.pinimg.com/736x/7e/3d/f4/7e3df4a356592bcab2d4c015e93e4588.jpg'
  },
   {
    id: 6,
    nama: 'tas charles&keith',
    harga: 828000,
    gambar:
      'https://i.pinimg.com/736x/dc/50/b3/dc50b3a6792c6413793d1b6b9e2d06ee.jpg'
  },
  {
    id: 7,
    nama: 'gaun pengantin',
    harga: 7320000,
    gambar:
      'https://i.pinimg.com/736x/da/b7/1c/dab71c577ba9d575d3f16a1186408edc.jpg'
  },
  {
    id: 8,
    nama: 'gaun pengantin',
    harga: 4233000,
    gambar:
      'https://i.pinimg.com/736x/5c/7e/a4/5c7ea4a7ebb6c02cbc35855e92e1cc6a.jpg'
  },
  {
    id: 9,
    nama: 'flatshoes',
    harga: 550000,
    gambar:
      'https://i.pinimg.com/736x/9d/08/f2/9d08f22a0af25e919c6aa0e31e71c408.jpg'
  },
  {
    id: 10,
    nama: 'shoulder bag',
    harga: 445000,
    gambar:
      'https://i.pinimg.com/736x/a9/f1/bc/a9f1bc2e4e41d60876e02921214adafa.jpg'
  }
]
</script>
 
<template>
  <main>
    <h1>Produk Kami</h1>
    <div class="grid">
      <ProductCard
        v-for="produk in daftarProduk"
        :key="produk.id"
        :nama="produk.nama"
        :harga="produk.harga"
        :gambar="produk.gambar"
      />
    </div>
  </main>
</template>
 
<style scoped>
.grid {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}
</style>