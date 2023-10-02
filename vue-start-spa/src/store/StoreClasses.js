import * as THREE from 'three';
import {Vector3} from "@/composables/Vector3";

export class TaggedObject{
    constructor(tagName,obj) {
        this.tagName = tagName;
        this.obj = obj;
    }
}
export class ResponsiveObject{
    startPosition;
    startSize;
    cameraStartPosition;
    cameraStartSize;

    constructor(onStartPositionChanged, obj) {

        this.obj = obj;
        this.cameraStartPosition =new THREE.Vector3(0,0,0);
        this.cameraStartSize = new Vector3(0,0,0);
        this.startPosition ;
        this.startSize;
        this.onStartPositionChanged = [];
        if(onStartPositionChanged !== undefined)
            this.onStartPositionChanged.push(onStartPositionChanged);
    }

}

export class DynamicObject{

    constructor(obj, movementLength, movementFrequency,  ) {
        this.obj = obj;
        this.movementLength = movementLength;
        this.movementFrequency = movementFrequency;
        this.randomStartMovement = Math.random()*6;
    }
}
