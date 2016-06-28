import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--stopwatch';

let EntypoStopwatch = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M7.376,6.745c-0.447,0.275,1.197,4.242,1.598,4.888c0.35,0.569,1.093,0.742,1.658,0.394c0.568-0.352,0.745-1.094,0.395-1.66C10.63,9.719,7.822,6.469,7.376,6.745z M7.041,2.402C7.969,2.079,8.963,1.9,10,1.9s2.031,0.179,2.959,0.502c0.329,0.114,0.765-0.115,0.572-0.611c-0.141-0.36-0.277-0.712-0.332-0.855c-0.131-0.339-0.6-0.619-0.804-0.665C11.623,0.097,10.823,0,10,0S8.377,0.097,7.604,0.271C7.4,0.317,6.932,0.597,6.801,0.936C6.746,1.079,6.609,1.431,6.469,1.791C6.276,2.287,6.712,2.517,7.041,2.402z M19.098,3.186c-0.192-0.23-0.396-0.455-0.613-0.672c-0.216-0.217-0.441-0.42-0.67-0.613c-0.153-0.129-0.603-0.234-0.888,0.051c-0.284,0.285-1.648,1.647-1.648,1.647c0.402,0.288,0.793,0.605,1.155,0.966c0.362,0.361,0.677,0.752,0.966,1.155c0,0,1.363-1.362,1.647-1.647C19.333,3.787,19.228,3.338,19.098,3.186z M10,2.9c-4.475,0-8.101,3.626-8.101,8.1c0,4.475,3.626,8.101,8.101,8.101c4.473,0,8.1-3.626,8.1-8.101C18.1,6.527,14.473,2.9,10,2.9z M10,17.101c-3.368,0-6.1-2.731-6.1-6.1c0-3.369,2.731-6.1,6.1-6.1c3.369,0,6.101,2.731,6.101,6.1C16.101,14.369,13.369,17.101,10,17.101z"/>
    </EntypoIcon>
);

export default EntypoStopwatch;
