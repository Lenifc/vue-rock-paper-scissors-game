<template>
  <div class="score">
      <div class="logo">
          <img src="@/assets/logo.svg" alt="">
      </div>
      <div class="rounds">
          <h1>Round: {{ totalRounds }}</h1>
            <button v-if="totalRounds > 0" @click="wipeAllData()">Reset all</button>
          </div>
      <div class="points">
          <div class="points-card">
              <div class="title"> SCORE</div>
              <div class="total-points" v-if=" yourScore < 10">{{ '0'+ yourScore }}</div>
              <div class="total-points" v-else>{{ yourScore }}</div>
          </div>
      </div>
  </div>
</template>

<script>
import { mapState, useStore } from 'vuex'

export default {
setup(){
    const store = useStore()

    function wipeAllData (){
        store.dispatch('wipeAllData')
    }
    return { wipeAllData }
},
// computed: mapState({
//      score: state => state.yourScore,
//      round: state => state.totalRounds
// }),
computed: {
    ...mapState(['yourScore']),
    ...mapState(['totalRounds'])
},
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

.rounds{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.rounds h1{
    color: white;
    text-transform: uppercase;
    letter-spacing: 1.5px;
}
.rounds button{
    padding: 8px 16px;
    color: var(--RadialGradientInside);
    border:none;
    border-radius: 8px;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-top: 8px;
    cursor: pointer;
}
</style>