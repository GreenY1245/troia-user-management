import usersConstants from '../constants/users.constants'

export function users(state = {}, action) {

    switch (action.type) {

        case usersConstants.GET_USERS_REQUEST:
            return {
                ...state,
                status: "loading"
            }
        
        case usersConstants.GET_USERS_SUCCESS: {

            return {
                ...state,
                status: "success",
                users: action.payload.users
            }
        }
            
        case usersConstants.GET_USERS_FAILURE:
            return {
                ...state,
                status: "failure",
                error: action.payload.error
            }

        case usersConstants.ADD_NEW_REQUEST:
            return {
                ...state,
                status: "adding"
            }

        case usersConstants.ADD_NEW_SUCCESS: {

            let user = {
                ...action.payload.user,
            };
            
            return {
                status: "success",
                users: [ ...state.users, user ]
            }
        }
        
        case usersConstants.ADD_NEW_FAILURE:
            return {
                ...state,
                status: "failure",
                error: action.payload.error
            }
    
        default:
            return state
    }
}