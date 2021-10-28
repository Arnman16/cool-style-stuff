<template>
  <div id="nav">
    <router-link to="/" tag="div" class="welcome"
      ><div class="logo">CoolStyles</div>
      <div class="blurb">CSS art by Aaron Noseworthy</div>
    </router-link>
    <router-link to="/about">
      <button class="nav-button">
        <mdicon name="information-outline" :size="35" />
      </button>
    </router-link>
    <router-link v-if="0" to="/drawing-board">
      <button class="nav-button">
        <mdicon name="draw" size="34" />
      </button>
    </router-link>
  </div>
  <!-- <div> -->
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition">
      <component :is="Component" />
    </transition>
  </router-view>
  <!-- </div> -->
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Abel&family=Pacifico&family=Roboto&&display=swap");

.nav-button {
  border: none;
  padding: 4%;
  border-radius: 50%;
  cursor: pointer;
  background: transparent;
  color: #fef;
  margin-right: 10px;
  margin: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.full-page {
  height: 100%;
}
.nav-button:hover {
  background: rgba(228, 228, 228, 0.109);
}
.welcome {
  flex: 1;
  text-align: left;
  font-weight: 200;
  margin: auto;
  padding-left: 10px;
  color: #2c3e50;
  font-family: "Architects Daughter", cursive;
  font-size: 1.5rem;
}
.welcome span {
  color: #2c3e50;
}
html {
  overflow-y: scroll;
  background: #111;
  color: #eee;
}
a {
  color: #99a;
  text-shadow: 0 1px #a8a8a867;
}
html,
body,
div,
span,
applet,
object,
iframe,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  overflow-x: hidden;
}
body {
  height: 100%;
}
.logo {
  position: relative;
  bottom: 2px;
  font-family: "Pacifico", cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 22px;
  color: #fef;
  font-weight: 400;
  text-shadow: 0 1px #00000067;
}
.blurb {
  position: relative;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  bottom: 7px;
  text-decoration: none;
  color: #b8cbf1;
  text-shadow: 0 1px #00000067;
}
#nav a.router-link-exact-active .logo {
  text-decoration: underline;
}
#nav a.router-link-active {
  background: none;
}
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
}

#nav {
  background: #111;
  /* padding: 0.25%; */
  padding-left: 1vmin;
  padding-right: 1vmin;
  font-size: 1.1rem;
  display: flex;
  height: 53px;
  text-justify: center;
  overflow: hidden;
}

#nav a {
  margin: auto;
  margin-right: 10px;
}
</style>
