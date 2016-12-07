function commentsReducer(state=[],action) {
    switch(action.type) {
        case "ADD_COMMENT":
            /*return Object.assign({},state,{
                [action.postId]: state[action.postId].concat([{
                    user: action.author,
                    text: action.comment
                }])
            })*/
            return {
                ...state,
                [action.postId]: [...state[action.postId],{
                    user: action.author,
                    text: action.comment
                }]
            }
            break;
        case "REMOVE_COMMENT":
            return {
                ...state,
                [action.postId]: [...state[action.postId].slice(0,action.i),...state[action.postId].slice(action.i+1)]
            }
            break;
        default:
            return state;
        break;
    }
}

export default commentsReducer;