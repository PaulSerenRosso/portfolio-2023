import {ResponsiveProperty} from "@/composables/ResponsiveProperty/ResponsiveProperty";

export  class ThreeEdgesResponsiveProperty extends ResponsiveProperty{
    constructor(sideColored) {
        super();
        this.sideColored = sideColored;
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    assignResponsivePropertyToObj(responsiveProperty, obj) {

    }

}