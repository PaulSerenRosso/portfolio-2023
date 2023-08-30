export class AnimatedObject {
    startPosition;

    constructor(obj, movementLength, movementFrequency, cameraStartPosition, onStartPositionChanged) {
        this.obj = obj;
        this.cameraStartPosition = cameraStartPosition;
        this.startPosition;
        this.onStartPositionChanged = onStartPositionChanged;
        this.movementLength = movementLength;
        this.movementFrequency = movementFrequency;
    }
}
