import {ResponsiveProperty} from "@/composables/ResponsiveProperty/ResponsiveProperty";

export class ThreeJsHtmlPositionLinkerProperty extends ResponsiveProperty{
    constructor(offsetX, offsetY) {
        super();
        this.offsetX = offsetX;
        this.offsetY = offsetY;

    }
}