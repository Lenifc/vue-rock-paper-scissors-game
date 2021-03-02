<template>
  <div class="game">
      <div class="center">
          <div v-if="!nextStep" class="bg-triangle" >
              <div class="rock" @click="toNextStep($event)"><Rock /></div>
              <div class="paper" @click="toNextStep($event)"><Paper /></div>
              <div class="scissors" @click="toNextStep($event)"><Scissors /></div>
          </div>
      </div>

      <nextStep v-if="nextStep" />
      
  </div>
</template>

<script>
import Rock from '../components/options/Rock.vue'
import Paper from '../components/options/Paper.vue'
import Scissors from '../components/options/Scissors.vue'
import nextStep from '../components/nextStep.vue'

export default {
    data(){
        return{
            nextStep: false,
        }
    },
components: {
    Rock,
    Paper,
    Scissors,
    nextStep
},
methods:{
    toNextStep(e){
        if(e.target.classList.contains("circle")){
            this.$store.commit('choosePick', e.currentTarget.classList.value) 
            // console.log(this.choosen);
            this.nextStep = !this.nextStep
            this.$store.commit('randomComputerPick')
        }
    }
}
}
</script>

<style>

.center{
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 64px;
}

.colored-circle{
    position: relative;
    border-radius: 50%;
    width: min-content;
    padding: 30px;
    cursor: pointer;
}

.inside-circle{
    background-color: white;
    border-radius: 50%;
    width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}
.inside-circle:before{
    content: "";
    background-image: url("../assets/icon-paper.svg");
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: center;
    width: 150px;
    height: 150px;
}

.inside-circle img{
    height: 50%;
}

.bg-triangle{
    /* display: none; */
    background: url("../assets/bg-triangle.svg");
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 580px;
    position: relative;
}

.rock,
.paper,
.scissors{
    position: absolute;
}

.rock{
    bottom: 30px;
    right: 50%;
    transform: translateX(50%);
}

.paper{
    top: 40px;
    left: 22%;
}

.scissors{
    top: 40px;
    right: 22%;
}

@media ( max-width: 876px){

}


</style>