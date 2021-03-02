import { createStore } from 'vuex'

export default createStore({
  state: {
    openModal: false,
    choosen: '',
    options: ['rock', 'paper', 'scissors'],
    ComputerPick: '',
    totalRounds: localStorage.getItem('TotalRounds') ? localStorage.getItem('TotalRounds') : 0,
    yourScore: localStorage.getItem('YourScore') ? localStorage.getItem('YourScore') : 0,
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
    },
    incScore(state){
      state.yourScore++
      localStorage.setItem('YourScore', state.yourScore)
    },
    incRound(state){
      state.totalRounds++
      localStorage.setItem('TotalRounds', state.totalRounds)
    },
    wipeAllData(){
      localStorage.removeItem('TotalRounds')
      localStorage.removeItem('YourScore')

    }
  },
  actions: {
  },
  modules: {
  }
})
