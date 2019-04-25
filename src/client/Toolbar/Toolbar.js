import React from 'react';
import LogoHolder from './LogoHolder';
import Toolbar from '../../style.css';

const toolbar = () => {
    return (
        <div className={'Toolbar'}>
            <LogoHolder/>
            <p>SEARCH</p>
            <p>LOGIN</p>
        </div>
    )
}

export default toolbar;

/**
 *
 *
 import SearchHolder from './SearchHolder';
 import SignedInHolder from './SignedInHolder';
 *
 * <LogoHolder/>
 * <SearchHolder/>
 * <SignedInHolder/>
 *
 * */