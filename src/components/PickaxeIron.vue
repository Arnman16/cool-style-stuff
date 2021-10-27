<template>
  <div class="container" id="bg">
    <div class="pickaxe"></div>
    <div class="blade-right"></div>
    <div class="blade-left"></div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  min-width: 100%;
  min-height: 100%;
  align-items: center;
  justify-content: center;
}
#bg {
  --bottom: 50%;
  --left: 50%;
  --scale: 1.5;
  --bg1: #f0f0f0;
  --bg2: #fff;
  --wood-1: #8a6424;
  --wood-2: #66491c;
  --wood-3: #463015;
  --wood-4: #291c0c;
  --blade-1: #d7d7d7;
  --blade-2: #c1c1c1;
  --blade-3: #444444;
  --blade-4: #181818;
  background: var(--bg1);
  /* GRID */
  /* background: repeating-linear-gradient(#0004 0px, #0000 1px, #0000 25px),
    repeating-linear-gradient(90deg, #0004 0px, #0000 1px, #0000 25px); */
}
.pickaxe,
.blade-left,
.blade-right {
  filter: drop-shadow(0 0.5vmin rgba(0, 0, 0, 0.05))
    drop-shadow(0 0.83vmin rgba(128, 128, 128, 0.04));
}
.pickaxe {
  display: block;
  position: absolute;
  width: 10px;
  height: 10px;
  bottom: var(--bottom);
  left: var(--left);
  background: var(--wood-4);
  color: var(--wood-4);
  transform: scale(var(--scale)) translate(-65px, 65px);
  box-shadow: 10px 0px, 0 -10px var(--wood-3), 10px -10px var(--wood-1),
    20px -10px, 10px -20px var(--wood-3), 20px -20px var(--wood-2), 30px -20px,
    20px -30px var(--wood-3), 30px -30px var(--wood-1), 40px -30px,
    30px -40px var(--wood-3), 40px -40px var(--wood-2), 50px -40px,
    40px -50px var(--wood-3), 50px -50px var(--wood-1), 60px -50px,
    50px -60px var(--wood-3), 60px -60px var(--wood-2), 70px -60px,
    60px -70px var(--wood-3), 70px -70px var(--wood-1), 80px -70px,
    70px -80px var(--wood-3), 80px -80px var(--wood-2), 90px -80px,
    80px -90px var(--wood-3), 90px -90px var(--blade-1),
    100px -90px var(--blade-2), 90px -100px var(--blade-2),
    100px -100px var(--wood-1), 110px -100px, 100px -110px var(--wood-3),
    110px -110px var(--wood-2);
}
.blade-right {
  display: block;
  position: absolute;
  width: 10px;
  height: 10px;
  bottom: var(--bottom);
  left: var(--left);
  transform: scale(var(--scale)) translate(35px, 35px);
  background: transparent;
  color: var(--blade-4);
  box-shadow: 10px 0px, 0 -10px, 10px -10px white, 20px -10px, 0 -20px,
    10px -20px var(--blade-1), 20px -20px, 0 -30px, 10px -30px var(--blade-2),
    20px -30px, 0 -40px, 10px -40px var(--blade-2), 20px -40px,
    0 -50px var(--blade-2), 10px -50px var(--blade-1), 20px -50px, 10px -60px;
}
.blade-left {
  display: block;
  position: absolute;
  width: 10px;
  height: 10px;
  bottom: var(--bottom);
  left: var(--left);
  transform: scale(var(--scale)) translate(-35px, -55px);
  color: var(--blade-3);
  box-shadow: 10px 0, 20px 0, 30px 0, 40px 0, 50px 0, 0 10px, 10px 10px white,
    20px 10px var(--blade-1), 30px 10px var(--blade-2), 40px 10px var(--blade-2),
    50px 10px var(--blade-1), 60px 10px, 10px 20px, 20px 20px var(--blade-4),
    30px 20px var(--blade-4), 40px 20px var(--blade-4), 50px 20px var(--blade-2);
}
</style>
