<template>
  <div class="content">
      <div class="circle colored-circle border-color">
          <div class="circle inside-circle">
              <!-- <img src="@/assets/icon-rock.svg" alt=""> -->
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
    background-color: var(--RockGradient);
}

.inside-circle:before{
    content: "";
    background-image: url("../../assets/icon-rock.svg");
}
</style>