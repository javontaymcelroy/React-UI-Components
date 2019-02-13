import React from 'react';
import './Header.css';
import './HeaderContainer';

function ImageThumbnail(){
    return (
        <a href="https://twitter.com/LambdaSchool?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank">
        <div className="profile-img">
            <img src="https://pbs.twimg.com/profile_images/973277209644249089/0Te2jtBH_400x400.jpg"></img>
            <span></span>
        </div>
        </a>
    )
};

export default ImageThumbnail;