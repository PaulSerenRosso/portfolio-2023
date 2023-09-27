import {ResponsiveProperty} from "@/composables/ResponsiveProperty/ResponsiveProperty";
import {degToRad} from "@/composables/Math";
import {store} from "@/store/Store";

export class ThreeBasicResponsiveProperty extends ResponsiveProperty{
    constructor(position, rotation, scale) {
        super();


        this.scale = scale;
        this.rotation = rotation;
        this.position = position;

        // faire un dicto de three responsive property qui sont add au moment de la création de l'object
    }
    assignResponsivePropertyToObj(obj) {

        obj.cameraStartSize.x = this.scale.x;
        obj.cameraStartSize.y = this.scale.y;
        obj.cameraStartSize.z = this.scale.z;
        obj.obj.rotation.x = this.rotation.x*degToRad;
        obj.obj.rotation.y = this.rotation.y*degToRad;
        obj.obj.rotation.z = this.rotation.z*degToRad;
        obj.cameraStartPosition.x = this.position.x;
        obj.cameraStartPosition.y = this.position.y;
        obj.cameraStartPosition.z = this.position.z;
        store.commit("updateDynamicObjectScene", obj);

    }

}

