import Vue from 'vue'
import Vuex from 'vuex'
import table from '@/store/modules/table'
import views from '@/store/modules/views'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    table,
    views,
  }
})
