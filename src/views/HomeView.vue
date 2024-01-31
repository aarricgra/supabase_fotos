<script>
import { supabase } from '@/lib/supabaseClient'

export default {
  data(){
    return{
      img:"",
      desc:"",
      fotos:[]
    }
  },
  async mounted(){
    const { data } = await supabase.from('Fotos').select()
    this.fotos = data
    console.log(this.fotos)
  }
}
</script>

<template>
  <main style="width: 100%">
    <form>
      <v-row>
        <v-col cols="5">
          <v-text-field label="Descripción" required v-model="desc"></v-text-field>
        </v-col>
        <v-col cols="5">
          <v-text-field label="Imagen URL" required v-model="img"></v-text-field>
        </v-col>
        <v-col cols="2">
          <v-btn type="submit" block
                 class="mt-2"
                 text="Submit"
          width="30%"
          color="#293842"></v-btn>
        </v-col>
      </v-row>
    </form>
<!--    {{img}}/{{desc}}-->
    <div v-for="foto in this.fotos" :key="foto.id">
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