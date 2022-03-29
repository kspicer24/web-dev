import activeUser from '../data/profile.json';

const initialState = {
    profile: activeUser
}

const profile = (state = initialState, action) => {
    switch (action.type){
        case 'update':
            const name = action.profile.name.split(" ");
            const firstName = name[0];
            const lastName = name.length > 1 ? name[1] : '';

            const date = action.profile.dob.split('-');
            const dob = date[1] + '/' + date[2] + '/' + date[0];
            return ({
                profile: {
                    ...state.profile,
                    firstName: firstName,
                    lastName: lastName,
                    bio: action.profile.bio,
                    dateOfBirth: dob,
                    location: action.profile.location,
                    website: action.profile.website
                }
            });
        default:
            return (state);
    }
};

export default profile