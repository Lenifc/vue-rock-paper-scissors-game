<template>
  <div class="home">
    <Rules v-if="$store.state.openModal"/>

    <Score />
    <Game /> 
    <button @click="$store.commit('toggleModal')" class="rulesBtn">Rules</button>
  </div>
</template>

<script>
// @ is an alias to /src
import Rules from '@/components/Rules.vue'
import Score from '@/components/Score.vue'
import Game from '@/components/Game.vue'

export default {
  name: 'Home',

  components: {
    Rules,
    Score,
    Game
  },
}
</script>


<style scoped>
.home{
  padding-top: 32px;
  padding-bottom: 32px;
}

.rulesBtn{
  position: absolute;
  bottom: 64px;
  right: 64px;

  padding: 16px 44px;
  background-color: transparent;
  color: white;
  text-transform: uppercase;
  letter-spacing: 2px;

  border: 2px solid var(--HeaderOutline);
  border-radius: 8px;

  cursor: pointer;
}
</style>