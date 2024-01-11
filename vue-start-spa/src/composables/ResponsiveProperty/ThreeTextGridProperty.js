import {ResponsiveProperty} from "@/composables/ResponsiveProperty/ResponsiveProperty";
import {Vector2, Vector3} from "three";


export class ThreeTextGridProperty extends ResponsiveProperty {
    constructor(scale,position,rotation,textResolution, spacings, textScale ) {
        super();
        this.scale = scale;
        this.position = position;
        this.rotation = rotation;
        this.textResolution = textResolution;
        this.spacings = spacings;
        this.textScale = textScale;
        this.maxElementCountByLine = new Vector2(Math.floor((this.scale.x-this.spacings.x)/(this.textScale.x+this.spacings.x)),
            Math.floor((this.scale.y-this.spacings.y)/(this.textScale.y+this.spacings.y)));

        this.offsetCompleteLine  = new Vector2(this.scale.x-this.maxElementCountByLine.x*(this.textScale.x+this.spacings.x),
        this.scale.y-this.maxElementCountByLine.y*(this.textScale.y+this.spacings.y));
        this.offsetForLastLine;
        this.completeLineCount;
        this.elementCountForTheLastLine;
        this.maxIndexCompleteLine;
        this.cellSize = new Vector2(this.textScale.x+this.spacings.x,this.textScale.y+this.spacings.y);
    }

    setElementCountByLine(elementCount){

       this.completeLineCount = Math.floor(elementCount/this.maxElementCountByLine.x);

       this.maxIndexCompleteLine = this.completeLineCount*this.maxElementCountByLine.x;
        this.elementCountForTheLastLine = elementCount%this.maxElementCountByLine.x;
        this.offsetForLastLine = this.scale.x-this.elementCountForTheLastLine*(this.textScale.x+this.spacings.x);

    }

    placeElement(index){

       let columnIndex = Math.floor(index/this.maxElementCountByLine.x);
       let lineIndex = index%this.maxElementCountByLine.x;
       let position = new Vector3(this.position.x-this.scale.x/2, this.position.y-this.scale.y/2, this.position.z);

       if(index >= this.maxIndexCompleteLine){

           position.x += this.offsetForLastLine+this.spacings.x+this.cellSize.x*lineIndex;
       }
       else{

           position.x += this.offsetCompleteLine.x+this.spacings.x+this.cellSize.x*lineIndex;

       }

        position.y += this.offsetCompleteLine.y+this.spacings.y+this.cellSize.y*columnIndex;
        console.log( position.x, position.y, lineIndex);

       return position;
    }

}