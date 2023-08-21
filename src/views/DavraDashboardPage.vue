
<script setup lang="ts">
import { DashboardPage, DashboardDrawer, DashboardEditWidgetModal, DashboardGridItem } from '@connecthing.io/davra-ui'

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

    <template #dashboard-grid-item="{ item, filters, isEditing, update, remove, duplicate, addRef }">

      <DashboardGridItem v-if="item.i !== -2" :ref="(el) => addRef(el, item.i)" :model-value="item" :filters="filters"
        :is-editing="isEditing" @update:model-value="update" @removeWidget="remove" @duplicateWidget="duplicate">

        <template #dashboard-edit-widget-modal="editWidgetProps">

          <DashboardEditWidgetModal :ref="(el) => editWidgetProps.setModalRef(el)" v-model="editWidgetProps.widget" :filters="editWidgetProps.filters"
            @remove-widget="remove(editWidgetProps.widget)">

            <template #toolbar-append="{ dismissConfig, saveConfig }">
              <v-btn size="small" color="white" variant="text" @click="dismissConfig">
                Cancel
              </v-btn>
              <v-btn size="small" class="mx-3 bg-white" color="pink" variant="outlined" @click="saveConfig">
                Save Config
              </v-btn>
            </template>

          </DashboardEditWidgetModal>

        </template>
        
      </DashboardGridItem>

    </template>
  </DashboardPage>
</template>

