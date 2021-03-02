<template>
  <div class="content">
      <div class="circle colored-circle border-color">
          <div class="circle inside-circle">
              <!-- <img src="@/assets/icon-scissors.svg" alt=""> -->
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.border-color{
    background-color: var(--ScissorsGradient);
}

.inside-circle:before{
    content: "";
    background-image: url("../../assets/icon-scissors.svg");
}

</style>