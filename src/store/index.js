import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    username: '',
    bankuai: [],
    currentBid: 0,
    currentTid: 0
  },
  mutations: {
    login(state, username) {
      state.isLoggedIn = true;
      state.username = username;
      console.log("修改vuex username=:"+state.username)
    },
    handleBankuai(state, bankuai) {
      for(let i = 0; i < bankuai.length; i++) {
        state.bankuai[bankuai[i].bid] = bankuai[i]
      }
    },
    changeCurrentBid(state, bid) {
      state.currentBid = bid
    },
    changeCurrentTid(state, tid) {
      state.currentTid = tid
    }
  },
  actions: {
  },
  modules: {
  }
})
