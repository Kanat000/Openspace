import React from 'react';
import ChatBlockStyle from './ChatBlock.module.css';

function ChatBlock(props) {
    return (
        <div className={ChatBlockStyle.Container}>
            <div className={ChatBlockStyle.leftSide}>
                <div className={ChatBlockStyle.Frame}>
                    <img src="" alt="" className={ChatBlockStyle.Img}/>
                </div>
            </div>
            <div className={ChatBlockStyle.rightSide}>
                <div className={ChatBlockStyle.Name}>
                    Daukee
                </div>
                <div className={ChatBlockStyle.Message}>
                    <span>You:</span>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                </div>
            </div>
        </div>
    );
}

export default ChatBlock;