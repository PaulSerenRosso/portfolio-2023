export default function createEventHandler(){
        const onEvent = [];
        return{
            addEventListener(listener){
                onEvent.push(listener);
            },
            removeEventListener(listener){
                onEvent.splice(onEvent.indexOf(listener),1);
            },
            raiseEvent(){

                if(onEvent.length !== 0)
                {
                    onEvent.forEach((item)=>{
                       // console.log(item);
                        item();});
                }

            }
        }
}