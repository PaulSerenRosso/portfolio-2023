export class AnimatedObject {
    startPosition;
    constructor(obj, movementLength, movementFrequency, cameraStartPosition) {
        this.obj = obj;
        this.cameraStartPosition = cameraStartPosition;
        this.startPosition;
        this.movementLength = movementLength;
        this.movementFrequency = movementFrequency;
    }
}
