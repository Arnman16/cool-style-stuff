<template>
  <div class="container" id="bg">
    <div class="sharp"></div>
    <div class="sharp"></div>
  </div>
</template>

<script>
export default {
  name: "Sharp",
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
  background: #eff;
}
.sharp {
  position: relative;
  width: 40%;
  padding-bottom: 40%;
  left: -5%;
  top: -5%;
  background: transparent;
  border-radius: 50%;
  border: 1px solid white;
  box-shadow: 5px 10px #a7a7a7, 10px 20px #9999, 15px 30px #555555,
    -30px 20px 0px inset white;
}

.sharp + .sharp {
  left: 5%;
  transform: scaleX(-1);
}
</style>
