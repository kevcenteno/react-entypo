import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--Mask';

let EntypoMask = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M19.581,5.84c-0.043-0.469-0.462-0.803-0.92-0.73C16.919,5.388,12.835,7,10,7C7.165,7,3.081,5.388,1.339,5.11c-0.458-0.073-0.876,0.26-0.92,0.729C0.277,7.371,0,11.45,0,12.068c0,0.83,3.472,2.732,6,2.732c2.452,0,2.95-2.732,4-2.732s1.548,2.732,4,2.732c2.528,0,6-1.902,6-2.732C20,11.45,19.723,7.371,19.581,5.84z M7.66,10.72c-0.353,0.318-1.335,1.07-2.531,0.835c-1.196-0.235-1.919-1.323-2.166-1.758C2.903,9.691,2.922,9.557,3.007,9.48C3.36,9.162,4.342,8.41,5.539,8.645c1.196,0.235,1.919,1.323,2.166,1.758C7.764,10.509,7.745,10.643,7.66,10.72z M17.037,9.797c-0.246,0.436-0.969,1.523-2.166,1.758c-1.196,0.235-2.179-0.517-2.531-0.835c-0.086-0.077-0.104-0.211-0.045-0.317c0.246-0.436,0.969-1.523,2.166-1.758c1.196-0.235,2.179,0.517,2.531,0.835C17.078,9.557,17.097,9.691,17.037,9.797z"/>
    </EntypoIcon>
);

export default EntypoMask;
