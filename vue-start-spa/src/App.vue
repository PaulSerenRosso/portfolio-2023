<template>


    <menu-bar></menu-bar>

  <canvas  id="threeTextCanvas"  ></canvas>
  <div id="_testBackground">

  </div>

    <router-view/>
  <!--
  <video  playsinline autoplay muted loop controls type="video/mp4">
    <source :src="require('@/assets/Projects/Esquirel/EsquirelTrailer.mp4')" >
  </video>
-->

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
  text-align: left;
  font-family: MyRegular;
  color: white;
  position: fixed;
  height: 100vh;
  width: 100%;
  top:0;
  left: 0;
  margin : 0%;
  overflow: scroll;
  padding: 0;
  border: 0;
}

#_testBackground
{
  position: fixed;
  width: 100%;
  top: 0%;
  left: 0%;
  height: 100vh;
  background-size: cover;
  background-attachment: fixed;
  background: rgb(178,28,27);
  background: linear-gradient(340deg, rgba(178,28,27,1) 0%, rgba(85,29,32,1) 64%, rgba(18,23,61,1) 100%);

}

#threeTextCanvas{
  position: fixed;
  overflow: hidden;
}

html
{
top: 0;
  left: 0;
  width: 100%;
  font-size: 11px;
  height: 0;
  overflow: hidden;
  margin: 0;
  padding: 0;

}
.bold-content{
  font-family: MyBold;
  background-color: rgba(178, 28, 27, 0.4);

}

@media (min-width: 768px) {
  html
  {
    font-size: 20px;
  }
}

@media (min-width: 1024px) {
  html
  {
    font-size: 17px;
  }
}

@media (min-width: 1280px) {
  html
  {
    font-size: 19px;
  }
}
body
{
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  height: 0;
  margin: 0;
  padding: 0;

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
<script setup >


import MenuBar from "@/components/MenuBar.vue";


</script>