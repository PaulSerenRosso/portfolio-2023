import {StoreModule} from "@/store/StoreModule";
import EventHandler from "@/composables/EventHandler";
import createEventHandler from "@/composables/EventHandler";
import {moduleThreeObjectTagHandler} from "@/store/Modules/ModuleThreeObjectTagHandler";

export const moduleResponsiveEventHandler =
    new StoreModule(
        {  devicePlateformId:1, onWindowResizeHandler:null},
        {
            initDeviceId(state)
            {
               function setDevice(state)
                {
                    if(window.innerWidth < 768)
                    {
                        state.devicePlateformId = 0;
                    }
                    else if(window.innerWidth < 992)
                    {
                        state.devicePlateformId = 1;
                    }
                    else if(window.innerWidth < 1200)
                    {
                        state.devicePlateformId = 2;
                    }
                    else
                    {
                        state.devicePlateformId = 3;
                    }

                    console.log(state.innerWidth);
                    console.log(state.devicePlateformId);
                    state.onWindowResizeHandler.raiseEvent();
            }

                window.addEventListener('resize', ()=>setDevice(state));
               state.onWindowResizeHandler = createEventHandler();

                console.log(state.onWindowResizeHandler);
                setDevice(state);

            /*    for (var index in state. allResponsivePropertyGroup) {
                    var value = state. allResponsivePropertyGroup[index];

                    value.raiseOnMediaQueryMatches(state.devicePlateformId);
                }*/
            },
            },
        {},{})