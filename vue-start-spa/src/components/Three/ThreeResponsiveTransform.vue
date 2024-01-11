<script >
import {ResponsivePropertyGroup} from "@/composables/ResponsiveProperty/ResponsivePropertyGroup";
import {Quaternion, Vector3} from "three";

import {
  getThreeTagObject,
  addCameraYScrollListener, addEventListener, addEvent,
} from "@/composables/StoreHelper";
import {degToRad} from "@/composables/Math";

export default {
  name: "ThreeResponsiveTransform",
  data(){
    return{
    currentObj:{},
      camera: {},
      currentProperty: {},
      currentRatioObj:{},
      isRatioObjCreated:false,
      macroContainer: undefined,
    }
  },
  functional:true,
  render() {
    return null;
  },
  props: {
    threeTransformResponsivePropertyGroup:ResponsivePropertyGroup,
    currentObjTag:String,
    ratioObjTag:String,
    eventKeyForGetRatioObjTag:String,
    macroContainerResizeEventKey:String,

  },
  mounted() {
    if(this.eventKeyForGetRatioObjTag === ""){
      this.applyResponsiveTransform();

    }
    else{

      addEvent(this.eventKeyForGetRatioObjTag);
      addEventListener(this.applyResponsiveTransform,this.eventKeyForGetRatioObjTag)
    }
  },
  created() {
    addEventListener(this.updateDynamicObjectScene, this.macroContainerResizeEventKey);
  },

  methods:{

    applyResponsiveTransform() {
      this.isRatioObjCreated = true;
      this.camera = this.$store.getters.getThreeObjectTag("currentCamera");
      this.currentObj = getThreeTagObject(this.currentObjTag);
      this.currentRatioObj = getThreeTagObject(this.ratioObjTag);

      addCameraYScrollListener(this.updateDynamicObjectPositionScene);
      this.updateDynamicObjectScene();
    },
    updateDynamicObjectScene(obj){

      if(obj !== undefined){
        this.macroContainer = obj;
      }
      if(this.macroContainer !== undefined) {
        this.currentProperty = this.threeTransformResponsivePropertyGroup.responsivePropertyGroup[this.$store.state.responsiveEventHandler.devicePlateformId];
        this.currentProperty.update(this.macroContainer);
        if (this.isRatioObjCreated) {
          this.updateDynamicObjectScale();
          var quaternion = new Quaternion();
          quaternion.setFromAxisAngle(new Vector3(0, 1, 0), this.currentProperty.rotationY * degToRad); // Rotate around X axis
          this.currentObj.setRotationFromQuaternion(quaternion);
          //this.currentObj.rotation.y = this.currentProperty.rotationY*degToRad;
          this.updateDynamicObjectPositionScene();
        }
      }
    },
    updateDynamicObjectScale()
    {

      const startPointForMeasuringSize = new Vector3(-1,-1,this.currentProperty.position.z).unproject(this.camera);
      const endPointForMeasuringSize = (new Vector3(-1+this.currentProperty.scale.x,-1+this.currentProperty.scale.y,this.currentProperty.position.z)
          .unproject(this.camera));
      const startSize = new Vector3(endPointForMeasuringSize.x-startPointForMeasuringSize.x,
          endPointForMeasuringSize.y-startPointForMeasuringSize.y,this.currentProperty.scale.z);
      const maxScaleX = startSize.x/this.currentRatioObj.geometry.parameters.width;
      const maxScaleY = startSize.y;
      const maxScale = Math.min(maxScaleX, maxScaleY);

      this.currentObj.scale.set(maxScale, maxScale, this.currentProperty.scale.z)
    },
    updateDynamicObjectPositionScene() {
     const newPosition = new Vector3(this.currentProperty.position.x,
         this.currentProperty.position.y+this.$store.state.threeSceneCreator.cameraYScroll, this.currentProperty.position.z)
          .unproject(this.camera);
    this.currentObj.position.set(newPosition.x, newPosition.y, newPosition.z);
    },
  }
}
</script>

<style scoped>

</style>