import { LOG_IN, LOG_OUT } from '../actions/ActionTypes';


const initialAuthState = {
    isAuthenticated: false,
    loggedInUser: {
        ccNumber: 0,
        ccName: "",
        userName: "",
        userId: "",
        availableRedeemPoints: 0,
        totalRewardsGained: 0
    }
}


const AuthReducer = (state = initialAuthState, action) => {

    switch (action.type) {

        case LOG_IN: return {
            isAuthenticated: true,
            loggedInUser: action.userInfo
        }

        case LOG_OUT: return {
            isAuthenticated: false,
            loggedInUser: {
                userId: "",
                userName: ""
            }
        }

        default: return state
    }

}

export default AuthReducer;