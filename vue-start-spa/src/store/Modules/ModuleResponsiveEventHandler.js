import {StoreModule} from "@/store/StoreModule";
import createEventHandler from "@/composables/EventHandler";
import MobileDetect from "mobile-detect";



export const moduleResponsiveEventHandler =
    new StoreModule(
        { devicePlateformId:1, onWindowResizeHandler:null, oldDevice:-1, deviceHasChanged: false},
        {
            initDeviceId(state)
            {
               function setDevice(state)
                {

                    if(window.innerWidth < 768)
                    {

                        state.devicePlateformId = 0;
                    }
                    else if(window.innerWidth < 1024)
                    {
                        state.devicePlateformId = 1;
                    }
                    else if(window.innerWidth < 1280)
                    {
                        state.devicePlateformId = 2;
                    }
                    else
                    {
                        state.devicePlateformId = 3;
                    }

                    if(state.oldDevice !== state.devicePlateformId){
                        state.deviceHasChanged = true;
                    }
                    else {
                        state.deviceHasChanged = false;
                    }

                    state.oldDevice = state.devicePlateformId;
                    state.onWindowResizeHandler.raiseEvent();
            }
               state.onWindowResizeHandler = createEventHandler();
                setDevice(state);
                    window.addEventListener('resize', ()=>setDevice(state));






            /*    for (var index in state. allResponsivePropertyGroup) {
                    var value = state. allResponsivePropertyGroup[index];

                    value.raiseOnMediaQueryMatches(state.devicePlateformId);
                }*/
            },
            },
        {},{})