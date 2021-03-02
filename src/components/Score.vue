<template>
  <div class="score">
      <div class="logo">
          <img src="@/assets/logo.svg" alt="">
      </div>
      <div class="rounds">
          <div class="h1">Round: {{ round }}</div>
            <button v-if="round > 0" @click="wipeAllData()">Reset all</button>
          </div>
      <div class="points">
          <div class="points-card">
              <div class="title"> SCORE</div>
              <div class="total-points" v-if=" score < 10">{{ '0'+ score }}</div>
              <div class="total-points" v-else>{{ score }}</div>
          </div>
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
setup(){

},
computed: mapState({
     score: state => state.yourScore,
     round: state => state.totalRounds
}),
methods:{
     wipeAllData (){
        this.$store.commit('wipeAllData')
    }
}
}
</script>

<style>
.score{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: 3px solid var(--HeaderOutline);
    border-radius: 12px;

    padding: 16px;
}

.points-card{
    padding: 12px 40px;
    text-align: center;
    background-color: white;
    border-radius: 8px;
}

.title{
    color: var(--ScoreText);
    letter-spacing: 2px;
}

.total-points{
    font-size: 3rem;
    font-weight: 700;
    color: var(--HeaderOutline);
}
</style>