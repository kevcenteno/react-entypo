import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--browser';

let EntypoBrowser = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M18,2H2C0.9,2,0,2.9,0,4v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4C20,2.9,19.1,2,18,2z M4.5,3.75c0.414,0,0.75,0.336,0.75,0.75c0,0.414-0.336,0.75-0.75,0.75c-0.414,0-0.75-0.336-0.75-0.75C3.75,4.086,4.086,3.75,4.5,3.75z M1.75,4.5c0-0.414,0.336-0.75,0.75-0.75c0.414,0,0.75,0.336,0.75,0.75c0,0.414-0.336,0.75-0.75,0.75C2.086,5.25,1.75,4.914,1.75,4.5z M18,16H2V7h16V16z M18,5H6V4h12.019L18,5z"/>
    </EntypoIcon>
);

export default EntypoBrowser;
