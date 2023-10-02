import {StoreModule} from "@/store/StoreModule";

export const moduleThreeObjectTagHandler =
    new StoreModule(
        {allThreeObjectTags: {}},
        {
            addThreeObjectTag(state, objectWithTag){
            state.allThreeObjectTags[objectWithTag.tag] = objectWithTag.obj;
            },
            removeThreeObjectTag(state, tag){
                delete state.allThreeObjectTags[tag];
}},
        {getThreeObjectTag: (state) => (tag)=>{return state.allThreeObjectTags[tag]}})