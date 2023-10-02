export default function createEventHandler(){

        this.onEvent = [];
        return{
            addEventListener(listener){
                this.onEvent.push(listener);
            },
            removeEventListener(listener){
                this.onEvent.push(listener);
            },
            raiseEvent(){
                if(this.onEvent.length !== 0)
                    this.onEvent.forEach((item)=>item());
            }
        }
}