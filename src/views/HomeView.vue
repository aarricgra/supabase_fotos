<script setup>
import { supabase } from '../lib/supabaseClient'
import { ref, onMounted } from 'vue'
const fotos = ref([])

async function getFotos() {
  const { data } = await supabase.from('Fotos').select()
  fotos.value = data
}

onMounted(() => {
  getFotos()
})
</script>

<template>
  <main style="width: 100%">
    <div v-for="foto in fotos" :key="foto.id">
      <div style="width: 100%;">
        <h1 style="text-align: center">Descripción: {{foto.desc}}</h1>
      </div>
      <div style="margin-top: 20px; margin-bottom: 50px">
        <center>
          <img :src="foto.url" alt="" height="200px">
        </center>
      </div>
    </div>
  </main>
</template>

<script>

</script>