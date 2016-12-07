function postsReducer(state=[],action) {
    switch (action.type) {
        case "INCREMENT_LIKES":
            /*return state.slice(0,action.index)
                        .concat([Object.assign({},state[action.index],{likes:state[action.index].likes++})])
                        .concat(state.slice(action.index+1,state.length));*/
            return  [
                ...state.slice(0,action.index),
                {...state[action.index],likes: ++state[action.index].likes},
                ...state.slice(action.index+1)
            ]
        break;
        default:
            return state;
        break;
    }

}

export default postsReducer;