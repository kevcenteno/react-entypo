import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--awarenessRibbon';

let EntypoAwarenessRibbon = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M16.574,16.338c-0.757-1.051-2.851-3.824-4.57-6.106c0.696-0.999,1.251-1.815,1.505-2.242c1.545-2.594,0.874-4.26,0.022-5.67C12.677,0.909,12.542,0.094,10,0.094c-2.543,0-2.678,0.815-3.531,2.227C5.615,3.731,4.945,5.397,6.49,7.991c0.254,0.426,0.809,1.243,1.506,2.242c-1.72,2.281-3.814,5.055-4.571,6.106c-0.176,0.244-0.16,0.664,0.009,1.082c0.13,0.322,0.63,1.762,0.752,2.064c0.156,0.389,0.664,0.67,1.082,0.092c0.241-0.334,2.582-3.525,4.732-6.522c2.149,2.996,4.491,6.188,4.732,6.522c0.417,0.578,0.926,0.297,1.082-0.092c0.122-0.303,0.622-1.742,0.752-2.064C16.733,17.002,16.75,16.582,16.574,16.338z M9.634,7.063C8.566,5.579,7.802,3.852,7.802,3.852S8.222,3.094,10,3.094c1.778,0,2.198,0.758,2.198,0.758s-0.766,1.727-1.833,3.211C10.277,7.184,10.147,7.36,10,7.56C9.851,7.36,9.721,7.184,9.634,7.063z"/>
    </EntypoIcon>
);

export default EntypoAwarenessRibbon;
