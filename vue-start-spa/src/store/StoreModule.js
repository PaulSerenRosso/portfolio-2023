export class StoreModule{
    constructor(state, mutations, getters, actions ) {
        this.state = (state);
        this.mutations = mutations;
        this.getters = getters;
        this.actions = actions;

    }
}