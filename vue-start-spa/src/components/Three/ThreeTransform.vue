<script >
import {Vector3} from "@/composables/Vector3";
import {Vector2} from "@/composables/Vector2";
import {DEG2RAD} from "three/src/math/MathUtils";
import getOrAddEventHandler from "@/store/StoreHelper";

export default{
  name: "ThreeTransform",
  props:{
    position:Vector3,
    scale:Vector2,
    rotation:Vector3,
    parentTag:String,
    currentObjTag:String,
    currentObjAddedEventKey:String,
  },
  mounted() {
    if(this.currentObjAddedEventKey !== undefined)
    {
      this.$store.eventsManager.getters.getEventHandler(this.currentObjAddedEventKey)
          .addEventListener(this.applyTransform);
    }
    else{
      this.applyTransform();
    }
  },
  methods:{
    applyTransform(){
      const currentObj = this.$store.threeObjectTagHandler.getters.getThreeObjectTag(this.currentObjTag);
      currentObj.position.set(this.position.x, this.position.y, this.position.z);
      currentObj.rotation.set(this.rotation.x*DEG2RAD, this.rotation.y*DEG2RAD, this.rotation.z*DEG2RAD);
      currentObj.scale.set(this.scale.x, this.scale.y, this.scale.z);
      const currentParent = this.$store.threeObjectTagHandler.getters.getThreeObjectTag(this.parentTag);
      currentParent.add(currentObj);

    }
  }


}
</script>

<template>

</template>

<style scoped>

</style>