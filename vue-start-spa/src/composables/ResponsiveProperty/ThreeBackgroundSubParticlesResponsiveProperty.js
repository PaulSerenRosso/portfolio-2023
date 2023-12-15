import {ResponsiveProperty} from "@/composables/ResponsiveProperty/ResponsiveProperty";

export default class ThreeBackgroundSubParticlesResponsiveProperty extends ResponsiveProperty{
    constructor(rotationSpeed, rotationScrollSpeed, particleSize) {
        super();
        this.rotationSpeed = rotationSpeed;
        this.particleSize = particleSize;
        this.rotationScrollSpeed = rotationScrollSpeed;
    }

}