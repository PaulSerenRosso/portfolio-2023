import {store} from "@/store/Store";


export function addCreateSceneHandlerListener(listener){
    store.state.threeSceneCreator.onCreateSceneHandler.addEventListener(listener);
}
export function addThreeTagObject(obj, tag)
{

    store.commit("addThreeObjectTag", {obj:obj, tag:tag});
    store.state.threeSceneCreator.onCreateSceneHandler.addEventListener(()=>{ store.commit("removeThreeObjectTag", tag)})
}
export function getThreeTagObject(tag){

   return  store.getters.getThreeObjectTag(tag);
}

export function addRemoveAtSceneChangedUpdateListener(listener){
    store.state.updateLoopHandler.onUpdateHandler.addEventListener(listener);

    store.state.threeSceneCreator.onCreateSceneHandler.addEventListener(()=>
        store.state.updateLoopHandler.onUpdateHandler.removeEventListener(listener));
}



export function addRemoveAtSceneChangedEvent(eventKey){
    store.commit("addEvent",eventKey);
    store.state.threeSceneCreator.onCreateSceneHandler.addEventListener(()=>store.commit("removeEvent", eventKey));
}

export function addEvent(eventKey){
    store.commit("addEvent",eventKey);
}

export function removeEvent(eventKey){
    store.commit("removeEvent", eventKey);
}

export function raiseAndRemoveEvent(eventKey, obj){

    store.getters.getEventHandler(eventKey).raiseEvent(obj);
    store.commit("removeEvent", eventKey);
}
export function addEventListener(listener, keyEvent){

    console.log( store.state.eventsManager.allEventHandlers);
    store.state.eventsManager.allEventHandlers[keyEvent].addEventListener(listener);
}

export function addRemoveAtSceneChangedResponsiveListener(listener){
    store.state.responsiveEventHandler.onWindowResizeHandler.addEventListener(listener);
    store.state.threeSceneCreator.onCreateSceneHandler.addEventListener(()=>
        store.state.responsiveEventHandler.onWindowResizeHandler.
        removeEventListener(listener));
}

export function raiseEvent(key, obj){
    store.getters.getEventHandler(key).raiseEvent(obj);
}

export function addCameraYScrollListener(listener){
    store.state.threeSceneCreator.onCameraYScrollHandler.addEventListener(listener);
}
export default function getOrAddEventHandler(keyEvent){
    let eventHandler =  store.getters.getEventHandler(keyEvent);
    if(eventHandler === undefined){
        store.commit("addEvent", keyEvent);
        eventHandler =  store.getters.getEventHandler(keyEvent);
    }
    return eventHandler;
}
