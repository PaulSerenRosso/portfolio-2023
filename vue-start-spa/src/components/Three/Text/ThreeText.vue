<script>
import {
  CanvasTexture,
  Mesh,
  MeshBasicMaterial,
  PlaneGeometry
} from "three";

import {
  addRemoveAtSceneChangedResponsiveListener,
  addThreeTagObject,
  getThreeTagObject
} from "@/composables/StoreHelper";

import {
  waitForWebfonts
} from "@/composables/FontLoadHelper"
export default {
  name: "ThreeText",
  data()
      {
        return{
          paddingTextPercentage:0.15,
          textFontSizePercentage:0.5,
          canvasSizeReference:Number,
          canvas:Object,
          ctx:Object,
          material:Object
        }
      },
  props: {
    textUsed:String,
    threeTextResponsivePropertyGroup: Object,
    parentTextTag:String,
    textTag:String,
    isDebugRatio:Boolean,

      },

  methods: {

    drawCanvasTexture() {
      this.canvasSizeReference = this.threeTextResponsivePropertyGroup.responsivePropertyGroup[this.$store.state.responsiveEventHandler.devicePlateformId].canvasSizeReference;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.canvas.height = this.canvasSizeReference;
      this.canvas.width = this.canvasSizeReference;
// Initially draw some text
      const textHeight = this.textFontSizePercentage * this.canvasSizeReference;
      this.ctx.font = textHeight + "px MyBlack";
      const textSize = this.ctx.measureText(this.textUsed);
      const textWidth = textSize.width;
      const actualTextHeight = textSize.actualBoundingBoxAscent + textSize.actualBoundingBoxDescent;
      const paddingInPixels = (this.paddingTextPercentage * this.canvasSizeReference);
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.canvas.height = actualTextHeight + paddingInPixels * 2;
      this.canvas.width = textWidth + paddingInPixels * 2;
      this.ctx.fillStyle = this.$store.state.threeSceneCreator.textsColor[this.textUsed];
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

      this.ctx.font = textHeight + "px MyBlack";
      this.ctx.fillText(this.textUsed, paddingInPixels, this.canvas.height - paddingInPixels);

      this.material.map = new CanvasTexture(this.canvas);

    },

  },
  mounted() {

    this.canvas = document.getElementById("threeTextCanvas");
    this.ctx = this.canvas.getContext('2d');
    const textTexture = new CanvasTexture(this.canvas);
    this.material = new MeshBasicMaterial({ map: textTexture});
    this.ctx.textBaseline = "bottom";
    this.drawCanvasTexture();
    const geometry = new PlaneGeometry(this.canvas.width/this.canvas.height, 1);
    if(this.isDebugRatio){
      console.log(this.textTag+(this.canvas.width/this.canvas.height));
    }
    const mesh = new Mesh(geometry, this.material);
    addThreeTagObject(mesh, this.textTag);
    getThreeTagObject(this.parentTextTag).add(mesh);
    addRemoveAtSceneChangedResponsiveListener(this.drawCanvasTexture);
    waitForWebfonts(['MyBlack'],()=>{this.drawCanvasTexture(); });


  }

}
</script>


<style scoped>

</style>

