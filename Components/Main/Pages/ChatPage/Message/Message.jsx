import React from 'react';
import messageStyle from './Message.module.css';

function Message(props) {
    return (
        <div className={messageStyle.Container}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur in libero maxime pariatur ratione voluptatum?
        </div>
    );
}

export default Message;