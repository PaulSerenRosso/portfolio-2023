<script >


import {ResponsivePropertyGroup} from "@/composables/ResponsiveProperty/ResponsivePropertyGroup";
import {Vector3} from "three";
import {Vector2} from "@/composables/Vector2";
import * as THREE from "three";
import {getOrAddEventHandler, addRemoveAtSceneChangedResponsiveListener, getThreeTagObject} from "@/composables/StoreHelper";
class ResponsiveObject{
  startPosition;
  startSize;
  cameraStartPosition;
  cameraStartSize;

  constructor( obj) {

    this.obj = obj;
    this.cameraStartPosition =new THREE.Vector3(0,0,0);
    this.cameraStartSize = new Vector3(0,0,0);
    this.startPosition ;
    this.startSize;

  }

}
export default {
  name: "ThreeResponsiveTransform",
  data(){
    return{
    currentObj:{},
      camera: {}
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
      this.currentObj = new ResponsiveObject(getThreeTagObject(this.currentObjTag), this.threeTransformResponsivePropertyGroup.ratio);
      addRemoveAtSceneChangedResponsiveListener(this.resizeCurrentObject);
    },
    resizeCurrentObject(){
     const currentProperty = this.threeTransformResponsivePropertyGroup.responsivePropertyGroup[this.$store.state.responsiveEventHandler.devicePlateformId];
      this.updateDynamicObjectScene();
     currentProperty.assignResponsivePropertyToObj(this.currentObj);
    },
    updateDynamicObjectScale()
    {

      const startPointForMeasuringSize = new Vector3(-1,0,this.currentObj.cameraStartPosition.z).unproject(this.camera);
      const endPointForMeasuringSize = (new Vector3(this.currentObj.cameraStartSize.x,this.currentObj.cameraStartSize.y,this.currentObj.cameraStartPosition.z)
          .unproject(this.camera));
      this.currentObj.startSize = new Vector3(endPointForMeasuringSize.x-startPointForMeasuringSize.x,
          endPointForMeasuringSize.y-startPointForMeasuringSize.y,this.currentObj.cameraStartSize.z);
      console.log(this.currentObj.startSize);
      const maxScaleX = this.currentObj.startSize.x/this.originalSizeObjX;
      const maxScaleY = this.currentObj.startSize.y/this.originalSizeObjY;
      const maxScale = Math.min(maxScaleX, maxScaleY);
      console.log(this.currentObj.obj.scale);
      this.currentObj.obj.scale.set(maxScale, maxScale, this.currentObj.cameraStartSize.z)


    },
    updateDynamicObjectScene() {
    this.currentObj.startPosition = new Vector3(this.currentObj.cameraStartPosition.x,
       this.currentObj.cameraStartPosition.y, this.currentObj.cameraStartPosition.z)
        .unproject(this.camera);
     this.updateDynamicObjectScale(this.currentObj);
    },
  }
}
</script>


<style scoped>

</style>