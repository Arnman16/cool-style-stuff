<template>
  <div class="container" id="bg">
    <div class="drawing">
      <div class="controls-left"></div>
      <div class="key-holder">
        <div class="key-l"></div>
        <div class="key-m"></div>
        <div class="key-m"></div>
        <div class="key-r"></div>
        <div class="key-l"></div>
        <div class="key-m"></div>
        <div class="key-r"></div>
        <div class="key-l"></div>
        <div class="key-m"></div>
        <div class="key-m"></div>
        <div class="key-r"></div>
        <div class="key-l"></div>
        <div class="key-m"></div>
        <div class="key-r"></div>
        <div class="key-l"></div>
        <div class="key-m"></div>
        <div class="key-m"></div>
        <div class="key-r"></div>
        <div class="key-last"></div>
      </div>
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
}
#bg {
  background: #fdedd4;
  /* background: linear-gradient(to left, #fffd86, #a0a0ff); */
}
.drawing {
  position: relative;
  height: 100px;
  width: 350px;
  background: linear-gradient(to bottom, #f8f8f8, #eaeaea, #e3e3e3);
  color: white;
  filter: drop-shadow(0 0.75vmin rgba(0, 0, 0, 0.171))
    drop-shadow(0 1.25vmin rgba(128, 128, 128, 0.2));
  border-radius: 1%;
  border: 1px solid #f8f8f8;
  display: flex;
}
.key-l {
  flex: 1;
  /* width: 4%; */
  height: 100%;
  margin: 0 0.1% 0 0.1%;
  clip-path: polygon(
    0 0,
    70% 0,
    70% 65%,
    100% 65%,
    100% 99%,
    95% 100%,
    5% 100%,
    0 99%
  );
  background: rgb(230, 230, 230);
  top: 0px;
  /* border-radius: 4%; */
}

.key-r {
  flex: 1;
  width: 4%;
  height: 100%;
  margin: 0 0.1% 0 0.1%;
  clip-path: polygon(
    30% 0,
    100% 0,
    100% 99%,
    95% 100%,
    5% 100%,
    0 99%,
    0 65%,
    30% 65%
  );
  background: rgb(230, 230, 230);
  top: 0;
  /* border-radius: 4%; */
}

.key-m {
  flex: 1;
  width: 4%;
  height: 100%;
  margin: 0 0.1% 0 0.1%;
  background: rgb(230, 230, 230);
  clip-path: polygon(
    30% 0,
    70% 0,
    70% 65%,
    100% 65%,
    100% 99%,
    95% 100%,
    5% 100%,
    0 99%,
    0 65%,
    30% 65%
  );
  top: 0;
}

.key-last {
  flex: 1;
  height: 100%;
  margin: 0 0.1% 0 0.1%;
  background: rgb(230, 230, 230);
  clip-path: polygon(0 0, 100% 0, 100% 99%, 95% 100%, 5% 100%, 0 99%);
  top: 0;
}
.controls-left {
  width: 10%;
}
.key-holder {
  flex: 1;
  position: relative;
  bottom: -32.5%;
  height: 60%;
  display: flex;
  background: black;
  background-image: linear-gradient(
    to bottom,
    rgb(54, 54, 54) 1%,
    rgb(26, 26, 26) 2%,
    rgb(20, 20, 20) 5%,
    rgb(56, 56, 59) 57%,
    rgb(66, 66, 68) 59%,
    rgb(19, 19, 19) 62%,
    rgb(12, 12, 12) 100
  );
  border: solid 2px rgba(7, 7, 7, 0.5);
  /* margin: 6%; */
  margin-left: 1%;
  margin-right: 3%;
  padding-bottom: 0.46%;
  padding-right: 0;
  box-shadow: 0 2.5px rgb(184, 184, 184), 0 4px #f8f8f8,
    0 5px rgb(209, 209, 209);
  border-bottom: inset 1px white;
}
</style>
