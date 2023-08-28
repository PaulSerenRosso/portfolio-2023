<template>
    <menu-bar></menu-bar>
  <div id="_testBackground">
    <router-view/>
  </div>
</template>

<style>

@font-face {
  font-family: MyBlack;
  src: url(./assets/fonts/Merriweather-Black.ttf);
}
@font-face {
  font-family: MyBlackItalic;
  src: url(./assets/fonts/Merriweather-BlackItalic.ttf);
}
@font-face {
  font-family: MyBold;
  src: url(./assets/fonts/Merriweather-Bold.ttf);
}
@font-face {
  font-family: MyBoldItalic;
  src: url(./assets/fonts/Merriweather-BoldItalic.ttf);
}
@font-face {
  font-family: MyItalic;
  src: url(./assets/fonts/Merriweather-Italic.ttf);
}
@font-face {
  font-family: MyLight;
  src: url(./assets/fonts/Merriweather-Light.ttf);
}
@font-face {
  font-family: MyLightItalic;
  src: url(./assets/fonts/Merriweather-LightItalic.ttf);
}
@font-face {
  font-family: MyRegular;
  src: url(./assets/fonts/Merriweather-Regular.ttf);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
  position: relative;
}

#_testBackground
{
  position: fixed;
  width: 100%;
  top: 0%;
  left: 0%;
  height: 100%;
  background-size: cover;
  background-attachment: fixed;
  background: rgb(245,252,255);
  background: linear-gradient(0deg, rgba(245,252,255,1) 0%, rgba(127,166,181,1) 100%)
}

html
{
  position: relative;
  height: 100%;
  margin: 0%;
  width: 100%;
}
body
{
  position: relative;
  height: 100%;
  width: 100%;
  margin : 0%;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script setup lang="ts">
import MenuBar from "@/components/MenuBar.vue";
</script>