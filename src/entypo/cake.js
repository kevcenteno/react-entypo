import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--cake';

let EntypoCake = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M9.584,6.036c1.952,0,2.591-1.381,1.839-2.843c-0.871-1.693,1.895-3.155,0.521-3.155c-1.301,0-3.736,1.418-4.19,3.183C7.415,4.545,8.05,6.036,9.584,6.036z M14.796,14.987l-0.444-0.383c-0.487-0.42-1.25-0.418-1.735,0l-0.442,0.382c-0.62,0.534-1.397,0.801-2.174,0.801c-0.777,0-1.554-0.267-2.173-0.8l-0.444-0.384c-0.487-0.418-1.249-0.419-1.734,0.001l-0.444,0.383c-1.193,1.028-2.967,1.056-4.204,0.1V19c0,0.552,0.448,1,1,1h16c0.552,0,1-0.448,1-1v-3.912C17.765,16.042,15.991,16.017,14.796,14.987z M10,7c-7.574,0-9,3.361-9,5v0.469l1.164,1.003c0.486,0.421,1.249,0.417,1.735,0l0.444-0.383c1.237-1.065,3.105-1.066,4.345,0l0.444,0.384c0.484,0.417,1.245,0.42,1.735-0.001l0.442-0.382c1.24-1.067,3.107-1.067,4.346-0.001l0.444,0.383c0.487,0.421,1.25,0.417,1.735,0L19,12.469V12C19,10.361,17.574,7,10,7z"/>
    </EntypoIcon>
);

export default EntypoCake;
