<script>
import { usePhotoStore } from '@/stores/PhotoStore'
import AppBarComponent from '@/components/AppBarComponent.vue'
export default {
  components: { AppBarComponent },
  data(){
    return{
      photoStore : usePhotoStore(),
      fotos: []
    }
  },
  async mounted(){
    if(this.photoStore.getPhotos.length!==0){
      this.fotos = await this.photoStore.getPhotos;
    }else {
      await this.photoStore.updatePhotos()
      this.fotos = await this.photoStore.getPhotos;
    }
  }
}
</script>

<template>
  <AppBarComponent/>
  <main style="margin-top: 100px">
    <div v-for="(foto,index) in this.fotos.data" :key="index">
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