export class AnimatedObject {
    startPosition;

    constructor(obj, movementLength, movementFrequency, cameraStartPosition, objectName, onStartPositionChanged) {
        this.obj = obj;
        this.cameraStartPosition = cameraStartPosition;
        this.startPosition;
        this.onStartPositionChanged = [];
        if(onStartPositionChanged !== undefined)
        this.onStartPositionChanged.push(onStartPositionChanged);
        this.movementLength = movementLength;
        this.movementFrequency = movementFrequency;
        this.objectName = objectName;
    }
}
