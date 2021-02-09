const INITIAL_STATE = {
    user: [
        {
            username: 'harshvithal',
            email: 'harshvithal1@gmail.com',
        },
    ]
}

export default (state = INITIAL_STATE, action) => {
    console.log("this is action data", action);
    switch (action.type) {
        case 'USERSTATUS':
            return ({
                ...state,
                user: [...state.user, { userActive: action.userActive }]
            });
    }

    return state;
};