import {ResponsiveProperty} from "@/composables/ResponsiveProperty/ResponsiveProperty";

export class ThreeTextGridProperty extends ResponsiveProperty {
    constructor(scale,position,rotation,textResolution, spacings, textScale ) {
        super();
        this.scale = scale;
        this.position = position;
        this.rotation = rotation;
        this.textResolution = textResolution;
        this.spacings = spacings;
        this.textScale = textScale;
    }
}