/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

import { DavraApiConfig } from '@connecthing.io/davra-ui'

DavraApiConfig.baseURL = import.meta.env.VITE_PLATFROM_URL
DavraApiConfig.auth = { username: import.meta.env.VITE_USERNAME, password:import.meta.env.VITE_PASSWORD}

const app = createApp(App)

registerPlugins(app)

app.mount('#app')

