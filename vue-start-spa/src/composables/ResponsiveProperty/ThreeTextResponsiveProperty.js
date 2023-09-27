import {ThreeBasicResponsiveProperty} from "@/composables/ResponsiveProperty/ThreeBasicResponsiveProperty";

export class ThreeTextResponsiveProperty extends  ThreeBasicResponsiveProperty{
    constructor(position, rotation, scale, canvasSizeReference) {
        super(position, rotation, scale);
        this.canvasSizeReference = canvasSizeReference;
    }
}