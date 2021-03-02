<template>
<div class="container">
  <router-view/>
</div>

</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@600;700&display=swap');


*, *::before, *::after{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Barlow Semi Condensed', sans-serif;
}
:root{
--ScissorsGradient: hsl(40, 84%, 53%);
--ScissorsGradientBottom: hsl(39, 89%, 49%);

--PaperGradient: hsl(230, 89%, 65%);
--PaperGradientBottom: hsl(230, 89%, 62%);

--RockGradient: hsl(349, 70%, 56%);
--RockGradientBottom: hsl(349, 71%, 52%);

--DarkText: hsl(229, 25%, 31%);
--ScoreText: hsl(229, 64%, 46%);
--HeaderOutline: hsl(217, 16%, 45%);

--RadialGradientInside: hsl(214, 47%, 23%);
--RadialGradientOutside: hsl(237, 49%, 15%);
}

body{
  background: radial-gradient( circle at top, var(--RadialGradientInside) 50%, var(--RadialGradientOutside) 100%);
}

.container{
  width: min(90%, 900px);
  margin: 0 auto;
  height: 100vh;
}

</style>