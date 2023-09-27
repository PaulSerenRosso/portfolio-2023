<script >
import {Mesh, MeshBasicMaterial, PlaneGeometry, TextureLoader} from "three";
import {DynamicObject} from "@/store/StoreClasses";

export default {
  name: "ThreePicture",
  props:
      {
        pictureObjectName:String,
        srcPicture: String,
        idPicture: String,
        threeBasicResponsivePropertyGroup: Object,
        movementLength:Number,
        movementFrequency:Number,
      },
  mounted()
  {
    const textureLoader = new TextureLoader();
    console.log(this.idPicture);
    const image = (document.getElementById(this.idPicture)).src;

     textureLoader.load(image, (texture) => {
      const material = new MeshBasicMaterial({ map: texture });
      const imageScreen = new Mesh(
          new PlaneGeometry(texture.image.width/texture.image.height,1,), material);

      this.$store.commit('addScene',imageScreen);
      const dynamicObject =new DynamicObject(imageScreen, this.movementLength,this.movementFrequency,this.pictureObjectName, undefined);


      this.threeBasicResponsivePropertyGroup.setOnMediaQueryMatches((property)=>{property.assignResponsivePropertyToObj(dynamicObject)});
      this.$store.commit('addResponsivePropertyGroup', this.threeBasicResponsivePropertyGroup)
       this.$store.commit('addDynamicObject',dynamicObject
       ); // il faut que la fucntin responsive update une variable avec la position actuelle dans l'espace 3d et qui la donne au dynamic. De plus il prendra en in put la camera position
      this.$emit("onPictureLoaded");
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