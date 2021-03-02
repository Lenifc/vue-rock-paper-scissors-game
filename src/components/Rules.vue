<template>
  <div class="modal-bg" @click="toggleModal($event)">
    <div class="rules">
      <div class="row">
        <h1 class="title">RULES</h1>
        <div class="closeBtn">&times;</div>
      </div>
      <img src="@/assets/image-rules.svg" alt="">
    </div>
   
  </div>
</template>

<script>
export default {
  name: 'Rules',
      methods:{
        toggleModal(e){
          if(e.target.classList.contains("closeBtn") || 
             e.target.classList.contains("modal-bg")){
               this.$store.commit('toggleModal')
             }
        }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.modal-bg{
  position: absolute;
  top:0;
  left: 0;
  background-color: rgba(0,0,0,0.3);
  width: 100vw;
  height: 100vh;
  z-index: 100;
}

.rules{
  top: 50%;
  transform: translateY(-50%);

  position: relative;
  color: var(--DarkText);
  background-color: white;
  padding: 32px;
  border-radius: 8px;
  margin: 0 auto;
  width: min-content;
}

.row{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 24px;
}

.closeBtn{
  font-size: 3.3rem;
  color:var(--HeaderOutline);
  transform: translateY(-25%); /* align-items nie dziala na tego diva... */
}
</style>
