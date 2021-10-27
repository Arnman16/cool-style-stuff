<template>
  <div class="container" id="bg">
    <div class="pumpkin">
      <div class="mouth"></div>
      <div class="eye"></div>
      <div class="eye"></div>
    </div>
    <div class="stem"></div>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  min-width: 100%;
  min-height: 100%;
  align-items: center;
  justify-content: center;
}
#bg {
  --line: #774d47;
  --line-darker: #664540;
  --pumpkin-light: #ffa43c48;
  --pumpkin: #ea7f37;
  --pumpkin-dark: #b6632b69;
  --bg1: #fae9be;
  --bg2: #c69976;
  --hole: #3d3326;
  --hole-light: #915e3cce;
  background: linear-gradient(var(--bg1) 0%, var(--bg2) 100%);
}
.pumpkin {
  height: 280px;
  width: 320px;
  border-radius: 50% 50% 44% 44%;
  background: var(--pumpkin)
    repeating-linear-gradient(
      90deg,
      var(--pumpkin) 1px,
      var(--pumpkin-light) 30px,
      var(--pumpkin-dark) 60px
    );
  box-shadow: inset 36px -10px 15px 3px var(--pumpkin-dark),
    inset -36px -10px 15px 3px var(--pumpkin-dark),
    inset 0px 10px 15px 10px var(--pumpkin-dark), 0px 14px 15px #3334;
  border: 6px solid var(--line);
  position: relative;
}
.mouth {
  position: absolute;
  background: transparent;
  height: 110px;
  width: 220px;
  border-radius: 50%;
  top: 130px;
  left: 50px;
  box-shadow: inset 0px -5px 2px var(--hole-light), inset 0px -28px var(--hole);
}
.eye {
  position: absolute;
  background: transparent;
  height: 60px;
  width: 80px;
  border-radius: 50%;
  top: 110px;
  left: 70px;
  box-shadow: inset 1px -5px 2px var(--hole-light), inset 0px -20px var(--hole);
  transform: rotate(-15deg);
}
.eye + .eye {
  left: 180px;
  box-shadow: inset -1px -5px 2px var(--hole-light), inset 0px -20px var(--hole);
  transform: rotate(15deg);
}
.stem {
  position: absolute;
  height: 80px;
  width: 40px;
  background: transparent;
  left: 50%;
  top: 2%;
  border-radius: 100%;
  box-shadow: -25px 0 var(--line), -30px 0 var(--line-darker);
  transform: rotate(10deg);
}
</style>
