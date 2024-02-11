import { defineStore } from 'pinia'
import { supabase } from '@/lib/supabaseClient'

export const useLoginStore = defineStore('login', {
  state:()=>({
    userName: null,
    userList:[]
  }),getters: {
    getUser(){return this.userName}
  },actions:{
    setUser(newUserName){
      this.userName=newUserName;
    },
    async updateList(){
      this.userList= await supabase.from('Users').select()
    },
    insertUSer(user,passw){
      supabase.from('Users').insert({ username: user, passwd: passw }).then (r =>
        console.log(r)
      )
      this.setUser(user)
    },
    async userExists(user){
      await this.updateList()
      let check = false
      for (let login in this.userList.data) {
        if (this.userList.data[login].username === user) {
          check = true
        }
      }
      return check
    }
  }
})
