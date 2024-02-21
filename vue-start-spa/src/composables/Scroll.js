import {getApp} from "@/composables/StoreHelper";

export function activateScroll() {

    getApp().style.overflow ='';

}

export function deactivateScroll() {
    getApp().style.overflow ='hidden';

}