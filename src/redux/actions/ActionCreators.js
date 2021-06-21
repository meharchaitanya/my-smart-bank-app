import { LOG_IN, LOG_OUT } from './ActionTypes';
import axios from 'axios';
import { API_URL } from '../../Constants';
import { useHistory } from 'react-router-dom';

export const LogInAction = (user) => {
console.log(user);
    return {
        type : LOG_IN,
        userInfo : user
    }
}


export const LogOutAction = () => {
    return {
        type : LOG_OUT
    }
}

export const LogInActionDispatch = (loginDetail) => {
    let history = useHistory();

    return dispatch => {
        axios.post(API_URL + 'ccuser/login', loginDetail)
            .then(response => {
                console.log(response);
                // setUserId('');
                // setPassword('');
                // updating the login context
               // setLoginUserDetails(response.data.body)
                // navigating to the homepage after login
                dispatch(LogInAction(response.data.body))
                
                history.push('/rewards');

            })
            .catch(error => {
                if (error.response) {
                    console.log(error.response);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('error', error.message);

                }
                // setUserId('');
                // setPassword('');

            })
    }
}
