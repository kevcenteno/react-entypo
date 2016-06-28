import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--landline';

let EntypoLandline = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M4.902,0.25C3.498-0.027,2.115,0.875,1.833,2.273c-1.105,5.455-1.105,9.997,0,15.454C2.08,18.952,3.17,19.8,4.388,19.8c0.17,0,0.342-0.016,0.515-0.05c1.412-0.279,2.329-1.638,2.046-3.036c-0.978-4.832-0.978-8.598,0-13.43C7.231,1.888,6.314,0.529,4.902,0.25z M17,2H8.436c0.073,0.467,0.081,0.951-0.017,1.44c-0.936,4.72-0.936,8.398,0,13.12c0.098,0.49,0.09,0.973,0.017,1.44H17c1.1,0,2-0.9,2-2V4C19,2.9,18.101,2,17,2z M12,14.5c-0.828,0-1.5-0.672-1.5-1.5s0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5S12.828,14.5,12,14.5z M17,9h-7V5h7V9z"/>
    </EntypoIcon>
);

export default EntypoLandline;
