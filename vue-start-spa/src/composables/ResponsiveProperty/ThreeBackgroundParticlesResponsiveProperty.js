import {ResponsiveProperty} from "@/composables/ResponsiveProperty/ResponsiveProperty";

export class ThreeBackgroundParticlesResponsiveProperty  extends ResponsiveProperty{
    constructor(particlesCount) {
        super();
        this.particlesCount = particlesCount;
    }
}