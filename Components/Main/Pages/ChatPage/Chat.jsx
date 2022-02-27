import React from 'react';
import chatPageStyle from './Chat.module.css';
import ChatBlock from "./Chats/ChatBlock";
import {LangSystemText} from "../../../../Store/Translator";

function Chat(props) {
    return (
        <div className={chatPageStyle.Container}>
            <div className={chatPageStyle.ChatStore}>
               <div className={chatPageStyle.SearchBox}>
                   <input type="text" placeholder={LangSystemText.Search} className={chatPageStyle.Search}/>
               </div>
                <div className={chatPageStyle.chatHistory}>
                    <ChatBlock />
                    <ChatBlock />
                    <ChatBlock />
                    <ChatBlock />
                    <ChatBlock />
                    <ChatBlock />
                    <ChatBlock />
                </div>
            </div>
            <div className={chatPageStyle.ChatDisplay}>
                <div className={chatPageStyle.ChatContainer}>
                    <div className={chatPageStyle.header}>
                        <div className={chatPageStyle.Receiver}>
                            <div className={chatPageStyle.Frame}>
                                <img src="" alt="" className={chatPageStyle.Img}/>
                            </div>
                            <div className={chatPageStyle.Name}>
                                Kakeee
                            </div>

                        </div>
                    </div>
                    <div className={chatPageStyle.body}>
                        {LangSystemText.NoMessagesYet}
                    </div>
                    <div className={chatPageStyle.footer}>
                        <div className={chatPageStyle.sendContainer}>
                            <div className={chatPageStyle.changeSize}><textarea className={chatPageStyle.SenderInput} placeholder="Type something..."></textarea></div>
                           <button className={chatPageStyle.SendBtn}>
                                <svg xmlns="http://www.w3.org/2000/svg" className={chatPageStyle.SendIcon} viewBox="0 0 16 16">
                                    <path
                                        d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"/>
                                </svg>
                               {LangSystemText.Send}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chat;