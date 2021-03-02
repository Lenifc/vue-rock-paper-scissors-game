import { createStore } from 'vuex'

export default createStore({
  state: {
    openModal: false,
    choosen: '',
    options: ['rock', 'paper', 'scissors'],
    ComputerPick: ''
  },
  mutations: {
    toggleModal(state){
      state.openModal = !state.openModal
    },
    choosePick(state, givenVal){
      state.choosen =  givenVal
    },
    randomComputerPick(state){
        let getRandomNum = Math.floor(Math.random()*state.options.length)
      state.ComputerPick = state.options[getRandomNum]
      // console.log(getRandomNum);
      // console.log(state.ComputerPick);
    }
  },
  actions: {
  },
  modules: {
  }
})
