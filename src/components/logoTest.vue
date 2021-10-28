<template>
  <div class="container" id="bg">
    <div class="logo">
      <div class="c"></div>
      <div class="o">
        <div class="o-hole"></div>
      </div>
      <div class="o">
        <div class="o-hole"></div>
      </div>
      <div class="l"></div>
      <div class="s">
        <div class="s-hole"></div>
        <div class="s-hole"></div>
      </div>
      <div class="t"></div>
      <div class="y"></div>
      <div class="l"></div>
      <div class="e"></div>
      <div class="s"></div>
    </div>
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
.logo {
  display: flex;
  width: 240px;
  height: 60px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
#bg {
  --bottom: 50%;
  --left: 50%;
  --scale: 1.5;
  --bg1: #fff;
  --bg2: #fff;
  --line: #362f24;
  --wood-1: #8a6424;
  --wood-2: #66491c;
  --wood-3: #463015;
  --wood-4: #291c0c;
  --blade-1: #d7d7d7;
  --blade-2: #c1c1c1;
  --blade-3: #444444;
  --blade-4: #181818;
  background: linear-gradient(var(--bg1) 0%, var(--bg2) 100%);
  /* GRID */
  /* background: repeating-linear-gradient(#0004 0px, #0000 1px, #0000 25px),
    repeating-linear-gradient(90deg, #0004 0px, #0000 1px, #0000 25px); */
}
.logo div {
  content: "";
  /* margin: 0.5%; */
  box-shadow: inset 2px 0 0 0px var(--line), inset 0px 2px 0 0px var(--line);
  /* filter: drop-shadow(0 0.75vmin rgba(0, 0, 0, 0.171))
    drop-shadow(0 1.25vmin rgba(128, 128, 128, 0.2)); */
}
.c {
  background: var(--wood-1);
  height: 100%;
  width: 16%;
}
.o {
  display: flex;
  position: relative;
  background: var(--wood-3);
  height: 50%;
  left: -10%;
  width: 10%;
}
.o-hole {
  background: white;
  margin: auto;
  height: 40%;
  width: 40%;
}
.o + .o {
  background: var(--wood-2);
}
.l {
  position: relative;
  background: var(--wood-1);
  height: 100%;
  width: 5%;
  left: -10%;
}
.l + .l {
  position: relative;
  left: 10%;
}
.s {
  position: relative;
  background: purple;
  height: 100%;
  width: 7%;
  display: flex;
  overflow: hidden;
  left: -10%;
}
.s-hole {
  position: relative;
  background: white;
  height: 25%;
  width: 90%;
  top: 18%;
  left: 50%;
}
.s-hole + .s-hole {
  top: 60%;
  left: -50%;
}
.t {
  position: relative;
  background: white;
  height: 25%;
  width: 12%;
  left: -13.5%;
  top: -20%;
  z-index: 2;
}
.y {
  z-index: 2;
  position: relative;
  left: -26%;
  bottom: -30%;
  background: grey;
  height: 40%;
  width: 18%;
  clip-path: polygon(
    50% 0%,
    50% 70%,
    0 70%,
    0% 100%,
    100% 100%,
    100% 0%,
    80% 0%,
    80% 50%,
    70% 50%,
    70% 0%
  );
}
.e {
  background: black;
  height: 100%;
  width: 10%;
}
</style>
