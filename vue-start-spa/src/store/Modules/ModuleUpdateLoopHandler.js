import {StoreModule} from "@/store/StoreModule";
import {Clock} from "three";
import createEventHandler from "@/composables/EventHandler";

export const moduleUpdateLoopHandler =
    new StoreModule(
        {onUpdateHandler:null, clock:null, deltaTime:null},
     {
             initOnUpdate(state){
                 console.log("ini update")
                     state.clock = new Clock();
                     state.onUpdateHandler = createEventHandler();
                     function update(){
                         state.deltaTime = state.clock.getDelta();
                         state.onUpdateHandler.raiseEvent();

                         requestAnimationFrame(update);
                     }
                     update();
             },


     },
        {},
        )