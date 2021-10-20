<template>
  <div>
    <div id="nav">
      <router-link to="/" tag="div" class="welcome"
        ><span>Cool Styles</span>
      </router-link>
      <router-link to="/about">
        <button class="nav-button">
          <mdicon name="information" size="34" />
        </button>
      </router-link>
      <router-link to="/drawing-board">
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
  </div>
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap");

.nav-button {
  border: none;
  padding: 4%;
  border-radius: 50%;
  cursor: pointer;
  background: transparent;
  margin-right: 10px;
  margin: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.nav-button:hover {
  background: rgb(228, 228, 228);
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
}
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
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

#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

#nav {
  background: #f5f5f5;
  padding: 0.25%;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 1.1rem;
  border-bottom: 2px dashed white;
  display: flex;
  height: 40px;
  text-justify: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin: auto;
  margin-right: 10px;
}

#nav a.router-link-exact-active {
  text-decoration: underline;
  /* color: #ca3328; */
}
</style>
