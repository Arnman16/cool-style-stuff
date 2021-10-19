<template>
  <div class="container" id="bg">
    <div class="balls"></div>
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
  background: #ece;
}
.balls {
  position: absolute;
  height: 80px;
  width: 80px;
  background: red;
  border-radius: 50%;
  box-shadow: 80px 80px blue, -80px -80px yellow, -80px 80px green,
    80px -80px orange;
  background: red linear-gradient(#3838381a, #3d3d3db2);
  filter: drop-shadow(0 0.75vmin rgba(0, 0, 0, 0.267))
    drop-shadow(0 1vmin rgba(128, 128, 128, 0.103));
}
</style>
