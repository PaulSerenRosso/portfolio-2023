import {StoreModule} from "@/store/StoreModule";
import {Clock} from "three";
import createEventHandler from "@/composables/EventHandler";
import Stats from "stats.js/src/Stats";
export const moduleUpdateLoopHandler =
    new StoreModule(
        {stats:null,onUpdateHandler:null, clock:null},
     {
             initOnUpdate(state){
                 state.stats = new Stats();
                 state.stats.showPanel(0);
               //  document.body.appendChild( state.stats.dom );
                     state.clock = new Clock();
                     state.onUpdateHandler = createEventHandler();
                     function update(){
                         state.stats.begin();
                         state.onUpdateHandler.raiseEvent();
                         state.stats.end();
                         requestAnimationFrame(update);
                     }
                     update();
             },


     },
        {},
        )