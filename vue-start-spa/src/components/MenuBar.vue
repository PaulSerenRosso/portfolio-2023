<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "MenuBar",
  data() {
    return{
      aboutMeName :"About Me",
      keyProjectsName:"Key Projects",
      contactName :"Contact",
      mobileMenuButtonState:"closed ",
  }
  },
  methods:{
    checkPlatformDeviceIdForRenderMobileMenuBar()
    {
      return this.$store.state.devicePlateformId ===0 || this.$store.state.devicePlateformId === 1;
    },
    changeStateOfMobileMenuToClosed()
    {
      this.mobileMenuButtonState = 'closed';
    },
    changeStateOfMobileMenu()
    {
      if(this.mobileMenuButtonState ==="opened")
      {
        this.mobileMenuButtonState = 'closed';
      }
      else
      {
        this.mobileMenuButtonState = 'opened';
      }
    }
  }
})

</script>

<template>

  <div v-if="this.checkPlatformDeviceIdForRenderMobileMenuBar()" id="_menuBarMobilePopUp" :class="`menu-bar-mobile-pop-up-${this.mobileMenuButtonState}`">
  <router-link v-on:click="this.changeStateOfMobileMenuToClosed()" to="/" class="menu-bar-button menu-bar-mobile-button">{{this.aboutMeName}}</router-link>
  <router-link v-on:click="this.changeStateOfMobileMenuToClosed()" to="/keyProjects" class="menu-bar-button menu-bar-mobile-button">{{this.keyProjectsName}}</router-link>
  <router-link v-on:click="this.changeStateOfMobileMenuToClosed()" to="/contact" class="menu-bar-button menu-bar-mobile-button">{{this.contactName}}</router-link>
  </div>
  <div id="_menuBarContainer">
    <div class="menu-bar-title-container">
      <router-link v-on:click="this.changeStateOfMobileMenuToClosed()" to="/" class="menu-bar-title">Paul Seren-Rosso</router-link>
    </div>
    <div id="_menuBarMobile" v-if="this.checkPlatformDeviceIdForRenderMobileMenuBar()">
      <div class="menu-bar-mobile-burger-button"  v-on:click="this.changeStateOfMobileMenu()">
      <span :class="`menu-bar-mobile-burger-button-icon menu-bar-mobile-burger-button-icon-${this.mobileMenuButtonState}`"> </span>
    </div>
    </div>
    <div id="_menuBarDesktop" v-if="!this.checkPlatformDeviceIdForRenderMobileMenuBar()" >
      <div id="_menuBarDesktopButtonsContainer">
      <router-link v-on:click="this.changeStateOfMobileMenuToClosed()" to="/" class="menu-bar-button menu-bar-desktop-button">{{this.aboutMeName}}</router-link>
      <router-link v-on:click="this.changeStateOfMobileMenuToClosed()" to="/keyProjects" class="menu-bar-button menu-bar-desktop-button">{{this.keyProjectsName}}</router-link>
      <router-link v-on:click="this.changeStateOfMobileMenuToClosed()" to="/contact" class="menu-bar-button menu-bar-desktop-button">{{this.contactName}}</router-link>
      </div>
      </div>
  </div>
</template>

<style scoped>
.menu-bar-title-container {
  position: absolute;
  height: 100%;
  left: 0%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 10px;
}

.menu-bar-title
{
  font-family: MyBlack;
  text-decoration: none;
  color: #F5FCFFFF;

}
.menu-bar-button
{
  font-family: MyBold;
  text-decoration: none;

}
.menu-bar-mobile-button
{
  color:#424242;
}
.menu-bar-desktop-button
{
  color: #F5FCFFFF;

}
#_menuBarMobile
{
  position: absolute;
  height: 100%;
  width: 100%;
}
#_menuBarDesktop
{
  position: absolute;
  height: 100%;
  width: 100%;

}
#_menuBarDesktopButtonsContainer
{
  position: relative;
  height: 100%;
  width: 50%;
  left: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
}
#_menuBarMobilePopUp
{
  position: absolute;
  z-index: 1;
  left: 0%;
  background-color: #F5FCFFFF;
  width: 100%;
  height:10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

}
.menu-bar-mobile-pop-up-opened
{
  top:10%;
  transition-duration: 1s;
}
.menu-bar-mobile-pop-up-closed
{
  top:-20%;
  transition-duration: 1s;
}
.menu-bar-mobile-burger-button
{
  position: absolute;
  top: 0%;
  left: 80%;
  height: 100%;
  width: 20%;
}
#_menuBarContainer
{
  position: relative;
  top:0%;
  left: 0%;
  background-color: #424242;
  width: 100%;
  height: 10%;
  z-index: 1;
}
.menu-bar-mobile-burger-button-icon{
  width: 22px;
  height: 2px;
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
.menu-bar-mobile-burger-button-icon::after{
  content: '';
  width: 22px;
  height: 2px;
  background-color: #F5FCFFFF;
  display: block;
  position: absolute;


}
.menu-bar-mobile-burger-button-icon::before{
  content: '';
  width: 22px;
  height: 2px;
  background-color: #F5FCFFFF;
  display: block;
  position: absolute;
}
.menu-bar-mobile-burger-button-icon-closed{
  transition-duration: 1s;
  background-color: #F5FCFFFF;

}
.menu-bar-mobile-burger-button-icon-closed::after{

  transform: translateY(-10px)  rotate(0) translateZ(0);;
  transition: transform 1s;
}
.menu-bar-mobile-burger-button-icon-closed::before{

  transform: translateY(10px) rotate(0) translateZ(0);;
  transition: transform 1s;
}

.menu-bar-mobile-burger-button-icon-opened{
background-color: transparent;

  transition-duration: 1s;
}
.menu-bar-mobile-burger-button-icon-opened::after{
  transform: translateY(0) rotate(45deg);
  transition: transform 1s;

}
.menu-bar-mobile-burger-button-icon-opened::before{
  transform: translateY(0) rotate(-45deg);
  transition: transform 1s;
}
</style>