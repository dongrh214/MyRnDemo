/**
 * Created by dongruihe on 2017/11/30.
 */
import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-native';
import { NavigationActions } from 'react-navigation';

import Layout from '../layout/Layout'


const mapStateToProps = state => ({
    name: '小张'
});
const mapDispatchToProps = dispatch => ({
    goToHomeDetail: (params) => dispatch({ type: 'GO_TO_HOME_DETAIL', payload: params }),
    goToProdDetail: (params) =>
        dispatch(NavigationActions.navigate({ routeName: 'ProdDetail', params: params })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);

