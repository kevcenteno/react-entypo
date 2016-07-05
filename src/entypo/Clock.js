import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--Clock';

let EntypoClock = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M10,0.4c-5.303,0-9.601,4.298-9.601,9.6c0,5.303,4.298,9.601,9.601,9.601c5.301,0,9.6-4.298,9.6-9.601C19.6,4.698,15.301,0.4,10,0.4z M9.999,17.6c-4.197,0-7.6-3.402-7.6-7.6c0-4.197,3.402-7.6,7.6-7.6c4.197,0,7.601,3.402,7.601,7.6C17.6,14.197,14.196,17.6,9.999,17.6z M11,9.33V4H9v6.245l-3.546,2.048l1,1.732l4.115-2.377C10.807,11.511,11,11.175,11,10.9v-0.168l4.24-4.166c-0.198-0.271-0.411-0.529-0.647-0.766L11,9.33z"/>
    </EntypoIcon>
);

export default EntypoClock;
