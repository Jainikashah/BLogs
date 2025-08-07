import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import './styles/main.scss'
import './styles/theme.scss'
import { store } from '@/store'
import { Dropdown, Popover, Collapse } from 'bootstrap'

import router from './router'
import PublicLayout from "./layouts/PublicLayout.vue"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import "./fontawesome"

const app = createApp(App);
app.use(router)
app.use(store)
app.component("PublicLayout", PublicLayout)
app.component("bDropdown", Dropdown)
app.component("bsCollapse", Collapse)
app.component("bsPopover", Popover)

app.component('faIcon', FontAwesomeIcon)
app.mount('#app')
 
