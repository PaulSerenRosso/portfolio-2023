import {ResponsiveProperty} from "@/composables/ResponsiveProperty/ResponsiveProperty";
import {Vector2, Vector3} from "three";


export class ThreeGridProperty extends ResponsiveProperty {
    constructor(scale,position,rotation, spacings, textScale, paddings ) {
        super();
        this.scale = scale;
        this.position = position;
        this.rotation = rotation;
        this.spacings = spacings;
        this.elementScale = textScale;
        this.paddings = paddings;
        this.maxElementCountByLine = new Vector2(Math.floor((this.scale.x-this.paddings.x*2-this.elementScale.x/2)/(this.elementScale.x+this.spacings.x)),
            Math.floor((this.scale.y-this.paddings.y*2-this.elementScale.y/2)/(this.elementScale.y+this.spacings.y)));

        console.log(this.scale.x, this.maxElementCountByLine.x, (this.elementScale.x+this.spacings.x));
        this.offsetCompleteLine  = new Vector2((this.scale.x-this.maxElementCountByLine.x*(this.elementScale.x+this.spacings.x))/2,
            (this.scale.y-this.maxElementCountByLine.y*(this.elementScale.y+this.spacings.y))/2);
        console.log(this.offsetCompleteLine);
        this.offsetForLastLine;
        this.completeLineCount;
        this.elementCountForTheLastLine;
        this.maxIndexCompleteLine;
        this.cellSize = new Vector2(this.elementScale.x+this.spacings.x,this.elementScale.y+this.spacings.y);
    }

    setElementCountByLine(elementCount){

       this.completeLineCount = Math.floor(elementCount/this.maxElementCountByLine.x);

       this.maxIndexCompleteLine = this.completeLineCount*this.maxElementCountByLine.x;
        this.elementCountForTheLastLine = elementCount%this.maxElementCountByLine.x;

        this.offsetForLastLine = (this.scale.x-this.elementCountForTheLastLine*(this.elementScale.x+this.spacings.x))/2;

    }

    placeElement(index){

       let columnIndex = Math.floor(index/this.maxElementCountByLine.x);
       let lineIndex = index%this.maxElementCountByLine.x;
       let position = new Vector3(this.position.x-this.scale.x/2, this.position.y-this.scale.y/2, this.position.z);

       if(index >= this.maxIndexCompleteLine){

           position.x += this.offsetForLastLine.x+this.cellSize.x*lineIndex;
       }
       else{

           position.x += this.offsetCompleteLine.x+this.cellSize.x*lineIndex;

       }

        position.y += this.offsetCompleteLine.y+this.cellSize.y*columnIndex;


       return position;
    }

}