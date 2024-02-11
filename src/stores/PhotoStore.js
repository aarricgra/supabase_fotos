import { defineStore } from 'pinia'
import { supabase } from '@/lib/supabaseClient'

export const usePhotoStore = defineStore('photo', {
  state:()=>({
    photos:[]
  }),getters: {
    getPhotos(){return this.photos}
  },actions:{
    async updatePhotos(){
      this.photos= await supabase.from('Fotos').select();
    }
  }
})
