import { createApp } from 'vue'
import App from './App.vue'

import FoodItem from './components/FoodItem.vue'
app.component('food-item', FoodItem)

const app = createApp(App)
app.mount('#app')
