import {StoreModule} from "@/store/StoreModule";
import createEventHandler from "@/composables/EventHandler";

export const moduleEventsManager = new StoreModule(
    {},
    {
        initEventsManager(){
            this.allEventHandlers = {};
        },
        addEvent(state, eventKey){
            if(this.allEventHandlers[eventKey] === undefined)
          this.allEventHandlers[eventKey] = createEventHandler();
        },
        removeEvent(state, eventKey){
            delete this.allEventHandlers[eventKey];
        }

    },
    {
            getEventHandler: (state) => (key)=>{return this.allEventHandlers[key]}
    },
    {},
)