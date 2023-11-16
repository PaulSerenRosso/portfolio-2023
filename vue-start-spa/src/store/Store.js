import {createStore} from 'vuex'

import {EffectComposer} from "three/addons/postprocessing/EffectComposer";
import {RenderPass} from "three/addons/postprocessing/RenderPass";
import {
    AxesHelper, Clock,
    FogExp2,
    PerspectiveCamera,
    Scene,
    Vector3,
    WebGLRenderer
} from "three";
import {degToRad} from "@/composables/Math";
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

