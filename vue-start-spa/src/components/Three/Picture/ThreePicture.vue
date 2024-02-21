<script >
import {Mesh, MeshBasicMaterial, PlaneGeometry, TextureLoader} from "three";
import {
  addThreeTagObject,
  getThreeTagObject,
  raiseAndRemoveEvent,

} from "@/composables/StoreHelper";


export default {
  name: "ThreePicture",
  props:
      {
        parentPictureTag:String,
        onCreateKey:String,
        srcPicture: String,
        pictureTag:String,
        isDebugRatio:Boolean,
      },
  mounted()
  {

    const textureLoader = new TextureLoader();
    const image = this.$refs.image.src;
     textureLoader.load(image, (texture) => {
texture.colorSpace ="srgb" ;
      const material = new MeshBasicMaterial({ map: texture });
      const imageScreen = new Mesh(
          new PlaneGeometry(texture.image.width/texture.image.height,1,), material);
       if(this.isDebugRatio){
         console.log(this.pictureTag+(texture.image.width/texture.image.height));
       }
      getThreeTagObject(this.parentPictureTag).add(imageScreen);
       addThreeTagObject(imageScreen, this.pictureTag);

       raiseAndRemoveEvent(this.onCreateKey);
    });
  }
}
</script>

<template>
  <img ref="image"
       :src="require('@/assets/'+this.srcPicture)" style="display: none;">
</template>

<style scoped>

</style>