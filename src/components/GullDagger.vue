<template>
  <div class="container" id="bg">
    <div class="center"></div>
    <div class="holder">
      <div class="dagger"></div>
      <div class="dagger-tip"></div>
      <div class="fuller"></div>
      <div class="rain-guard"></div>
      <div class="cross-guard"></div>
      <div class="grip"></div>
      <div class="pommel"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Drawing",
};
</script>

<style scoped>
.container {
  display: flex;
  min-width: 100%;
  min-height: 100%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.holder {
  display: flex;
  min-width: 100%;
  min-height: 100%;
  align-items: center;
  justify-content: center;
  transform: rotate(15deg) translate(38px, 0px);
  position: absolute;
}
#bg {
  background: linear-gradient(135deg, #af4f43, #f3705f);
  color: #fff9;
}
.dagger {
  position: absolute;
  background: #c2c2c2;
  width: 200px;
  height: 36px;
  box-shadow: inset 0px 5px 0px 0px #ccc, inset 0px -5px 0px 0px #a13d3033;
  /* border-radius: 0 3px 3px 0 / 30px; */
}
.dagger-tip {
  position: absolute;
  height: 36px;
  width: 60px;
  background: #c2c2c2;
  /* opacity: 0.7; */
  border-radius: 50% / 50%;
  transform: translateX(96px);
  box-shadow: inset 0px 5px 0px 0px #ccc, inset 0px -5px 0px 0px #a13d3033;
  clip-path: polygon(45% 100%, 100% 100%, 100% 0%, 45% 0%);
}
.fuller {
  position: absolute;
  width: 190px;
  height: 5px;
  border-radius: 20% / 40%;
  background: #999;
  box-shadow: 0px 0px 4px 2px #ccc, inset 0 0 2px 2px #bbb;
}
.rain-guard {
  position: absolute;
  height: 22px;
  width: 18px;
  background: #ddd;
  transform: translateX(-100px);
  border-radius: 40%;
  box-shadow: 2px 0px 3px 1px #bbb, inset 0px 0px 8px 4px #d4d1b8;
  opacity: 0.7;
}
.cross-guard {
  position: absolute;
  height: 86px;
  width: 10.2px;
  background: #d8c349;
  transform: translateX(-104.5px);
  box-shadow: inset 3px 0px 0.6vmin #222e, inset -3px 1px 0.6vmin #322d;
  border-radius: 3px;
}
.grip {
  z-index: 2;
  position: absolute;
  height: 24px;
  width: 100px;
  background: repeating-linear-gradient(90deg, #444 0px, #333 4px, #222 5px);
  transform: translateX(-159.5px);
  clip-path: polygon(13% 90%, 100% 100%, 100% 0%, 13% 10%);
  box-shadow: inset 0px 9px 1vmin #222e, inset 1px -9px 1vmin #322e,
    inset -5px 0 0 1px #cab228, inset 16px 0 0 1px #cab228;
}
.pommel {
  /* z-index: 0; */
  position: absolute;
  height: 26px;
  width: 26px;
  background: #cab228;
  transform: translateX(-205px);
  box-shadow: inset 0px -3px 8px 3px #322f, inset 0px 2px 8px 3px #222e;
  border-radius: 50%;
}
</style>
