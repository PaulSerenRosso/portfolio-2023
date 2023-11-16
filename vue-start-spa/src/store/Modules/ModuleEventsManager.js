import {StoreModule} from "@/store/StoreModule";
import createEventHandler from "@/composables/EventHandler";

export const moduleEventsManager = new StoreModule(
    {allEventHandlers:{}},
    {
        addEvent(state, eventKey){
            if(state.allEventHandlers[eventKey] === undefined)
            {
                state.allEventHandlers[eventKey] = createEventHandler();

            }
        },
        removeEvent(state, eventKey){
            delete state.allEventHandlers[eventKey];
        }
    },
    {
            getEventHandler: (state) => (key)=>{return state.allEventHandlers[key]}
    },
    {},
)