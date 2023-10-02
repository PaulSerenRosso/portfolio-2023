<script >

import {
  BoxGeometry,
  FrontSide,
  Mesh,
  MeshBasicMaterial,
  MeshLambertMaterial,
  MeshPhongMaterial, MeshStandardMaterial,
  MeshToonMaterial,
} from "three";
import {ResponsivePropertyGroup} from "@/composables/ResponsiveProperty/ResponsivePropertyGroup.js";
import {ThreeEdgesResponsiveProperty} from "@/composables/ResponsiveProperty/ThreeEdgesResponsiveProperty.js";

export default {
  name: "ThreeEdges",
  props:{
    dynamicParentObjectName:String,
    edgesWidthThickness:Number,
    edgesZThickness:Number,
    edgesColor:String,
    needToBeActivated :Boolean,
    threeBasicResponsivePropertyGroup: Object


  },
  data(){
    return{
      currentSideColored:null,
    }
  },
  methods: {
    createEdges() {
      this.$store.commit('addChildObjectToDynamicObject', {
        dynamicParentObjectName: this.dynamicParentObjectName, onAdded: (parentObj) => {
          const parentObjGeometry = parentObj.geometry;
          const allThreeEdgesResponsiveProperty = [];

          const edgeParentScaleXGeometry = new BoxGeometry(parentObjGeometry.parameters.width, this.edgesWidthThickness, this.edgesZThickness);
          const edgeParentScaleYGeometry = new BoxGeometry(this.edgesWidthThickness, parentObjGeometry.parameters.height, this.edgesZThickness);
          const lightMaterial = new MeshBasicMaterial({color:"#F5FCFFFF", fog: false});
          const darkMaterial = new MeshBasicMaterial({color:"#424242", fog:false});

          let edgeTopMaterial = [lightMaterial, lightMaterial, lightMaterial, darkMaterial, lightMaterial , darkMaterial];
          let edgeDownMaterial = [lightMaterial, lightMaterial, darkMaterial, darkMaterial, lightMaterial , darkMaterial];
          let edgeLeftMaterial = [darkMaterial, lightMaterial, lightMaterial, darkMaterial, lightMaterial , darkMaterial];
          let edgeRightMaterial = [lightMaterial, darkMaterial, lightMaterial, darkMaterial, lightMaterial , darkMaterial];
          const topEdgeMesh = new Mesh(edgeParentScaleXGeometry, edgeTopMaterial);
          const downEdgeMesh = new Mesh(edgeParentScaleXGeometry, edgeDownMaterial);
          const leftEdgeMesh = new Mesh(edgeParentScaleYGeometry, edgeLeftMaterial);
          const rightEdgeMesh = new Mesh(edgeParentScaleYGeometry, edgeRightMaterial);

          const halfEdgesWidthThickness = this.edgesWidthThickness / 2;
          const halfParentGeometryHeight = parentObjGeometry.parameters.height / 2;
          const halfParentGeometryWidth = parentObjGeometry.parameters.width / 2;
          rightEdgeMesh.position.setX(halfEdgesWidthThickness + halfParentGeometryWidth);
          leftEdgeMesh.position.setX(-halfEdgesWidthThickness - halfParentGeometryWidth);
          topEdgeMesh.position.setY(halfEdgesWidthThickness + halfParentGeometryHeight);
          downEdgeMesh.position.setY(-halfEdgesWidthThickness - halfParentGeometryHeight);
          parentObj.add(topEdgeMesh);
          parentObj.add(downEdgeMesh);
          parentObj.add(leftEdgeMesh);
          parentObj.add(rightEdgeMesh);
          for (var index in this.threeBasicResponsivePropertyGroup.responsivePropertyGroup) {
            var value = this.threeBasicResponsivePropertyGroup.responsivePropertyGroup[index].rotationY;
            allThreeEdgesResponsiveProperty.push(new ThreeEdgesResponsiveProperty(value === 0 ? 0 : value > 0 ? 1:-1));

          }
          const threeEdgesResponsivePropertyGroup = new ResponsivePropertyGroup(allThreeEdgesResponsiveProperty[0], allThreeEdgesResponsiveProperty[1],allThreeEdgesResponsiveProperty[2],allThreeEdgesResponsiveProperty[3]);
          threeEdgesResponsivePropertyGroup.setOnMediaQueryMatches((responsiveProperty)=>{
            if(responsiveProperty.sideColored !== this.currentSideColored) {
              const leftSideMaterial = (responsiveProperty.sideColored +1) === 2 ? darkMaterial:lightMaterial ;
              const rightSideMaterial = (responsiveProperty.sideColored -1) === -2 ? darkMaterial:lightMaterial;
              console.log(rightSideMaterial)
              edgeTopMaterial[0] = rightSideMaterial;
              edgeTopMaterial[1] = leftSideMaterial;
              edgeDownMaterial[0] = rightSideMaterial;
              edgeDownMaterial[1] = leftSideMaterial;
              edgeLeftMaterial[1] = leftSideMaterial;
              edgeRightMaterial[0] = rightSideMaterial;
              this.currentSideColored= responsiveProperty.sideColored ;
            }




          });
          this.$store.commit("addResponsivePropertyGroup", threeEdgesResponsivePropertyGroup);

        }
      });
    }
  },
  mounted() {
    if(!this.needToBeActivated){
      this.createEdges();
    }
  },

  activated(){
    if(this.needToBeActivated){
      this.createEdges();

    }

  }
}
</script>
