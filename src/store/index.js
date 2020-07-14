import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    username: '',
    avatarSrc: '',
    bankuai: [],
    currentBid: 0,
    currentTid: 0,
    bankuaiMap: {}
  },
  mutations: {
    login(state, obj) {
      console.log(obj.name)
      console.log(obj.src)

      state.isLoggedIn = true;
      state.username = obj.name;
      state.avatarSrc = obj.src
    },
    handleBankuai(state, bankuai) {
      for(let i = 0; i < bankuai.length; i++) {
        state.bankuai[bankuai[i].bid] = bankuai[i]
        state.bankuaiMap[bankuai[i].name] = bankuai[i].bid
      }
    },
    changeCurrentBid(state, bid) {
      state.currentBid = bid
    },
    changeCurrentTid(state, tid) {
      state.currentTid = tid
    },
    changeAvatarSrc(state, src) {
      state.avatarSrc = src
    }
  },
  actions: {
  },
  modules: {
  }
})
