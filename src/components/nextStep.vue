<template>
  <div class="nextStep">
          <div class="row" style="">

              <div class="yourPick">
                  <h2 class="description">You picked {{ yourPick }}</h2>
                  <div class="emptyCircle">
                    <Rock v-if="yourPick == 'rock'" />
                    <Paper v-if="yourPick == 'paper'" />
                    <Scissors v-if="yourPick == 'scissors'" />
                  </div>
              </div>

            <div class="playAgain" v-if="winner">
                <h1>{{ winner == 'tie' ? "DRAW" : winner + " won!!" }}</h1>
                <button @click="restartGame()">Play again!</button>
            </div>

              <div class="computerPick">
                  <h2 class="description">The house picked {{  compRandPick || '...'}}</h2>
                  <div class="emptyCircle">
                    <Rock v-if="compRandPick == 'rock'" />
                    <Paper v-if="compRandPick == 'paper'" />
                    <Scissors v-if="compRandPick == 'scissors'" />
                  </div>
              </div>

          </div>

      </div>
</template>

<script>
import {useStore} from 'vuex'
import { ref, onMounted } from 'vue'
import Rock from '../components/options/Rock.vue'
import Paper from '../components/options/Paper.vue'
import Scissors from '../components/options/Scissors.vue'

export default {
    setup(){
        const store = useStore()
        const yourPick = store.state.choosen
        const compRandPick =  ref('')
        const winner = ref('')

        function checkForWinner(){
         if(yourPick == 'rock' && compRandPick.value == 'scissors' ||
            yourPick == 'paper' && compRandPick.value == 'rock' || 
            yourPick == 'scissors' && compRandPick.value == 'paper' ) {
                winner.value = 'You'
                store.commit('incScore')
         } 
         else if(yourPick == compRandPick.value) {
             winner.value = 'tie'
         }
         else winner.value = 'Computer'
        //  console.log(yourPick, compRandPick);

         store.commit('incRound')
    }

    function restartGame(){
        store.dispatch('restartGame')
    }

    onMounted(() => {
        setTimeout(() => {
            compRandPick.value = store.state.ComputerPick
            checkForWinner()
        }, 777);
    })

        return { yourPick, compRandPick, winner, checkForWinner, restartGame }
    },
components: {
    Rock,
    Paper,
    Scissors
},

}
</script>

<style scoped>
.row{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    text-align: center;
}

.description{
    color: white;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-weight: 600;
    padding-bottom: 48px;
}

.yourPick, 
.computerPick{
    display: flex;
    flex-direction: column;
}

.emptyCircle{
    border-radius: 50%;
    background-color: rgba(0,0,0,0.2);
    width: 200px;
    height: 200px;
    margin-top: 32px;
    align-self: center;
}
</style>