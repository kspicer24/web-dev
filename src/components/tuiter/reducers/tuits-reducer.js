import tuits from "../data/tuits.json";

const tuitsReducer = (state = tuits, action) => {
    switch(action.type){
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
        case 'delete-tuit':
            return state.filter(
                tuit => tuit.id !== action.tuit.id);
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