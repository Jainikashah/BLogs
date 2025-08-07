import { createStore } from 'vuex'

export const store = createStore({
    state () {
      return {
        isOverlay: false
      }
    },
    mutations: {
      // not needed
        TOGGLE_OVERLAY (state, value) {
        state.isOverlay = value 
      }
    },
    actions: {
      // not needed
        toggleOverlay({ commit }, value){
            commit("TOGGLE_OVERLAY", value)
        }
    }
  })
  
