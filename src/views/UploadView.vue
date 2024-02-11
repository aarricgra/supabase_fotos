<script>
import AppBarComponent from '@/components/AppBarComponent.vue'
export default {
  components: { AppBarComponent },
  data(){
    return{
      desc:"",
      img:""
    }
  },methods:{

  }
}
</script>

<template>
<main>
  <AppBarComponent/>
  <form style="margin-top: 100px">
    <v-row>
      <v-spacer/>
      <v-col cols="10" md="5" align="center">
        <v-row>
          <v-spacer/>
          <v-col cols="8">
            <v-img :src="img" height="400px" class="altFoto"></v-img>
          </v-col>
          <v-spacer/>
        </v-row>
      </v-col>
      <v-spacer/>
    </v-row>
    <v-row>
      <v-spacer/>
      <v-col cols="10" md="8">
        <v-text-field label="Descripción" required v-model="desc"></v-text-field>
      </v-col>
      <v-spacer/>
    </v-row>
    <v-row>
      <v-spacer/>
      <v-col cols="10" md="8">
        <v-text-field label="Imagen URL" required v-model="img"></v-text-field>
      </v-col>
      <v-spacer/>
    </v-row>
    <v-row>
      <v-spacer/>
      <v-col cols="10" md="8">
        <v-btn type="submit" block
               class="mt-2"
               text="Submit"
               width="30%"
               color="#293842"></v-btn>
      </v-col>
      <v-spacer/>
    </v-row>
  </form>
</main>
</template>

<style scoped>
.altFoto{
  background-image: url('https://img.freepik.com/free-vector/modern-question-mark-template-idea-message-vector_1017-47932.jpg');background-size: 400px
}
</style>