import {ThreeBasicResponsiveProperty} from "@/composables/ResponsiveProperty/ThreeBasicResponsiveProperty";
import {ResponsiveProperty} from "@/composables/ResponsiveProperty/ResponsiveProperty";

export class ThreeBackgroundParticlesResponsiveProperty  extends ResponsiveProperty{
    constructor(particlesCount, particlesSize) {
        super();
        this.particlesCount = particlesCount;
        this.particlesSize = particlesSize;
    }
}