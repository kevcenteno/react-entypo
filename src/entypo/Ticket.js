import React from 'react';
import EntypoIcon from '../EntypoIcon';

const iconClass = 'entypo-svgicon entypo--Ticket';

let EntypoTicket = (props) => (
    <EntypoIcon propClass={iconClass} {...props}>
        <path d="M4.906,11.541l3.551,3.553l6.518-6.518l-3.553-3.551L4.906,11.541z M19.104,6.664l-1.511-1.512c-0.289,0.156-0.618,0.246-0.969,0.246c-1.118,0-2.024-0.906-2.024-2.023c0-0.352,0.089-0.682,0.246-0.969l-1.511-1.512c-0.394-0.393-1.038-0.393-1.432,0l-11.01,11.01c-0.393,0.392-0.393,1.037,0,1.432l1.512,1.51C2.694,14.69,3.023,14.6,3.375,14.6c1.117,0,2.023,0.906,2.023,2.025c0,0.35-0.089,0.68-0.246,0.969l1.512,1.51c0.394,0.394,1.037,0.394,1.432,0L19.104,8.096C19.498,7.701,19.498,7.057,19.104,6.664z M8.457,16.719l-5.176-5.178l8.142-8.141l5.176,5.176L8.457,16.719z"/>
    </EntypoIcon>
);

export default EntypoTicket;
