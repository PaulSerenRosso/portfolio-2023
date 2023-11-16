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
import {
  addEventListener,
  addRemoveAtSceneChangedResponsiveListener,
  getThreeTagObject
} from "@/composables/StoreHelper";

export default {
  name: "ThreeEdges",
  props: {
    parentObjectTag: String,
    edgesWidthThickness: Number,
    edgesZThickness: Number,
    edgesColor: String,
    threeBasicResponsivePropertyGroup: Object,
    onParentCreatedKey: String,
  },
  data() {
    return {
      currentSideColored: null,
      parentObj: null,
      threeEdgesResponsivePropertyGroup: null,
      edgeTopMaterial: [],
      edgeDownMaterial: [],
      edgeLeftMaterial: [],
      edgeRightMaterial: [],
      darkMaterial: null,
      lightMaterial: null,

    }
  },
  methods: {
    refreshMaterialEdges() {

      const responsiveProperty = this.threeEdgesResponsivePropertyGroup[this.$store.state.devicePlateformId];
      if (responsiveProperty.sideColored !== this.currentSideColored) {
        const leftSideMaterial = (responsiveProperty.sideColored + 1) === 2 ? this.darkMaterial : this.lightMaterial;
        const rightSideMaterial = (responsiveProperty.sideColored - 1) === -2 ? this.darkMaterial : this.lightMaterial;
        console.log(rightSideMaterial)
        this.edgeTopMaterial[0] = rightSideMaterial;
        this.edgeTopMaterial[1] = leftSideMaterial;
        this.edgeDownMaterial[0] = rightSideMaterial;
        this.edgeDownMaterial[1] = leftSideMaterial;
        this.edgeLeftMaterial[1] = leftSideMaterial;
        this.edgeRightMaterial[0] = rightSideMaterial;
        this.currentSideColored = responsiveProperty.sideColored;
      }
    },
    createEdges() {
      this.parentObj = getThreeTagObject(this.parentObjectTag);
      const parentObjGeometry = this.parentObj.geometry;
      const allThreeEdgesResponsiveProperty = [];
      const edgeParentScaleXGeometry = new BoxGeometry(parentObjGeometry.parameters.width, this.edgesWidthThickness, this.edgesZThickness);
      const edgeParentScaleYGeometry = new BoxGeometry(this.edgesWidthThickness, parentObjGeometry.parameters.height, this.edgesZThickness);
      this.lightMaterial = new MeshBasicMaterial({color: "#F5FCFFFF", fog: false});
      this.darkMaterial = new MeshBasicMaterial({color: "#424242", fog: false});

      this.edgeTopMaterial = [this.lightMaterial, this.lightMaterial, this.lightMaterial, this.darkMaterial, this.lightMaterial, this.darkMaterial];
      this.edgeDownMaterial = [this.lightMaterial, this.lightMaterial, this.darkMaterial, this.darkMaterial, this.lightMaterial, this.darkMaterial];
      this.edgeLeftMaterial = [this.darkMaterial, this.lightMaterial, this.lightMaterial, this.darkMaterial, this.lightMaterial, this.darkMaterial];
      this.edgeRightMaterial = [this.lightMaterial, this.darkMaterial, this.lightMaterial, this.darkMaterial, this.lightMaterial, this.darkMaterial];
      const topEdgeMesh = new Mesh(edgeParentScaleXGeometry, this.edgeTopMaterial);
      const downEdgeMesh = new Mesh(edgeParentScaleXGeometry, this.edgeDownMaterial);
      const leftEdgeMesh = new Mesh(edgeParentScaleYGeometry, this.edgeLeftMaterial);
      const rightEdgeMesh = new Mesh(edgeParentScaleYGeometry, this.edgeRightMaterial);

      const halfEdgesWidthThickness = this.edgesWidthThickness / 2;
      const halfParentGeometryHeight = parentObjGeometry.parameters.height / 2;
      const halfParentGeometryWidth = parentObjGeometry.parameters.width / 2;
      rightEdgeMesh.position.setX(halfEdgesWidthThickness + halfParentGeometryWidth);
      leftEdgeMesh.position.setX(-halfEdgesWidthThickness - halfParentGeometryWidth);
      topEdgeMesh.position.setY(halfEdgesWidthThickness + halfParentGeometryHeight);
      downEdgeMesh.position.setY(-halfEdgesWidthThickness - halfParentGeometryHeight);
      this.parentObj.add(topEdgeMesh);
      this.parentObj.add(downEdgeMesh);
      this.parentObj.add(leftEdgeMesh);
      this.parentObj.add(rightEdgeMesh);

      for (var index in this.threeBasicResponsivePropertyGroup.responsivePropertyGroup) {
        var value = this.threeBasicResponsivePropertyGroup.responsivePropertyGroup[index].rotationY;
        allThreeEdgesResponsiveProperty.push(new ThreeEdgesResponsiveProperty(value === 0 ? 0 : value > 0 ? 1 : -1));
      }
      this.threeEdgesResponsivePropertyGroup = new ResponsivePropertyGroup(allThreeEdgesResponsiveProperty[0], allThreeEdgesResponsiveProperty[1], allThreeEdgesResponsiveProperty[2], allThreeEdgesResponsiveProperty[3]);
      // add event media query
      addRemoveAtSceneChangedResponsiveListener(this.refreshMaterialEdges);
    },
    mounted() {
      addEventListener(this.createEdges, this.onParentCreatedKey);
    },
  }
}
</script>
