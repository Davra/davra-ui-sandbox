
<script setup lang="ts">
import { DashboardPage, DashboardDrawer, } from '@connecthing.io/davra-ui'

const props = defineProps<{ uuid: string }>()
</script>

<template>
  <DashboardPage :uuid="props.uuid">
    <template #drawer="drawerProps">

      <DashboardDrawer v-model:isEditing="drawerProps.isEditing" @drag="drawerProps.drag" @dragend="drawerProps.dragend"
        @clicked="drawerProps.clicked">
        <template #pre-widget-window>
          <v-chip color="pink" class="ma-3"> #pre-widget-window </v-chip>
        </template>

        <template #widgets-window="widgetprops">
          <div class="border-pink">

            <v-chip color="pink" class="ma-3"> #widgets-window</v-chip>

            <v-sheet class="pa-3" data-testid="drawer-widgets-list">
              <div class="text-h6 text-primary mb-2">
                Add a widget
              </div>
              <span>
                <v-text-field data-testid="widget-search" label="Search" variant="outlined"
                  prepend-inner-icon="mdi-magnify" density="compact" />
              </span>
              <v-card v-for="widget in widgetprops.widgetsCatalog" :key="widget.name" variant="outlined"
                color="grey-lighten-2" class="pa-2 my-2" style="cursor: grab;" draggable="true" unselectable="on"
                @dragend="widgetprops.dragEnd(widget)" @drag="widgetprops.drag(widget)"
                @dragstart="widgetprops.dragStartHandler($event, widget)" @click="widgetprops.clicked(widget)">
                <div class="d-flex flex-no-wrap ">
                  <v-icon color="primary">
                    {{ widget.icon }}
                  </v-icon>
                  <span class="text-grey-darken-3 px-2">{{ widget.name }}</span>
                  <v-spacer />
                  <v-icon>
                    mdi-pin
                  </v-icon>
                </div>
              </v-card>
            </v-sheet>
          </div>
        </template>

        <template #post-widget-window>
          <v-chip color="pink" class="ma-3"> #post-widget-window </v-chip>
        </template>
      </DashboardDrawer>
    </template>
  </DashboardPage>
</template>

