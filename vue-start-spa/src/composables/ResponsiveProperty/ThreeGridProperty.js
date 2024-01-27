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
        this.maxElementCountByLine = new Vector2(0,0);
        let lineScaleX = this.getLineScale(this.elementScale.x, this.scale.x, this.spacings.x, this.paddings.x);
            this.getLineScale(this.elementScale.y, this.scale.y, this.spacings.y, this.paddings.y);
        let lineScaleY =   this.getLineScale(this.elementScale.y, this.scale.y, this.spacings.y, this.paddings.y)
        this.maxElementCountByLine.x = lineScaleX.count;
        this.maxElementCountByLine.y = lineScaleY.count;
        this.offsetCompleteLine = new Vector2(0,0);
        this.offsetCompleteLine.x  = (this.scale.x-lineScaleX.lineScale)/2;
        this.offsetCompleteLine.y  = (this.scale.y-lineScaleY.lineScale)/2;

        this.offsetForLastLine;
        this.completeLineCount;
        this.elementCountForTheLastLine;
        this.maxIndexCompleteLine;
        this.cellSize = new Vector2(this.elementScale.x+this.spacings.x,this.elementScale.y+this.spacings.y);
    }

    getLineScale(elementScale, scale, spacing, padding){
        let isFoundMaxElement = false;
        let currentScale = scale-padding*2;
        let currentPoint = elementScale;
        let i = 1;
        while (!isFoundMaxElement){
                if(currentPoint > currentScale){
                    if( i === 1){
                        currentPoint -=elementScale;
                    }
                    else{
                        currentPoint -=elementScale+spacing;
                    }

                    i--;
                    return {lineScale:currentPoint, count:i};
                }
                i++;
                currentPoint += elementScale+spacing;
            }
    }
    getLineScaleWithCount( count){

        let currentPoint = this.elementScale.x;
        for (let j = 1; j < count; j++) {
            currentPoint += this.elementScale.x+this.spacings.x;
        }
        return currentPoint;
    }

    setElementCountByLine(elementCount){

       this.completeLineCount = Math.floor(elementCount/this.maxElementCountByLine.x);

       this.maxIndexCompleteLine = this.completeLineCount*this.maxElementCountByLine.x;
        this.elementCountForTheLastLine = elementCount%this.maxElementCountByLine.x;
        this.offsetForLastLine =(this.scale.x-this.getLineScaleWithCount(this.elementCountForTheLastLine))/2;
    }

    placeElement(index){

       let columnIndex = Math.floor(index/this.maxElementCountByLine.x);
       let lineIndex = index%this.maxElementCountByLine.x;
       let position = new Vector3(this.position.x-this.scale.x/2, this.position.y-this.scale.y/2, this.position.z);

       if(index >= this.maxIndexCompleteLine){

           position.x += this.elementScale.x/2+this.offsetForLastLine+this.cellSize.x*lineIndex;
       }
       else{
           position.x +=  this.elementScale.x/2+this.offsetCompleteLine.x+this.cellSize.x*lineIndex;
       }
        position.y += this.paddings.y/2+this.elementScale.y/2+this.cellSize.y*columnIndex;


       return position;
    }

}