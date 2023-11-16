import {ResponsiveProperty} from "@/composables/ResponsiveProperty/ResponsiveProperty";
import {degToRad} from "@/composables/Math";
import {store} from "@/store/Store";

export class ThreeBasicResponsiveProperty extends ResponsiveProperty{
    constructor(position, rotationY, scale) {
        super();

        this.scale = scale;
        this.rotationY = rotationY;
        this.position = position;

        // faire un dicto de three responsive property qui sont add au moment de la création de l'object
    }
    assignResponsivePropertyToObj(obj) {

        obj.cameraStartSize.x = this.scale.x;
        obj.cameraStartSize.y = this.scale.y;
        obj.cameraStartSize.z = this.scale.z;
        obj.obj.rotation.y = this.rotationY*degToRad;
        obj.cameraStartPosition.x = this.position.x;
        obj.cameraStartPosition.y = this.position.y;
        obj.cameraStartPosition.z = this.position.z;

    }

}

