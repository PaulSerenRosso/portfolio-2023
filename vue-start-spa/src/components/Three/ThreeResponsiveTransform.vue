<script >


import {ResponsivePropertyGroup} from "@/composables/ResponsiveProperty/ResponsivePropertyGroup";
import getOrAddEventHandler from "@/store/StoreHelper";
import {Vector3} from "three";

export default {
  name: "ThreeResponsiveTransform",
  data(){
    return{
    currentObj:Object,
    }
  },
  props: {
    threeTransformResponsivePropertyGroup:ResponsivePropertyGroup,
    currentObjTag:String,
    currentObjAddedEventKey:String,
    isScalingInRelationChildren:Boolean,
  },
  mounted() {
    if(this.currentObjAddedEventKey !== undefined){
      this.$store.eventsManager.getters.getEventHandler(this.applyResponsiveTransform);
    }
    else this.applyResponsiveTransform();
  },
  methods:{
    applyResponsiveTransform(){
      this.currentObj = this.$store.threeObjectTagHandler.getters.getThreeObjectTag(this.currentObjTag);
      this.$store.responsiveEventHandler.state.onWindowResizeHandler.addEventListener(this.resizeCurrentObject);
    },
    resizeCurrentObject(){
     const currentProperty = this.threeTransformResponsivePropertyGroup.responsivePropertyGroup[this.$store.responsiveEventHandler.state.devicePlateformId];
     currentProperty.assignResponsivePropertyToObj(this.currentObj);

    },
    updateDynamicObjectScale(state, obj)
    {
      const startPointForMeasuringSize = new Vector3(-1,0,obj.cameraStartPosition.z).unproject(state.camera);
      const endPointForMeasuringSize = (new Vector3(obj.cameraStartSize.x,obj.cameraStartSize.y,obj.cameraStartPosition.z).unproject(state.camera));

      obj.startSize = new Vector3(endPointForMeasuringSize.x-startPointForMeasuringSize.x,
          endPointForMeasuringSize.y-startPointForMeasuringSize.y,obj.cameraStartSize.z);
      const maxScaleX = obj.startSize.x/obj.obj.geometry.parameters.width;
      const maxScaleY = obj.startSize.y/obj.obj.geometry.parameters.height;
      const maxScale = Math.min(maxScaleX, maxScaleY);
      obj.obj.scale.set(maxScale, maxScale, obj.cameraStartSize.z)
    },
    updateDynamicObjectScene(state, obj) {
      obj.startPosition = new Vector3(obj.cameraStartPosition.x,
          obj.cameraStartPosition.y, obj.cameraStartPosition.z)
          .unproject(state.camera);

      store.commit("updateDynamicObjectScale", obj);
      if(obj.onStartPositionChanged.length != 0)
      {

        obj.onStartPositionChanged.forEach((item) =>
        {
          item(obj);
        });
      }
    },
  }
}
</script>

<template>

</template>

<style scoped>

</style>