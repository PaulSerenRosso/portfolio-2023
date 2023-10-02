import {StoreModule} from "@/store/StoreModule";
import EventHandler from "@/composables/EventHandler";

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
                    state.onWindowResizeHandler.raiseEvent();
            }
                window.addEventListener('resize', ()=>setDevice(state));
                setDevice(state);
                state.onWindowResizeHandler = new EventHandler();


            /*    for (var index in state. allResponsivePropertyGroup) {
                    var value = state. allResponsivePropertyGroup[index];

                    value.raiseOnMediaQueryMatches(state.devicePlateformId);
                }*/
            },
            },
        {},)