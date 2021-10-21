<template>
  <div class="container">
    <div class="about">
      <h2>Hi! I'm Aaron!</h2>
      <br />
      This is a CSS project site heavily inspired by Lynn Fisher's
      <a
        href="https://a.singlediv.com/"
        target="_blank"
        rel="noopener noreferrer"
        >A Single Div</a
      >
      Project. <br /><br />
      <a
        href="http://aaronnoseworthy.com"
        target="_blank"
        rel="noopener noreferrer"
        >Check out more of my stuff on my portfolio</a
      >!
    </div>
  </div>
</template>
<style scoped>
html {
  height: 100vh;
  overflow: hidden;
}
.container {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.about {
  position: relative;
  margin-top: 5vh;
  margin-left: 18px;
  margin-right: 18px;
  font-weight: 500;
  font-size: 18px;
}
a {
  font-weight: 500;
}
</style>
