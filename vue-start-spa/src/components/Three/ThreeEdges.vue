<script >

import {
  BoxGeometry,
  Mesh,
  MeshBasicMaterial, ShaderMaterial, Vector3,
} from "three";


import {
  addEventListener,
  getThreeTagObject
} from "@/composables/StoreHelper";
import * as BufferGeometryUtils from "three/examples/jsm/utils/BufferGeometryUtils";



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
      parentObj: null,
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
  functional:true,
  render() {
    return null;
  },
  methods: {

    createEdges() {
      this.parentObj = getThreeTagObject(this.parentObjectTag);
      const parentObjGeometry = this.parentObj.geometry;

      const edgeParentScaleXGeometry = new BoxGeometry(parentObjGeometry.parameters.width+this.edgesWidthThickness*2, this.edgesWidthThickness, this.edgesZThickness*4);
      const edgeParentScaleYGeometry = new BoxGeometry(this.edgesWidthThickness, parentObjGeometry.parameters.height, this.edgesZThickness*4);
      const rightEdgeGeometry = edgeParentScaleYGeometry.clone();
      const leftEdgeGeometry = edgeParentScaleYGeometry.clone();
      const topEdgeGeometry = edgeParentScaleXGeometry.clone();
      const downEdgeGeometry = edgeParentScaleXGeometry.clone();
      const halfEdgesWidthThickness = this.edgesWidthThickness / 2;
      const halfParentGeometryHeight = parentObjGeometry.parameters.height / 2;
      const halfParentGeometryWidth = parentObjGeometry.parameters.width / 2;
      rightEdgeGeometry.translate(halfEdgesWidthThickness + halfParentGeometryWidth,0,0);
      leftEdgeGeometry.translate(-halfEdgesWidthThickness - halfParentGeometryWidth,0,0);
      topEdgeGeometry.translate(0,halfEdgesWidthThickness + halfParentGeometryHeight,0);
      downEdgeGeometry.translate(0,-halfEdgesWidthThickness - halfParentGeometryHeight,0);

      /*
      rightEdgeMesh.position.setX(halfEdgesWidthThickness + halfParentGeometryWidth);
      leftEdgeMesh.position.setX(-halfEdgesWidthThickness - halfParentGeometryWidth);
      topEdgeMesh.position.setY(halfEdgesWidthThickness + halfParentGeometryHeight);
      downEdgeMesh.position.setY(-halfEdgesWidthThickness - halfParentGeometryHeight);
      topRightCornerMesh.position.set(parentObjGeometry.parameters.width/2+halfEdgesWidthThickness,parentObjGeometry.parameters.height/2+halfEdgesWidthThickness, 0);
      topLeftCornerMesh.position.set(-parentObjGeometry.parameters.width/2-halfEdgesWidthThickness,parentObjGeometry.parameters.height/2+halfEdgesWidthThickness, 0);
      downRightCornerMesh.position.set(parentObjGeometry.parameters.width/2+halfEdgesWidthThickness,-parentObjGeometry.parameters.height/2-halfEdgesWidthThickness, 0);
      downLeftCornerMesh.position.set(-parentObjGeometry.parameters.width/2-halfEdgesWidthThickness,-parentObjGeometry.parameters.height/2-halfEdgesWidthThickness, 0);
*/

// Create a custom shader material
      var vertexShader = `
  varying vec3 vNormal;
  void main() {


    // Transform the normal to the correct orientation in camera space
    vNormal = normal;
    // Calculate the final position in camera space without modifying z

        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mvPosition;
  }
`;

      var fragmentShader = `
      varying vec3 vNormal;
  uniform vec3 vectorToCompare; // Vector value to compare with
  void main() {
    vec3 faceNormal = normalize(vNormal); // Calculate face normal
    float dotProduct = dot(faceNormal, vectorToCompare); // Calculate dot product

    if (dotProduct >= 0.0) {
      gl_FragColor =vec4(0.0706, 0.0902, 0.2392, 1.0); // Set the color to black for matching faces
    } else {
      gl_FragColor = vec4(1, 1, 1, 1.0); // Set the color to white for non-matching faces
    }
  }
`;

      var material = new ShaderMaterial({
        uniforms: {
          vectorToCompare: { value: new Vector3(0, 0, -1) }, // Replace with your desired vector value
        },
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
      });

      const geometry=BufferGeometryUtils.mergeGeometries([topEdgeGeometry, downEdgeGeometry, rightEdgeGeometry, leftEdgeGeometry]);
      geometry.computeBoundingSphere();
geometry.computeTangents()
      geometry.computeVertexNormals();
geometry.computeBoundingBox();
      const mergedMesh = new Mesh(geometry, material);

      this.parentObj.add(mergedMesh);




    },
  }
}
</script>
