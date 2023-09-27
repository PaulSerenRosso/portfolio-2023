<script lang="ts">

import {
  BoxGeometry,
  FrontSide,
  Mesh,
  MeshBasicMaterial,
  MeshLambertMaterial,
  MeshPhongMaterial,
  MeshToonMaterial,
} from "three";


export default {
  name: "ThreeEdges",
  props:{
    dynamicParentObjectName:String,
    edgesWidthThickness:Number,
    edgesZThickness:Number,
    edgesColor:String,
    needToBeActivated :Boolean
  },
  methods: {
    createEdges() {
      this.$store.commit('addChildObjectToDynamicObject', {
        dynamicParentObjectName: this.dynamicParentObjectName, onAdded: (parentObj) => {
          const parentObjGeometry = parentObj.geometry;
          const edgeParentScaleXGeometry = new BoxGeometry(parentObjGeometry.parameters.width, this.edgesWidthThickness, this.edgesZThickness);
          const edgeParentScaleYGeometry = new BoxGeometry(this.edgesWidthThickness, parentObjGeometry.parameters.height, this.edgesZThickness);
          const edgesMaterial = new MeshToonMaterial({color: this.edgesColor, fog: false, side:FrontSide, shadowSide:FrontSide});

          const topEdgeMesh = new Mesh(edgeParentScaleXGeometry, edgesMaterial);
          topEdgeMesh.castShadow = false;
          topEdgeMesh.receiveShadow = true;
          const downEdgeMesh = new Mesh(edgeParentScaleXGeometry, edgesMaterial);
          downEdgeMesh.castShadow = false;
          downEdgeMesh.receiveShadow = true;
          const leftEdgeMesh = new Mesh(edgeParentScaleYGeometry, edgesMaterial);
          leftEdgeMesh.castShadow = false;
          leftEdgeMesh.receiveShadow = true;
          const rightEdgeMesh = new Mesh(edgeParentScaleYGeometry, edgesMaterial);
          rightEdgeMesh.castShadow = false;
          rightEdgeMesh.receiveShadow = true;
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
