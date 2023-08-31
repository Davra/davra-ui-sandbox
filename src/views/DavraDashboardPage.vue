
<script setup lang="ts">
import { DashboardPage, DashboardDrawer, DashboardEditWidgetModal, DashboardGridItem } from '@connecthing.io/davra-ui'
import { onMounted,ref } from 'vue'
const props = defineProps<{ uuid: string }>()

const dashPage = ref(null)

onMounted(() => {
  console.log(dashPage.value)

})
</script>

<template>

  <DashboardPage ref="dashPage" :uuid="props.uuid" default-view-mode >
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

    <template #dashboard-grid-item="dashboardGridItemsProps">

      <DashboardGridItem v-if="dashboardGridItemsProps.item.i !== -2" :ref="(el:any) => dashboardGridItemsProps.addRef(el, dashboardGridItemsProps.item.i)" :model-value="dashboardGridItemsProps.item" :filters="dashboardGridItemsProps.filters"
        :is-editing="dashboardGridItemsProps.isEditing" @update:model-value="dashboardGridItemsProps.update" @removeWidget="dashboardGridItemsProps.remove" @duplicateWidget="dashboardGridItemsProps.duplicate">

         <template #dashboard-edit-widget-modal="editWidgetProps">

          <DashboardEditWidgetModal :ref="(el:any) => editWidgetProps.setModalRef(el)" v-model="editWidgetProps.widget" :filters="editWidgetProps.filters"
            @remove-widget="dashboardGridItemsProps.remove(editWidgetProps.widget)" @update:model-value="dashboardGridItemsProps.update" >

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

