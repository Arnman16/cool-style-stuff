<template>
  <div class="container" id="bg">
    <div class="mario"></div>
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
#bg {
  /* background: #43b0d5; */
  background: linear-gradient(to left, #43b0d5, #a0a0ff);
  --skin: #f6a900;
  --hair: #00aa55;
}
.mario {
  position: relative;
  height: 20px;
  width: 20px;
  background: white;
  color: white;
  box-shadow: -60px -180px white, -40px -180px white, -20px -180px white,
    0 -180px white, 20px -180px white, -80px -160px white, -60px -160px white,
    -40px -160px white, -20px -160px white, 0 -160px white, 20px -160px white,
    40px -160px white, 60px -160px white, 80px -160px white,
    -80px -140px var(--hair), -60px -140px var(--hair), -40px -140px var(--hair),
    -20px -140px var(--skin), 0 -140px var(--skin), 20px -140px var(--hair),
    40px -140px var(--skin), -100px -120px var(--hair), -80px -120px var(--skin),
    -100px -100px var(--hair), -80px -100px var(--skin),
    -100px -80px var(--hair), -80px -80px var(--hair), -60px -120px var(--hair),
    -40px -120px var(--skin), -20px -120px var(--skin), 0 -120px var(--skin),
    20px -120px var(--hair), 40px -120px var(--skin), 60px -120px var(--skin),
    80px -120px var(--skin), 100px -100px var(--skin), -60px -100px var(--hair),
    -40px -100px var(--hair), -20px -100px var(--skin), 0 -100px var(--skin),
    20px -100px var(--skin), 40px -100px var(--hair), 60px -100px var(--skin),
    80px -100px var(--skin), -60px -80px var(--skin), -40px -80px var(--skin),
    -20px -80px var(--skin), 0 -80px var(--skin), 80px -80px var(--hair),
    20px -80px var(--hair), 40px -80px var(--hair), 60px -80px var(--hair),
    -60px -60px var(--skin), -40px -60px var(--skin), -20px -60px var(--skin),
    0 -60px var(--skin), 20px -60px var(--skin), 40px -60px var(--skin),
    60px -60px var(--skin), -80px -40px var(--hair), -60px -40px var(--hair),
    -20px -40px var(--hair), 0px -40px var(--hair), 20px -40px var(--hair),
    -100px -20px var(--hair), -80px -20px var(--hair), -60px -20px var(--hair),
    -20px -20px var(--hair), -0px -20px var(--hair), 40px -20px var(--hair),
    60px -20px var(--hair), 80px -20px var(--hair), -120px 0 var(--hair),
    -100px 0 var(--hair), -80px 0 var(--hair), -60px 0 var(--hair),
    40px 0 var(--hair), 60px 0 var(--hair), 80px 0 var(--hair),
    100px 0 var(--hair), -20px 0, -40px 0, -40px -20px, -40px -40px, 20px 0,
    20px -20px, 0 20px, -80px 20px var(--hair), 60px 20px var(--hair),
    -20px 20px, -40px 20px yellow, -100px 20px var(--skin),
    -120px 20px var(--skin), 80px 20px var(--skin), 100px 20px var(--skin),
    60px 40px var(--skin), 80px 40px var(--skin), 100px 40px var(--skin),
    80px 60px var(--skin), 100px 60px var(--skin), -120px 40px var(--skin),
    -100px 40px var(--skin), -80px 40px var(--skin), -120px 60px var(--skin),
    -100px 60px var(--skin), 20px 20px yellow, 40px 20px, -60px 20px, -60px 40px,
    -40px 40px, -20px 40px, 0 40px, 20px 40px, 40px 40px, -80px 60px, -60px 60px,
    -40px 60px, -20px 60px, 0 60px, 20px 60px, 40px 60px, 60px 60px, -80px 80px,
    -60px 80px, -40px 80px, 20px 80px, 40px 80px, 60px 80px,
    -100px 100px var(--hair), -80px 100px var(--hair), -60px 100px var(--hair),
    40px 100px var(--hair), 60px 100px var(--hair), 80px 100px var(--hair),
    -120px 120px var(--hair), -100px 120px var(--hair), -80px 120px var(--hair),
    -60px 120px var(--hair), 40px 120px var(--hair), 60px 120px var(--hair),
    80px 120px var(--hair), 100px 120px var(--hair);
  filter: drop-shadow(0 0.75vmin rgba(0, 0, 0, 0.171))
    drop-shadow(0 1.25vmin rgba(128, 128, 128, 0.2));
  transform: translateY(30px) translateX(10px) scaleX(-1);
}
</style>
