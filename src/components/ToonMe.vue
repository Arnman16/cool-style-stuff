<template>
  <div class="container" id="bg">
    <div class="frame">
      <div class="shoulders"></div>
      <div class="chest"></div>
      <div class="neck"></div>
      <div class="self"></div>
      <div class="hair"></div>
      <div class="burns"></div>
      <div class="brow-left"></div>
      <div class="brow-right"></div>
      <div class="cheeks"></div>
      <div class="eye-left">
        <div class="iris-left"></div>
      </div>
      <div class="eye-right">
        <div class="iris-right"></div>
      </div>
      <div class="nose"></div>
      <div class="mouth"></div>
      <div class="ear"></div>
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
  display: block;
  min-width: 100%;
  max-height: 400px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.frame {
  display: flex;
  width: 100%;
  height: 400px;
  position: absolute;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
}
#bg {
  --color-1: #6195da;
  --color-2: #7897c0;
  --opacity: 1;
  --line: #211;
  --skin: #ffc9b3;
  --skin-dark: #e9b8a4;
  --skin-dark-transparent: #ddae9c55;
  --skin-transparent: #ffc9b333;
  --hair: #3b2c24;
  --iris: #374a56;
  --iris-2: #6c798a;
  background: linear-gradient(0deg, var(--color-1), var(--color-2));
}
.self {
  position: absolute;
  width: 33vmin;
  height: 54vmin;
  background: var(--skin);
  opacity: var(--opacity);
  transform: translate(-3vmin, -8.3vmin) rotate(-16deg);
  border-radius: 100% / 70% 55% 118% 100%;
  border: 0.4vmin solid var(--line);
  box-shadow: inset 1vmin 10vmin 0 var(--hair),
    inset 2vmin -0.25vmin 0.8vmin var(--skin-dark),
    inset -2vmin 1vmin 1vmin var(--skin-dark);
}
.hair {
  position: absolute;
  opacity: var(--opacity);
  width: 14vmin;
  height: 7vmin;
  background: var(--hair);
  background: var(--hair);
  color: var(--hair);
  border-radius: 100% /90% 140% 30% 55%;
  transform: rotate(10deg) translate(1vmin, -26vmin);
  box-shadow: -2vmin -2vmin, -4vmin -4vmin, -8vmin -6vmin, -15vmin -4vmin,
    -17vmin -2vmin, -10vmin -1vmin, -10vmin 0, -20vmin 1vmin, -20vmin 5vmin;
  filter: drop-shadow(0px 0.6vmin 0.1vmin #2225);
}
.burns {
  position: absolute;
  opacity: var(--opacity);
  width: 5vmin;
  height: 20vmin;
  background: var(--hair);
  /* background: red; */
  color: var(--hair);
  border-radius: 100% /90% 140% 30% 55%;
  box-shadow: -1vmin -1vmin, -2vmin -2vmin, -3vmin -3vmin, -4vmin -4vmin,
    -5vmin -5vmin;
  transform: rotate(-3deg) translate(-14vmin, -14vmin);
  filter: drop-shadow(0.4vmin 0.4vmin 0.1vmin #2225);
}
.cheeks {
  position: absolute;
  width: 24vmin;
  height: 5vmin;
  background: var(--skin-dark);
  /* background: red; */
  filter: blur(1vmin);
  border-radius: 50%;
  transform: rotate(-6deg) translate(2vmin, -4vmin);
}
.eye-left {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 8.2vmin;
  height: 3.7vmin;
  background: white;
  opacity: var(--opacity);
  transform: translate(-3.5vmin, -6.5vmin) rotate(3deg);
  border-radius: 100% / 50% 55% 120% 100%;
  border: 0.25vmin solid var(--line);
  border-right: 0.35vmin solid var(--line);
  border-top: 0.3vmin solid var(--line);
}
.iris-left {
  position: absolute;
  width: 3vmin;
  height: 3vmin;
  background: radial-gradient(
    farthest-side,
    #222 0%,
    #000 50%,
    var(--iris) 50%
  );
  border-radius: 50%;
  box-shadow: inset 0.5vmin 0.5vmin 1vmin var(--iris-2);
  transform: translate(-0.4vmin, -0.1vmin);
}
.eye-right {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 7vmin;
  height: 3.4vmin;
  background: white;
  opacity: var(--opacity);
  transform: translate(9.2vmin, -7.7vmin) rotate(-16deg) scaleX(-1);
  border-radius: 100% / 50% 55% 120% 100%;
  border: 0.25vmin solid var(--line);
  border-right: 0.35vmin solid var(--line);
  border-top: 0.3vmin solid var(--line);
}
.iris-right {
  position: absolute;
  width: 2.8vmin;
  height: 2.8vmin;
  background: radial-gradient(
    farthest-side,
    #222 0%,
    #000 50%,
    var(--iris) 50%
  );
  border-radius: 50%;
  box-shadow: inset 0.5vmin 0.5vmin 1vmin var(--iris-2);
  transform: translate(0.5vmin, -0.1vmin);
}
.brow-left {
  position: absolute;
  width: 10vmin;
  height: 5vmin;
  background: none;
  opacity: var(--opacity);
  transform: translate(-4vmin, -7.6vmin) rotate(5deg);
  border-radius: 100% / 50% 55% 120% 100%;
  box-shadow: 0px -1.6vmin var(--hair),
    inset -2vmin 2vmin 2vmin var(--skin-dark-transparent);
  filter: drop-shadow(0 -0.4vmin 0.4vmin #2225);
}
.brow-right {
  position: absolute;
  width: 9vmin;
  height: 5vmin;
  background: none;
  opacity: var(--opacity);
  transform: translate(9.7vmin, -8.8vmin) rotate(-18deg) scaleX(-1);
  border-radius: 100% / 50% 55% 120% 100%;
  box-shadow: 0px -1.6vmin var(--hair),
    inset -2vmin 2vmin 2vmin var(--skin-dark-transparent);
  filter: drop-shadow(0 -0.4vmin 0.4vmin #2225);
}
.nose {
  position: absolute;
  height: 8vmin;
  width: 4.2vmin;
  background: linear-gradient(to right, transparent, transparent, var(--skin));
  opacity: var(--opacity);
  transform: translate(4.5vmin, 0.5vmin) rotate(-20deg);
  border-radius: 100% / 120% 4% 70% 55%;
  box-shadow: 0.3vmin 0.3vmin var(--line),
    inset -0.5vmin -0.25vmin 0.5vmin var(--skin-dark);
  /* border: 0.5vmin solid; */
}
.ear {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 6.5vmin;
  height: 14vmin;
  background: linear-gradient(
    135deg,
    var(--skin-dark) 0%,
    var(--skin) 80%,
    var(--skin-transparent)
  );
  opacity: var(--opacity);
  transform: translate(-19vmin, -2vmin) rotate(-26deg);
  border-radius: 100% / 50% 55% 120% 100%;
  box-shadow: -0.3vmin -0.3vmin var(--line),
    -0.3vmin 0.4vmin 0 0.1vmin var(--line), 0.1vmin 0vmin 0 var(--skin),
    0vmin -0.4vmin 0 var(--line), inset 2vmin 1vmin 2vmin var(--skin);
  /* border-left: 1px solid var(--line); */
}
.mouth {
  position: absolute;
  height: 2.6vmin;
  width: 7vmin;
  background: transparent;
  opacity: var(--opacity);
  transform: translate(5vmin, 7.5vmin) rotate(-10deg);
  border-radius: 100% / 80% 80% 120% 20%;
  box-shadow: inset 0 -0.3vmin var(--line);
}
.neck {
  opacity: var(--opacity);
  position: absolute;
  height: 16vmin;
  width: 25vmin;
  background: var(--skin);
  box-shadow: inset 4vmin 1vmin 1vmin var(--skin-dark);
  transform: translate(-3vmin, 10vmin) rotate(-1deg);
  border-left: 0.3vmin solid var(--line);
  border-right: 0.3vmin solid var(--line);
}
.chest {
  opacity: var(--opacity);
  /* opacity: 0.7; */
  position: absolute;
  height: 16vmin;
  width: 29vmin;
  background: var(--skin);
  box-shadow: inset 6vmin -3vmin 1vmin var(--skin-dark);
  transform: translate(-3vmin, 21vmin) rotate(5deg);
  border-radius: 100% / 100% 90% 100% 110%;
  border: 0.3vmin solid var(--line);
}
.shoulders {
  opacity: var(--opacity);
  overflow: hidden;
  position: absolute;
  height: 26vmin;
  width: 80vmin;
  background: #02382b;
  transform: translate(-3vmin, 29vmin) rotate(-2deg);
  border: 0.3vmin solid var(--line);
  clip-path: polygon(
    36% 0,
    19% 21%,
    0 55%,
    0% 100%,
    100% 100%,
    97% 43%,
    91% 26%,
    87% 15%,
    81% 7%,
    70% 0
  );
}
</style>
