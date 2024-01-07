<script>


import {Group} from "three";
import {addThreeTagObject, getThreeTagObject} from "@/composables/StoreHelper";

export default {
  name: "ThreeJsGroupObject",
  props:{
    objTag:String,
    parentObjTag:String,
  },
  mounted(){
    let objParent = getThreeTagObject(this.parentObjTag);
    let obj = new Group();
    objParent.add(obj);
   addThreeTagObject(obj, this.objTag);
  },
  functional:true,
  render() {
    return null;
  },
}
</script>



<style scoped>

</style>