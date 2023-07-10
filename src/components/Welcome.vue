<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <div class="text-body-2 font-weight-light mb-n1">Welcome to</div>

      <v-img width="300" src="@/assets/logo.png" style="margin:auto"/>


      <h1 class="text-h2 font-weight-bold pt-6">UI Sandbox</h1>

      <div class="py-14" />

      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <v-btn
            to="dashboards"
            min-width="164"
            rel="noopener noreferrer"
            variant="text"
          >
            <v-icon
              icon="mdi-view-dashboard"
              size="large"
              start
            />
            q

            dashbaords
          </v-btn>
        </v-col>

        <v-col cols="auto">

        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup>
  //
</script>
