<script>
import { useLoginStore } from '@/stores/LoginStore'

export default {
  data() {
    return {
      loginStore: useLoginStore(),
      user: '',
      passwd: '',
      userExists:false
    }
  }, methods: {
    async register() {
      if(!await this.loginStore.userExists(this.user)){
        this.loginStore.insertUSer(this.user, this.passwd)
        this.$router.push("/home")
      }else {
        this.userExists=true
        console.log("Usuario ya existe")
      }
    }
  }
}
</script>

<template>
  <form class="mt-16">
    <v-row>
      <v-spacer />
      <v-col cols="10" md="4" lg="3" class="formBox">
        <h1 class="text-center mb-5 font-weight-bold text-black"> LOGIN</h1>
        <p v-if="userExists" class="text-center text-red"> Usario ya existe</p>
        <v-row>
          <v-spacer />
          <v-col cols="10">
            <v-text-field label="Username" required v-model="user" base-color="#000000"
                          class="text-black"></v-text-field>
          </v-col>
          <v-spacer />
        </v-row>
        <v-row>
          <v-spacer />
          <v-col cols="10">
            <v-text-field label="Password" type="password" required v-model="passwd" base-color="#000000"
                          class="text-black"></v-text-field>
          </v-col>
          <v-spacer />
        </v-row>
        <v-row>
          <v-spacer />
          <v-col cols="4">
            <v-btn @click="register" color="green">REGISTER</v-btn>
          </v-col>
          <v-spacer/>
          <v-col cols="4">
            <v-btn @click="login" color="blue">LOGIN</v-btn>

          </v-col>
          <v-spacer />
        </v-row>
      </v-col>
      <v-spacer />
    </v-row>
  </form>
</template>

<style scoped>
.formBox {
  border: 10px solid black;
  border-radius: 30px;
  background: white;
}
</style>