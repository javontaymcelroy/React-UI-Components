import React from 'react';
import './Header.css';
import Header from './HeaderContainer';

function HeaderTitle(){
    return (
        <div className="Header-title">
            <h1>Lambda School</h1>
            <a href="https://twitter.com/LambdaSchool?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank"><h2>@LambdaSchool</h2></a>
            <h2>·</h2>
            <h2>26 jan</h2>
        </div>
    );
}

export default HeaderTitle;