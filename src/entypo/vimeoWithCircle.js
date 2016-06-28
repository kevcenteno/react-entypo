import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--vimeoWithCircle';

let EntypoVimeoWithCircle = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M10,0.4c-5.302,0-9.6,4.298-9.6,9.6s4.298,9.6,9.6,9.6s9.6-4.298,9.6-9.6S15.302,0.4,10,0.4z M14.401,8.15c-0.508,2.916-3.348,5.387-4.201,5.951c-0.854,0.562-1.634-0.227-1.916-0.824c-0.324-0.682-1.293-4.373-1.547-4.68C6.483,8.291,5.721,8.904,5.721,8.904L5.352,8.41c0,0,1.547-1.883,2.724-2.117c1.248-0.25,1.246,1.951,1.546,3.174c0.291,1.183,0.486,1.859,0.739,1.859c0.254,0,0.739-0.658,1.269-1.67c0.532-1.012-0.022-1.906-1.061-1.27C10.984,5.846,14.909,5.234,14.401,8.15z"/>
    </EntypoIcon>
);

export default EntypoVimeoWithCircle;
