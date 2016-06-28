import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--paypal';

let EntypoPaypal = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M7.914,10.677h1.659c3.604,0,5.649-1.623,6.3-4.96c0.021-0.11,0.04-0.216,0.056-0.322c0.036-0.226,0.054-0.429,0.062-0.624C15.997,4.637,16.001,4.558,16,4.484c-0.008-0.391-0.077-0.722-0.216-1.039c-0.129-0.296-0.324-0.587-0.613-0.918C14.318,1.557,12.832,1,11.057,1H5.404C5.006,1,4.667,1.29,4.605,1.683l-1.02,6.571l-1.269,8.185C2.27,16.734,2.498,17,2.796,17l2.772,0l0.849-5.043C6.534,11.217,7.164,10.677,7.914,10.677z M17.017,6.09c-0.792,3.771-3.357,5.772-7.445,5.772H7.914c-0.164,0-0.302,0.118-0.328,0.282L6.481,19h2.907c0.348,0,0.645-0.253,0.699-0.597l0.029-0.15l0.555-3.514l0.036-0.194c0.054-0.344,0.351-0.597,0.699-0.597h0.44c2.85,0,5.081-1.158,5.733-4.506C17.847,8.062,17.711,6.908,17.017,6.09z"/>
    </EntypoIcon>
);

export default EntypoPaypal;
