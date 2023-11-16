<script>
import {
  CanvasTexture,
  Mesh,
  MeshBasicMaterial,
  PlaneGeometry
} from "three";
import * as THREE from "three";

export default {
  name: "ThreeText",
  data()
      {
        return{
          paddingTextPercentage:0.15,
          textFontSizePercentage:0.5,
          canvasSizeReference:Number,
        }
      },
  props: {
    textUsed:String,
    textObjectName: String,
    threeTextResponsivePropertyGroup: Object,
    movementLength:Number,
    movementFrequency:Number,
      },
  /*
  methods: {

    drawCanvasTexture(canvas, ctx) {

      this.canvasSizeReference = this.threeTextResponsivePropertyGroup.responsivePropertyGroup[this.$store.state.devicePlateformId].canvasSizeReference;
      console.log(this.canvasSizeReference)
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      canvas.height = this.canvasSizeReference;
      canvas.width = this.canvasSizeReference;
// Initially draw some text
      const textHeight = this.textFontSizePercentage * this.canvasSizeReference;
      ctx.font = textHeight + "px MyBlack";
      const textSize = ctx.measureText(this.textUsed);
      const textWidth = textSize.width;
      const actualTextHeight = textSize.actualBoundingBoxAscent + textSize.actualBoundingBoxDescent;
      const paddingInPixels = (this.paddingTextPercentage * this.canvasSizeReference);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      canvas.height = actualTextHeight + paddingInPixels * 2;
      canvas.width = textWidth + paddingInPixels * 2;
      ctx.fillStyle = "red";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#F5FCFFFF";
      ctx.font = textHeight + "px MyBlack";
      ctx.fillText(this.textUsed, paddingInPixels, canvas.height - paddingInPixels);
    }
  },
  mounted() {

    const canvas = document.getElementById("threeTextCanvas");
    const ctx = canvas.getContext('2d');
    const textTexture = new CanvasTexture(canvas);
    const material = new MeshBasicMaterial({ map: textTexture});
    ctx.textBaseline = "bottom";
    const geometry = new PlaneGeometry(canvas.width/canvas.height, 1);
    const mesh = new Mesh(geometry, material);
    this.$store.commit('addScene',mesh);
    const dynamicObject =new DynamicObject(mesh, this.movementLength,this.movementFrequency,
        this.textObjectName, undefined);
    this.$store.commit('addDynamicObject',dynamicObject
    );

    this.threeTextResponsivePropertyGroup.setOnMediaQueryMatches((property)=>{

      property.assignResponsivePropertyToObj(dynamicObject)
      this.drawCanvasTexture(canvas, ctx);
      material.map = new CanvasTexture(canvas);




    });
    this.$store.commit('addResponsivePropertyGroup', this.threeTextResponsivePropertyGroup)
    console.log(mesh.scale)
    // il faut que la fucntin responsive update une variable avec la position actuelle dans l'espace 3d et qui la donne au dynamic. De plus il prendra en in put la camera position

  }
*/
}
</script>


<style scoped>

</style>

