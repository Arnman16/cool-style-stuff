<template>
  <div id="nav">
    <router-link to="/" tag="div" class="welcome">Cool Style Stuff</router-link>
    <router-link to="/about">
      <button class="nav-button">
        <mdicon name="information" size="25" />
      </button>
    </router-link>
    <router-link to="/drawing-board">
      <button class="nav-button">
        <mdicon name="draw" size="25" />
      </button>
    </router-link>
  </div>
  <router-view />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

.nav-button {
  border: none;
  padding: 4%;
  border-radius: 50%;
  cursor: pointer;
  background: transparent;
  margin-right: 10px;
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
  padding: 5px;
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
  font-size: 1.1rem;
  border-bottom: 2px dashed white;
  display: flex;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  font-weight: bolder;
  color: #ca3328;
}
</style>
