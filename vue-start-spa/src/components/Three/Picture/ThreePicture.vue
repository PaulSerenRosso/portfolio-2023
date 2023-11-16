<script >
import {Mesh, MeshBasicMaterial, PlaneGeometry, TextureLoader} from "three";
import {
  addEvent,
  addRemoveAtSceneChangedEvent,
  addThreeTagObject,
  getThreeTagObject,
  raiseAndRemoveEvent,
  removeEvent
} from "@/composables/StoreHelper";


export default {
  name: "ThreePicture",
  props:
      {
        parentPictureTag:String,
        onCreateKey:String,
        srcPicture: String,
        idPicture: String,
        pictureTag:String,
      },
  mounted()
  {

    addEvent(this.onCreateKey);
    const textureLoader = new TextureLoader();
    const image = (document.getElementById(this.idPicture)).src;

     textureLoader.load(image, (texture) => {
       console.log(texture);
      const material = new MeshBasicMaterial({ map: texture });
      const imageScreen = new Mesh(
          new PlaneGeometry(texture.image.width/texture.image.height,1,), material);
      getThreeTagObject(this.parentPictureTag).add(imageScreen);
       addThreeTagObject(imageScreen, this.pictureTag);
       raiseAndRemoveEvent(this.onCreateKey);
    });
  }
}
</script>

<template>
  <img :id=this.idPicture
       :src="require('@/assets/'+this.srcPicture)" style="display: none;">
</template>

<style scoped>

</style>