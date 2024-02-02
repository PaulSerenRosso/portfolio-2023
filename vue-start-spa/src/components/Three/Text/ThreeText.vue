<script>
import {
  CanvasTexture,
  Mesh,
  MeshBasicMaterial,
  PlaneGeometry, Texture, TextureLoader
} from "three";

import {
  addRemoveAtSceneChangedResponsiveListener,
  addThreeTagObject,
  getThreeTagObject, raiseAndRemoveEvent
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
          material:Object,
          height:0,
          width: 0,
        }
      },
  props: {
    textUsed:String,
    parentTextTag:String,
    textTag:String,
    isDebugRatio:Boolean,
    textEventCreated:String,
    textResolution:Number,

      },

  methods: {

    drawCanvasTexture() {
      this.canvasSizeReference = this.textResolution;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.canvas.height = this.canvasSizeReference;
      this.canvas.width = this.canvasSizeReference;
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
      this.ctx.fillStyle = "white";
      this.ctx.font = textHeight + "px MyBlack";
      this.ctx.fillText(this.textUsed, paddingInPixels, this.canvas.height - paddingInPixels);
      const imageDataUrl = this.canvas.toDataURL();
      this.height = this.canvas.height;
      this.width = this.canvas.width;
       new TextureLoader().load(imageDataUrl, (texture)=>{
         texture.colorSpace ="srgb" ;
        this.material = new MeshBasicMaterial({ map: texture});

        const geometry = new PlaneGeometry(this.width/this.height, 1);
        const mesh = new Mesh(geometry, this.material);
        addThreeTagObject(mesh, this.textTag);
        getThreeTagObject(this.parentTextTag).add(mesh);
        raiseAndRemoveEvent(this.textEventCreated);
      });


    },

  },
  mounted() {
    this.canvas = document.getElementById("threeTextCanvas");
    this.ctx = this.canvas.getContext('2d');
    this.ctx.textBaseline = "bottom";
    waitForWebfonts(['MyBlack'],()=>{this.drawCanvasTexture(); });
  }

}
</script>


<style scoped>

</style>


