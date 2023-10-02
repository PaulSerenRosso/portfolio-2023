import {ResponsiveProperty} from "@/composables/ResponsiveProperty/ResponsiveProperty";

export default class ThreeBackgroundSubParticlesResponsiveProperty extends ResponsiveProperty{
    constructor(rotationSpeed, rotationScrollSpeed, particleSize) {
        super();
        this.rotationSpeed = rotationSpeed;
        this.particleSize = particleSize;
        this.rotationScrollSpeed = rotationScrollSpeed;
    }
    assignResponsivePropertyToObj( obj) {
        obj.rotationSpeed = this.rotationSpeed;
        obj.particleSize = this.particleSize;
        obj.rotationScrollSpeed = this.rotationScrollSpeed;
    }
}