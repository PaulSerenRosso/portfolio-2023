<script >



import TvBorder from "@/components/TvBorder.vue";
import MainButton from "@/components/MainButton.vue";

export default {
  name: "TvGallery",
  components: {
    TvBorder,
    MainButton,
  },
  data() {
    return {

      contentIndex: 0,
      contents : [],

    }
  },
  props:{
    tvGalleryId:String,
    keyEvent: String,
    delay: Number,
  },
  mounted() {
    console.log("fjkdfdsqfmqs");
    this.contents = this.$refs.slotContainer.children;
    this.hideContent();
    this.setDisplayContent(true, this.contentIndex);

  },
  methods:{
    hideContent (){
      for (let i = 0; i < this.contents.length; i++) {
        this.setDisplayContent(false, i );
      }
    },
    setDisplayContent(isDisplay, index){
      this.contents[index].style.display = isDisplay ? "flex":"none";
    },
    incrementContentIndex(){
      this.setDisplayContent(false, this.contentIndex);
      this.contentIndex++;
      if(this.contentIndex >= this.contents.length){
        this.contentIndex = 0;
      }
      this.setDisplayContent(true, this.contentIndex);
    },
    decrementContentIndex(){
      this.setDisplayContent(false, this.contentIndex);
      this.contentIndex--;
      if(this.contentIndex < 0){
        this.contentIndex = this.contents.length-1;
      }
      this.setDisplayContent(true, this.contentIndex);
    }
  }
  }

</script>

<template>
<div>
  <tv-border :key-event="this.keyEvent" :delay="this.delay"  :slotContainerId="this.tvGalleryId+'TvGallery'">
    <div class="container-inside-border"   >

      <div class="slot-container" :id="this.tvGalleryId+'TvGallery'" ref="slotContainer">
        <slot></slot>


      </div>

    </div>
  </tv-border>
  <div class="gallery-footer">
  <main-button key-event="" class="gallery-button gallery-button-left" @click="this.incrementContentIndex">
    {{'<'}}
  </main-button>
  <main-button key-event="" class="gallery-button gallery-button-right" @click="this.decrementContentIndex">
    {{'>'}}
  </main-button>
  </div>
</div>

</template>

<style scoped>

.gallery-footer{
  position: absolute;

  width: 100%;
  display: flex;
  justify-content: space-evenly;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
  text-decoration: none;


}
.container-inside-border{
  height: 100%;
  width: 100%;
}
.slot-container{
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
}
.gallery-button{

  top: 0%;
  background-color: white;
  width: 10%;
  padding:0.5em ;


}


</style>