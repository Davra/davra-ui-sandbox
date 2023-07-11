<template>
  <v-app>
    <v-main class="full-screen">
      <RouterView />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
  import { useDashboardsStore } from '@connecthing.io/davra-ui'
  import { onMounted } from 'vue';
    onMounted( () => {
      const dashbaordsStore = useDashboardsStore()
      dashbaordsStore.dashboardsPagePath = '/dashboards'
    })
</script>
