<template>
  <div class="container" id="bg">
    <div class="roof-1"></div>
    <div class="house-1">
      <div class="window"></div>
      <div class="window"></div>
      <div class="door-1"><div class="door-knob"></div></div>
    </div>
    <div class="roof-2"></div>
    <div class="house-2">
      <div class="window"></div>
      <div class="window"></div>
      <div class="door-2"><div class="door-knob"></div></div>
    </div>
    <div class="roof-3"></div>
    <div class="house-3">
      <div class="window"></div>
      <div class="window"></div>
      <div class="door-3">
        <div class="door-knob"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "jelly",
};
</script>

<style scoped>
.container {
  display: grid;
  min-width: 100%;
  min-height: 100%;
  align-items: center;
  justify-content: center;
}
#bg {
  --house1: #38939a;
  --house2: #dab43d;
  --house3: #a54b45;
  --house-width: 120px;
  --house-height: 190px;
  --bg: #b1d6fa;
  background: linear-gradient(var(--bg) 0%, #7b888f 100%);
}
.house-1,
.house-2,
.house-3 {
  grid-row: 2;
  margin-bottom: auto;
  width: var(--house-width);
  height: var(--house-height);
  border: 5px solid #ded;
  display: grid;
  filter: drop-shadow(0 0.75vmin rgba(0, 0, 0, 0.171))
    drop-shadow(0 1.25vmin rgba(128, 128, 128, 0.3));
}
.house-1 {
  border-right: 5px solid #cddbcd;
  background: var(--house1)
    repeating-linear-gradient(#0000 0px, #00000008 7px, #0001 8px);
}
.house-2 {
  background: var(--house2)
    repeating-linear-gradient(#0000 0px, #00000008 7px, #0001 8px);
  transform: translateY(3px);
}
.house-3 {
  border-left: 5px solid #cddbcd;
  background: var(--house3)
    repeating-linear-gradient(#0000 0px, #00000008 7px, #0001 8px);
}
.window {
  grid-row: 1;
  width: 32px;
  height: 52px;
  background: linear-gradient(
    rgba(117, 117, 117, 0.589) 0%,
    #282635 50%,
    #ded 50%,
    #bbb 52%,
    #222 52%,
    #302e3b 100%
  );
  border: 4px solid #ded;
  margin: 10px;
  filter: drop-shadow(0 0.4vmin rgba(0, 0, 0, 0.08))
    drop-shadow(0 0.7vmin rgba(59, 59, 59, 0.1));
  box-shadow: inset 0 -13px 10px 2px #2f2d3a8c;
}
.door-1,
.door-2,
.door-3 {
  width: 36px;
  height: 75px;
  grid-column: 1;
  display: flex;
  background: #3b2421e7;
  border: 4px solid #ded;
  border-bottom: none;
  margin-left: 10px;
  margin-top: auto;
  box-shadow: inset 0 -3px #55555555;
}
.door-1 {
  background: #3b2421e7;
}
.door-2 {
  margin-right: 10px;
  margin-left: auto;
  margin-right: auto;
  grid-column: 1 / 3;
}
.door-3 {
  margin-right: 10px;
  margin-left: 0;
  grid-column: 2;
}
.roof-1,
.roof-2,
.roof-3 {
  z-index: 2;
  grid-row: 1;
  grid-row: -1;
  width: 130px;
  height: 60px;
  box-shadow: inset 0 4px rgba(161, 161, 161, 0.109), 0 2px #111;
  background: #111
    repeating-linear-gradient(
      #0000 0px,
      #6b6b6b08 3px,
      rgba(66, 66, 66, 0.067) 4px
    );
  margin-top: auto;
  filter: drop-shadow(inset 0 0.75vmin rgba(0, 0, 0, 0.171))
    drop-shadow(0 1.25vmin rgba(128, 128, 128, 0.3));
}
.roof-2 {
  transform: translateY(3px);
  background: #222
    repeating-linear-gradient(
      #0000 0px,
      #6b6b6b08 3px,
      rgba(66, 66, 66, 0.067) 4px
    );
}
.door-knob {
  height: 4px;
  width: 4px;
  background: #222;
  margin: auto;
  margin-left: 5px;
  margin-bottom: 25px;
  border-radius: 50%;
  border: 0.4px solid #eee1;
  filter: drop-shadow(0 0.4vmin rgba(0, 0, 0, 0.171))
    drop-shadow(0 0.7vmin rgba(59, 59, 59, 0.2));
}
</style>
