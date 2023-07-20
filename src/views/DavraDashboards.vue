<script setup lang="ts">
import { DashboardsListPage, DashboardsList, DashboardCard, DashboardFormModal, DashboardSearch, DashboardSortBySelector } from '@connecthing.io/davra-ui'
</script>
<template>
    <div>
        <DashboardsListPage>
            <template #header>
                <div class="border-pink" style="width :300px;">
                    <v-chip color="pink">#sortby</v-chip>
                    <DashboardSearch />
                </div>
            </template>
            <template #sortby>
                <div class="border-pink"  style="width :300px;">
                    <v-chip color="pink">#sortby</v-chip>
                    <DashboardSortBySelector />
                </div>
            </template>
            <template #add-button="{ canCreate }">
                <div class="border-pink"  style="width :300px;">
                    <v-chip color="pink">#add-button</v-chip>
                    <v-btn v-if="canCreate" data-testid="dashboards-add-btn" class="dashboard-add-button" prepend-icon="mdi-plus" color="primary">
                        new dashboard
                        
                        <DashboardFormModal parent-activator />
                    </v-btn>
                </div>
            </template>
  
            <template #dashboardsList>
                <div class="border-pink">
                    <v-chip color="pink">#dashboardsList</v-chip>
                    <DashboardsList>
                        <template #dashboardCard="{ dashboard, canCreate, dashboardPath }">
                            <div class="border-pink">
                                <v-chip color="pink">#dashboardCard</v-chip>

                                <DashboardCard :dashboard-path="dashboardPath" :dashboard="dashboard" min-width="365"
                                    :can-edit="canCreate" />
                            </div>
                        </template>
                    </DashboardsList>
                </div>

            </template>

        </DashboardsListPage>

    </div>
</template>