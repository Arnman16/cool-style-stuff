<template>
  <div class="container" id="bg">
    <div class="world">
      <div class="land"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
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
  background: rgb(0, 20, 31);
  --line: #222;
  --coast: #013520a4;
  --land: #0b3a2c;
  --land-desert: #5a5738;
  --ocean: #0b1a3a;
  --ocean-darker: #020a1d;
}
.world {
  background: radial-gradient(var(--ocean-darker), var(--ocean), #b4baf75b);
  height: 25vmin;
  width: 25vmin;
  border-radius: 50%;
  border-color: #9ecaed;
  box-shadow: 0 0 10px #9ecaed, 0 0 20px #9ec9ed54;
}
.land {
  position: relative;
  background: var(--land);
  background: linear-gradient(
    -110deg,
    var(--land),
    var(--land),
    var(--land-desert)
  );
  color: var(--land);
  border-radius: 50%;
  transform: scale(1.1) rotate(-5deg);
  width: 30%;
  height: 30%;
  top: 15%;
  opacity: 0.7;
  left: 20%;
  filter: drop-shadow(-0.15vmin 0 var(--coast))
    drop-shadow(0.15vmin 0 var(--coast)) drop-shadow(0 -0.15vmin var(--coast));
  box-shadow: 1vmin 0vmin, 4vmin 0vmin 0 -2vmin, 8vmin 8vmin var(--land),
    2vmin 3vmin 0 -2vmin, 3vmin 4.5vmin 0 -3vmin, 3.5vmin 5vmin 0 -3vmin,
    5vmin 6vmin 0 -2vmin, 7vmin 12vmin 0 -2vmin;
}
</style>
