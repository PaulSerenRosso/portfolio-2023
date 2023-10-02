export default function getOrAddEventHandler(keyEvent){
    let eventHandler = this.$store.eventsManager.getters.getEventHandler(keyEvent);
    if(eventHandler === undefined){
        this.$store.eventsManager.commit("addEvent", keyEvent);
        eventHandler = this.$store.eventsManager.getters.getEventHandler(keyEvent);
    }
    return eventHandler;
}