<script >
import {addRemoveAtSceneChangedUpdateListener, getThreeTagObject} from "@/composables/StoreHelper";

class LevitatedObject{

  constructor(obj, movementLength, movementFrequency,  ) {
    this.obj = obj;
    this.movementLength = movementLength;
    this.movementFrequency = movementFrequency;
    this.randomStartMovement = Math.random()*6;
  }
}

export default {
  name: "ThreeLevitatedObject",
  props:{
    currentObjTag:String,
    movementLength:Number,
    movementFrequency:Number,
  },
  data(){
    return{
      currentLevitatedObject:{}
    }
  },
  mounted(){

    this.currentLevitatedObject = new LevitatedObject(getThreeTagObject(this.currentObjTag),
        this.movementLength, this.movementFrequency);
    addRemoveAtSceneChangedUpdateListener(this.levitateObject);
  },
  methods:{
    levitateObject(){
      this.currentLevitatedObject.obj.position.setY(Math.sin(
          (this.currentLevitatedObject.randomStartMovement+this.$store.state.updateLoopHandler.clock.getElapsedTime())
          *this.currentLevitatedObject.movementFrequency)*this.currentLevitatedObject.movementLength);
    }
  }
}
</script>
<style scoped>

</style>