<script setup>
</script>

<template>
  <v-app-bar fixed>
    <RouterLink to="/home">
      <v-btn class="font-weight-bold">
        HOME
      </v-btn>
    </RouterLink>
    <RouterLink to="/upload">
      <v-btn class="font-weight-bold">
        UPLOAD
      </v-btn>
    </RouterLink>
    <v-spacer></v-spacer>
    <RouterLink to="/">
      <v-btn class="font-weight-bold">
        LOG OUT
      </v-btn>
    </RouterLink>
  </v-app-bar>
</template>

<style>

</style>