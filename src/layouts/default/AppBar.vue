<template>
  <v-app-bar flat>
    <v-app-bar-title >
      Davra-ui Sandbox
    </v-app-bar-title>
    
    
    <router-link :to="{ name: 'Home'}">
      <v-btn color="primary"  >
        home
      </v-btn>
    </router-link>
    <router-link :to="{ name: 'Dashboards'}">
      <v-btn   color="primary">
        dashboards
      </v-btn>
    </router-link>
    <v-spacer></v-spacer>


  </v-app-bar>
</template>

<script lang="ts" setup>
  //
</script>
