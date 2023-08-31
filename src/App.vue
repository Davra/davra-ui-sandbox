<template>
    <RouterView />
</template>

<script lang="ts" setup>
  import { useDashboardsStore, useUserSessionStore } from '@connecthing.io/davra-ui'
  import { onMounted } from 'vue';
    onMounted( () => {
      useUserSessionStore()
      const dashbaordsStore = useDashboardsStore()
      dashbaordsStore.dashboardsPagePath = '/dashboards'

    })
</script>
