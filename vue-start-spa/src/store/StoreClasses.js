import * as THREE from 'three';
import {Vector3} from "@/composables/Vector3";


export class DynamicObject {
    startPosition;
    startSize;
    cameraStartPosition;
    cameraStartSize;
    constructor(obj, movementLength, movementFrequency, objectName, onStartPositionChanged) {
        this.obj = obj;
        this.cameraStartPosition =new THREE.Vector3(0,0,0);
        this.cameraStartSize = new Vector3(0,0,0);
        this.startPosition ;
        this.startSize;
        this.onStartPositionChanged = [];
        if(onStartPositionChanged !== undefined)
        this.onStartPositionChanged.push(onStartPositionChanged);
        this.movementLength = movementLength;
        this.movementFrequency = movementFrequency;
        this.objectName = objectName;
        this.randomStartMovement = Math.random()*6;
        console.log(this.randomStartMovement)
    }
}
