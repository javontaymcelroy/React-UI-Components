import React from 'react';
import './Header.css';
import Header from './HeaderContainer';

function HeaderTitle(){
    return (
        <div className="Header-title">
            <h1>Lambda School</h1>
            <h2>@LambdaSchool</h2>
            <h2>·</h2>
            <h2>26 jan</h2>
        </div>
    );
}

export default HeaderTitle;