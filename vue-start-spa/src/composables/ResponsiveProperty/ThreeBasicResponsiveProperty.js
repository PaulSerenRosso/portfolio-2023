import {ResponsiveProperty} from "@/composables/ResponsiveProperty/ResponsiveProperty";
import { remap} from "@/composables/Math";
import {Vector3} from "@/composables/Vector3";

export class ThreeBasicResponsiveProperty extends ResponsiveProperty{
    constructor(position, rotationY, scale) {
        super();
        this.initialPosition = new Vector3(position.x,position.y,position.z);
        this.initialScale = new Vector3(scale.x, scale.y, scale.z);
        this.position = new Vector3(position.x, position.y, position.z);
        this.scale = new Vector3(scale.x, scale.y, scale.z);
        this.position.x = remap(position.x, 0,1 ,-1,1);
        this.position.y = remap(position.y, 0,1 ,1,-1);
        this.scale.x = remap(scale.x, 0,1 ,-1,1)+1;
        this.scale.y = remap(scale.y, 0,1 ,-1,1)+1;
        this.rotationY = rotationY;


        // faire un dicto de three responsive property qui sont add au moment de la création de l'object
    }
    update(obj){

        this.position.x = this.initialPosition.x;
        this.position.y =this.initialPosition.y;
        this.position.z = this.initialPosition.z;
        this.scale.x =this.initialScale.x;
        this.scale.y = this.initialScale.y;
        this.scale.z = this.initialScale.z;

        this.position.x = remap(this.position.x, 0,1 ,-1,1);
        this.position.y = remap( this.position.y*obj.height+obj.top, 0,1 ,1,-1);
        this.scale.x = remap(this.scale.x, 0,1 ,-1,1)+1;
        this.scale.y = remap(this.scale.y*obj.height, 0,1 ,-1,1)+1;

    }


}

