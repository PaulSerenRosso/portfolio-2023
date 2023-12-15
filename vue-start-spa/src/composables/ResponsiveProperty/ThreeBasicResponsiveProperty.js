import {ResponsiveProperty} from "@/composables/ResponsiveProperty/ResponsiveProperty";
import {degToRad, remap} from "@/composables/Math";
import {store} from "@/store/Store";

export class ThreeBasicResponsiveProperty extends ResponsiveProperty{
    constructor(position, rotationY, scale) {
        super();
        this.position = position;
        this.scale = scale;
        this.position.x = remap(position.x, 0,1 ,-1,1);
        this.position.y = remap(position.y, 0,1 ,-1,1);
        this.scale.x = remap(scale.x, 0,1 ,-1,1);
        this.scale.y = remap(scale.y, 0,1 ,-1,1);
        this.rotationY = rotationY;


        // faire un dicto de three responsive property qui sont add au moment de la création de l'object
    }


}

