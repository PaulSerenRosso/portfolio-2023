import {createStore} from 'vuex'

import {moduleResponsiveEventHandler} from "@/store/Modules/ModuleResponsiveEventHandler";
import {moduleThreeObjectTagHandler} from "@/store/Modules/ModuleThreeObjectTagHandler";
import {moduleUpdateLoopHandler} from "@/store/Modules/ModuleUpdateLoopHandler";
import {moduleThreeSceneCreator} from "@/store/Modules/ModuleThreeSceneCreator";
import {moduleEventsManager} from "@/store/Modules/ModuleEventsManager";

   export const store = createStore({
       modules:{
         responsiveEventHandler:moduleResponsiveEventHandler,
         threeObjectTagHandler:moduleThreeObjectTagHandler,
         updateLoopHandler:moduleUpdateLoopHandler,
           threeSceneCreator:moduleThreeSceneCreator,
           eventsManager: moduleEventsManager,
       },
    })

