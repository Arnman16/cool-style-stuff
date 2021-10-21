<template>
  <div class="container" id="bg">
    <div class="card"></div>
    <div class="all">
      <div class="circle"></div>
      <div class="triangle"></div>
      <div class="triangle"></div>
      <div class="tri-shadow"></div>
      <div class="square"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Balls",
};
</script>

<style scoped>
.container {
  display: flex;
  min-width: 100%;
  min-height: 100%;
  align-items: center;
  justify-content: center;
}
.all {
  display: flex;
  min-width: 100%;
  min-height: 100%;
  align-items: center;
  justify-content: center;
  transform: translateX(-4px);
  opacity: 0.85;
}
#bg {
  --bg: #f3ead7;
  background: rgb(240, 240, 240);
}
.circle {
  position: absolute;
  width: 80px;
  padding-bottom: 80px;
  border-radius: 50%;
  background: transparent;
  border: 10px solid black;
  transform: translateX(-120px);
  box-shadow: 0 2px 0px 0px #0003, 0 5px 0px 0px #0001;
}
.triangle {
  position: absolute;
  width: 132px;
  height: 100px;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  background: black;
}
.triangle + .triangle {
  clip-path: polygon(50% 18%, 16% 90%, 84% 90%);
  background: var(--bg)
    repeating-linear-gradient(#0000 0px, #00000008 4px, #0000 5px);
}
.tri-shadow {
  position: absolute;
  width: 132px;
  height: 100px;
  box-shadow: 0 2px 0px 0px #0003, 0 5px 0px 0px #0001;
}
.square {
  position: absolute;
  width: 80px;
  padding-bottom: 80px;
  background: transparent;
  border: 10px solid black;
  transform: translateX(130px);
  box-shadow: 0 2px 0px 0px #0003, 0 5px 0px 0px #0001;
}
.card {
  z-index: 0;
  position: absolute;
  width: 400px;
  height: 240px;
  background: red;
  border-radius: 6px;
  background: var(--bg)
    repeating-linear-gradient(#0000 0px, #00000008 4px, #0000 5px);
  box-shadow: inset 2.5px 0px #a79e8b, inset 0px -2px #6e6550,
    0 1px 10px 1px #0005;
}
</style>
