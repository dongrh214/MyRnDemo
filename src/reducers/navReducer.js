/**
 * Created by dongruihe on 2017/11/30.
 */
import { NavigationActions } from 'react-navigation';

import { AppNavigator } from '../routes/AppNavigator'

const navReducer = (state, action) => {
    let nextState;
    switch (action.type){
        case 'GO_TO_HOME_DETAIL':
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'HomeDetail', params: action.payload || {} }),
                state
            );
            break;
        case 'GO_TO_PROD_DETAIL':
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'ProdDetail', params: action.payload || {} }),
                state
            );
            break;
        default:
            nextState = AppNavigator.router.getStateForAction(action, state);
            break;
    }
    return nextState || state;
};

export default navReducer