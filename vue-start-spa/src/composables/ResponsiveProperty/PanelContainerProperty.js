import {ResponsiveProperty} from "@/composables/ResponsiveProperty/ResponsiveProperty";

export class PanelContainerProperty extends ResponsiveProperty{
    constructor(top, xAxis, isLeft, width) {
        super();
        this.top = top;
        this.xAxis = xAxis;
        this.isLeft = isLeft;
        this.width = width;
    }
}