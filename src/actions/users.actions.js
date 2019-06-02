import usersConstants from '../constants/users.constants'
import axios from 'axios';


export function fetchUsers(ammount = 10) {

    return dispatch => {

        dispatch(usersFetchRequest());

        axios.get('https://randomuser.me/api/?results=' + ammount)
            .then(res => {

                dispatch(usersFetchSuccess([...res.data.results]))
            })
            .catch(err => {
                dispatch(usersFetchFailure(err))
            })
    }
}

//Mock request function, simulate ajax request times
function mockRequestTimeout() {
    //NOTHING
}

export function addUser(user) {

    return dispatch => {

        console.log("dispatching reqest status")
        dispatch(userAddRequest());

        console.log("mock timeout starting")
        setTimeout(mockRequestTimeout, 500);

        const mockUser = {
            registered: {
                date: new Date().toISOString()
            },
            dob: {
                age: Math.floor(Math.random() * 70)
            },
            picture: {
                large: user.image
            },
            name: {
                first: user.firstname,
                last: user.lastname,
            },
            phone: user.phone
        }

        console.log("dispatching success status")
        dispatch(userAddSuccess(mockUser));
    }
}

const usersFetchRequest = () => ({

    type: usersConstants.GET_USERS_REQUEST
})

const usersFetchSuccess = users => ({

    type: usersConstants.GET_USERS_SUCCESS,
    payload: {
        users
    }
})

const usersFetchFailure = error => ({

    type: usersConstants.GET_USERS_FAILURE,
    payload: {
        error
    }
})

const userAddRequest = () => ({

    type: usersConstants.ADD_NEW_REQUEST
})

const userAddSuccess = user => ({

    type: usersConstants.ADD_NEW_SUCCESS,
    payload: {
        user
    }
})

//Currently unused because mock http request
const userAddFailure = error => ({
    
    type: usersConstants.ADD_NEW_FAILURE,
    payload: {
        error
    }
})