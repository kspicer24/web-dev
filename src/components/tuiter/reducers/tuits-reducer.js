import { DELETE_TUIT, FIND_ALL_TUITS }
    from "../actions/tuits-actions";

const tuitsReducer = (state = [], action) => {
    switch(action.type){
        case FIND_ALL_TUITS:
            return action.tuits;
        case 'like-tuit':
            return state.map(tuit => {
                if (tuit.id === action.tuit.id) {
                    if (tuit.liked === true) {
                        tuit.liked = false;
                        tuit.likes--;
                    } else {
                        tuit.liked = true;
                        tuit.likes++;
                    }
                    return tuit;
                } else {
                    return tuit;
                }
            });
        case DELETE_TUIT:
            return state.filter(
                tuit => tuit._id !== action.tuit._id);
        case 'create-tuit':
            const newTuit = {
                userName: "Kristi",
                handle: "@kristi24",
                userPhoto: "../../images/nyp.png",
                body: action.tuit,
                comments: "1.1k",
                retweets: "2.3k",
                likes: 0,
                id: (new Date().getTime()) + ""
            };
            return [
                newTuit,
                ...state
            ]
        default:
            return state
    }
}

export default tuitsReducer;