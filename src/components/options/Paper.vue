<template>
  <div class="content">
      <div class="circle colored-circle border-color">
          <div class="circle inside-circle">
              <!-- <img src="@/assets/icon-paper.svg" alt=""> -->
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
    background-color: var(--PaperGradient);
}

.inside-circle:before{
    content: "";
    background-image: url("../../assets/icon-paper.svg");
}
</style>