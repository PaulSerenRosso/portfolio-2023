<script >

import {
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
} from "three";


import {
  addEventListener,
  getThreeTagObject
} from "@/composables/StoreHelper";

export default {
  name: "ThreeEdges",
  props: {
    parentObjectTag: String,
    edgesWidthThickness: Number,
    edgesZThickness: Number,
    onParentCreatedKey: String,
  },
  data() {
    return {
      currentSideColored: null,
      parentObj: null,
      edgeTopMaterial: [],
      edgeDownMaterial: [],
      edgeLeftMaterial: [],
      edgeRightMaterial: [],
      edgeCornerTopLeftMaterial: [],
      edgeCornerTopRightMaterial: [],
      edgeCornerDownLeftMaterial: [],
      edgeCornerDownRightMaterial: [],
      darkMaterial: null,
      lightMaterial: null,
      transparentMaterial:null,
    }
  },
  mounted() {
    if(this.onParentCreatedKey === undefined){
      this.createEdges();
    }
    else {
      addEventListener(this.createEdges, this.onParentCreatedKey);
    }

  },
  methods: {

    createEdges() {
      this.parentObj = getThreeTagObject(this.parentObjectTag);
      const parentObjGeometry = this.parentObj.geometry;

      const edgeParentScaleXGeometry = new BoxGeometry(parentObjGeometry.parameters.width, this.edgesWidthThickness, this.edgesZThickness);
      const edgeParentScaleYGeometry = new BoxGeometry(this.edgesWidthThickness, parentObjGeometry.parameters.height, this.edgesZThickness);
      const edgeParentCornerGeometry = new BoxGeometry(this.edgesWidthThickness,this.edgesWidthThickness, this.edgesZThickness);
      this.lightMaterial = new MeshBasicMaterial({color: "#F5FCFFFF", fog: false});
      this.darkMaterial = new MeshBasicMaterial({color: "#424242", fog: false});
      this.transparentMaterial = new MeshBasicMaterial({visible:false });
      this.edgeTopMaterial = [this.transparentMaterial, this.transparentMaterial, this.darkMaterial, this.darkMaterial, this.lightMaterial, this.darkMaterial];
      this.edgeDownMaterial = [this.lightMaterial, this.lightMaterial, this.darkMaterial, this.darkMaterial, this.lightMaterial, this.darkMaterial];
      this.edgeLeftMaterial = [this.darkMaterial, this.darkMaterial, this.transparentMaterial, this.transparentMaterial, this.lightMaterial, this.darkMaterial];
      this.edgeRightMaterial = [this.darkMaterial, this.darkMaterial,this.transparentMaterial, this.transparentMaterial, this.lightMaterial, this.darkMaterial];
      this.edgeCornerTopLeftMaterial = [this.transparentMaterial, this.darkMaterial, this.darkMaterial, this.transparentMaterial, this.lightMaterial, this.darkMaterial];
      this.edgeCornerTopRightMaterial = [this.darkMaterial, this.transparentMaterial, this.darkMaterial, this.transparentMaterial, this.lightMaterial, this.darkMaterial];
      this.edgeCornerDownRightMaterial = [this.darkMaterial, this.transparentMaterial, this.transparentMaterial, this.darkMaterial, this.lightMaterial, this.darkMaterial];
      this.edgeCornerDownLeftMaterial = [this.transparentMaterial, this.darkMaterial, this.transparentMaterial, this.darkMaterial, this.lightMaterial, this.darkMaterial];
      const topEdgeMesh = new Mesh(edgeParentScaleXGeometry, this.edgeTopMaterial);
      const downEdgeMesh = new Mesh(edgeParentScaleXGeometry, this.edgeDownMaterial);
      const leftEdgeMesh = new Mesh(edgeParentScaleYGeometry, this.edgeLeftMaterial);
      const rightEdgeMesh = new Mesh(edgeParentScaleYGeometry, this.edgeRightMaterial);
      const topRightCornerMesh = new Mesh(edgeParentCornerGeometry, this.edgeCornerTopRightMaterial);
      const topLeftCornerMesh = new Mesh(edgeParentCornerGeometry, this.edgeCornerTopLeftMaterial);
      const downRightCornerMesh = new Mesh(edgeParentCornerGeometry, this.edgeCornerDownRightMaterial);
      const downLeftCornerMesh = new Mesh(edgeParentCornerGeometry, this.edgeCornerDownLeftMaterial);
      const halfEdgesWidthThickness = this.edgesWidthThickness / 2;
      const halfParentGeometryHeight = parentObjGeometry.parameters.height / 2;
      const halfParentGeometryWidth = parentObjGeometry.parameters.width / 2;
      rightEdgeMesh.position.setX(halfEdgesWidthThickness + halfParentGeometryWidth);
      leftEdgeMesh.position.setX(-halfEdgesWidthThickness - halfParentGeometryWidth);
      topEdgeMesh.position.setY(halfEdgesWidthThickness + halfParentGeometryHeight);
      downEdgeMesh.position.setY(-halfEdgesWidthThickness - halfParentGeometryHeight);
      topRightCornerMesh.position.set(parentObjGeometry.parameters.width/2+halfEdgesWidthThickness,parentObjGeometry.parameters.height/2+halfEdgesWidthThickness, 0);
      topLeftCornerMesh.position.set(-parentObjGeometry.parameters.width/2-halfEdgesWidthThickness,parentObjGeometry.parameters.height/2+halfEdgesWidthThickness, 0);
      downRightCornerMesh.position.set(parentObjGeometry.parameters.width/2+halfEdgesWidthThickness,-parentObjGeometry.parameters.height/2-halfEdgesWidthThickness, 0);
      downLeftCornerMesh.position.set(-parentObjGeometry.parameters.width/2-halfEdgesWidthThickness,-parentObjGeometry.parameters.height/2-halfEdgesWidthThickness, 0);

      this.parentObj.add(topEdgeMesh);
      this.parentObj.add(downEdgeMesh);
      this.parentObj.add(leftEdgeMesh);
      this.parentObj.add(rightEdgeMesh);
      this.parentObj.add(topRightCornerMesh);
      this.parentObj.add(topLeftCornerMesh);
      this.parentObj.add(downRightCornerMesh);
      this.parentObj.add(downLeftCornerMesh);



    },
  }
}
</script>
