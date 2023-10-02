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
        state () {
            return {
                devicePlateformId:1,
                allDynamicObjectsOfTheCurrentScene : {},
                allResponsivePropertyGroup: [],
                particleObjectOfTheCurrentScene:null,
                allSubParticleObjectsOfTheCurrentScene:[],
                allOnThreeUpdate : []
            }
        },
        mutations: {
           initStore(){

           },
            addOnThreeUpdate(state, obj){
              state.allOnThreeUpdate.push(obj);
            },
            removeSubParticleObject(state, obj) {
                state.particleObjectOfTheCurrentScene.remove(state.allSubParticleObjectsOfTheCurrentScene[obj]);
            },
            setParticleObject(state,obj){
               state.particleObjectOfTheCurrentScene = obj;
            },
            addSubParticleObject(state, obj){
                state.allSubParticleObjectsOfTheCurrentScene[obj.index].add(obj.obj);
                state.particleObjectOfTheCurrentScene.add(obj.obj);
            },

            addResponsivePropertyGroup(state, responsivePropertyGroup)
            {
                state.allResponsivePropertyGroup.push(responsivePropertyGroup);
                responsivePropertyGroup.raiseOnMediaQueryMatches(state.devicePlateformId);
            },

            addChildObjectToDynamicObject(state, obj)
            {
                obj.onAdded(state.allDynamicObjectsOfTheCurrentScene[obj.dynamicParentObjectName].obj);
            },
            addEventToDynamicObject(state,obj)
            {
                state.allDynamicObjectsOfTheCurrentScene[obj.dynamicObjectName].onStartPositionChanged.push(obj.onStartPositionChanged)
                obj.onStartPositionChanged(state.allDynamicObjectsOfTheCurrentScene[obj.dynamicObjectName]);
            },
            addDynamicObject(state, obj)
            {
                state.allDynamicObjectsOfTheCurrentScene[obj.objectName] = obj;
               store.commit("updateDynamicObjectScene",obj);
            },
            updateDynamicObjectScale(state, obj)
            {
                const startPointForMeasuringSize = new Vector3(-1,0,obj.cameraStartPosition.z).unproject(state.camera);
                const endPointForMeasuringSize = (new Vector3(obj.cameraStartSize.x,obj.cameraStartSize.y,obj.cameraStartPosition.z).unproject(state.camera));

                obj.startSize = new Vector3(endPointForMeasuringSize.x-startPointForMeasuringSize.x,
                    endPointForMeasuringSize.y-startPointForMeasuringSize.y,obj.cameraStartSize.z);
                const maxScaleX = obj.startSize.x/obj.obj.geometry.parameters.width;
                const maxScaleY = obj.startSize.y/obj.obj.geometry.parameters.height;
                const maxScale = Math.min(maxScaleX, maxScaleY);
                obj.obj.scale.set(maxScale, maxScale, obj.cameraStartSize.z)
            },
            updateDynamicObjectScene(state, obj) {
                obj.startPosition = new Vector3(obj.cameraStartPosition.x,
                    obj.cameraStartPosition.y, obj.cameraStartPosition.z)
                    .unproject(state.camera);

                store.commit("updateDynamicObjectScale", obj);
                if(obj.onStartPositionChanged.length != 0)
                {

                    obj.onStartPositionChanged.forEach((item) =>
                    {
                        item(obj);
                    });
                }
            },
            updateAllDynamicObjectsScene(state)
            {
                for(var key in state.allDynamicObjectsOfTheCurrentScene) {
                    var value = state.allDynamicObjectsOfTheCurrentScene[key];
                    store.commit("updateDynamicObjectScene",value);
                }
            },

        }
    })

