import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--Lifebuoy';

let EntypoLifebuoy = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M16.788,3.212c-3.749-3.749-9.827-3.749-13.575,0c-3.75,3.75-3.75,9.828-0.002,13.576c3.75,3.75,9.828,3.75,13.578,0C20.537,13.039,20.537,6.961,16.788,3.212z M6.748,13.252c-1.797-1.797-1.797-4.709,0-6.505c1.795-1.796,4.709-1.796,6.506,0c1.797,1.797,1.795,4.709,0,6.505C11.457,15.049,8.545,15.049,6.748,13.252z M15.347,12.879c0.968-1.799,0.969-3.959,0-5.759l1.783-0.96c1.289,2.391,1.289,5.29,0.002,7.678L15.347,12.879z M13.839,2.869l-0.961,1.784c-1.799-0.967-3.959-0.967-5.756,0L6.161,2.87C8.551,1.582,11.448,1.582,13.839,2.869z M2.87,6.16l1.784,0.961c-0.968,1.798-0.968,3.957-0.001,5.756l-1.784,0.961C1.581,11.449,1.582,8.551,2.87,6.16z M6.159,17.129l0.961-1.783c1.799,0.969,3.96,0.969,5.759,0l0.961,1.785C11.448,18.418,8.55,18.418,6.159,17.129z"/>
    </EntypoIcon>
);

export default EntypoLifebuoy;
