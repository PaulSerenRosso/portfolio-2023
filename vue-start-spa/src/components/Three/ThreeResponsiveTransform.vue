<script >


import {ResponsivePropertyGroup} from "@/composables/ResponsiveProperty/ResponsivePropertyGroup";
import {Quaternion, Vector3} from "three";

import {getOrAddEventHandler, addRemoveAtSceneChangedResponsiveListener, getThreeTagObject} from "@/composables/StoreHelper";
import {degToRad, remap} from "@/composables/Math";

export default {
  name: "ThreeResponsiveTransform",
  data(){
    return{
    currentObj:{},
      camera: {},
      currentProperty: {}
    }

  },
  props: {
    threeTransformResponsivePropertyGroup:ResponsivePropertyGroup,
    currentObjTag:String,
    originalSizeObjX:Number,
    originalSizeObjY:Number,
  },
  mounted() {
    this.camera = this.$store.getters.getThreeObjectTag("currentCamera");
    this.applyResponsiveTransform();
  },
  methods:{
    applyResponsiveTransform() {
      this.currentObj = getThreeTagObject(this.currentObjTag);
      addRemoveAtSceneChangedResponsiveListener(this.resizeCurrentObject);
      this.resizeCurrentObject();
    },
    resizeCurrentObject(){
     this.currentProperty = this.threeTransformResponsivePropertyGroup.responsivePropertyGroup[this.$store.state.responsiveEventHandler.devicePlateformId];

     this.updateDynamicObjectScene();

    },
    updateDynamicObjectScene(){
      this.updateDynamicObjectScale();
      var quaternion = new Quaternion();
      quaternion.setFromAxisAngle(new Vector3(0, 1, 0), this.currentProperty.rotationY*degToRad); // Rotate around X axis
      this.currentObj.setRotationFromQuaternion(quaternion);
      //this.currentObj.rotation.y = this.currentProperty.rotationY*degToRad;
      this.updateDynamicObjectPositionScene();
    },
    updateDynamicObjectScale()
    {

      const startPointForMeasuringSize = new Vector3(-1,-1,this.currentProperty.position.z).unproject(this.camera);
      const endPointForMeasuringSize = (new Vector3(this.currentProperty.scale.x,this.currentProperty.scale.y,this.currentProperty.position.z)
          .unproject(this.camera));
      const startSize = new Vector3(endPointForMeasuringSize.x-startPointForMeasuringSize.x,
          endPointForMeasuringSize.y-startPointForMeasuringSize.y,this.currentProperty.scale.z);
      const maxScaleX = startSize.x/this.originalSizeObjX;
      const maxScaleY = startSize.y/this.originalSizeObjY;
      const maxScale = Math.min(maxScaleX, maxScaleY);

      this.currentObj.scale.set(maxScale, maxScale, this.currentProperty.scale.z)
    },
    updateDynamicObjectPositionScene() {
     const newPosition = new Vector3(this.currentProperty.position.x,
         this.currentProperty.position.y+this.$store.state.threeSceneCreator.cameraYScroll, this.currentProperty.position.z)
          .unproject(this.camera);



    this.currentObj.position.set(newPosition.x, newPosition.y, newPosition.z);
     this.updateDynamicObjectScale(this.currentObj);
    },
  }
}
</script>


<style scoped>

</style>