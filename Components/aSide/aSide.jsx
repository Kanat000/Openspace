import React from 'react';
import aSideStyle from './aSide.module.css';
import {LangSystemText} from "../../Store/Translator";

function ASide(props){
    return (
        <div className={aSideStyle.Section}>
            <div className={aSideStyle.aSide}>
                <div className={aSideStyle.Head}>
                    <div className={aSideStyle.HeadContainer}>
                        <div className={aSideStyle.HeadIconFrame}>
                            <svg xmlns="http://www.w3.org/2000/svg" className={aSideStyle.HeadIcon}
                                 viewBox="0 0 16 16">
                                <path
                                    d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2z"/>
                            </svg>
                        </div>
                        <div className={aSideStyle.HeadText}>
                            {LangSystemText.Filter}
                        </div>
                    </div>
                </div>

                <div className={aSideStyle.Body}>
                    <div className={aSideStyle.filterContainer}>
                        <div className={aSideStyle.filterBlock}>
                            <div className={aSideStyle.filterLabelBlock}>
                                <label htmlFor="bySubject">{LangSystemText.By+" "+LangSystemText.Subject}:</label>
                            </div>
                            <div className={aSideStyle.filterInputBlock}>

                                <input type="text" id="bySubject" className={aSideStyle.filterInput} placeholder={LangSystemText.Search} />

                                    <button className={aSideStyle.addButton}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className={aSideStyle.AddIcon} viewBox="0 0 16 16">
                                            <path
                                                d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"/>
                                        </svg>
                                    </button>

                            </div>

                            <div className={aSideStyle.filterInputResult}>
                                <div className={aSideStyle.filterResults}>
                                    <div className={aSideStyle.filterResultsText}>PHP</div>
                                    <div className={aSideStyle.filterResultsBtn}>
                                         <button className={aSideStyle.filterCancelBtn}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className={aSideStyle.cancelIcon} viewBox="0 0 16 16">
                                                <path
                                                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className={aSideStyle.filterResults}>
                                    <div className={aSideStyle.filterResultsText}>PHP</div>
                                    <div className={aSideStyle.filterResultsBtn}>
                                         <button className={aSideStyle.filterCancelBtn}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className={aSideStyle.cancelIcon} viewBox="0 0 16 16">
                                                <path
                                                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className={aSideStyle.filterResults}>
                                    <div className={aSideStyle.filterResultsText}>PHP</div>
                                    <div className={aSideStyle.filterResultsBtn}>
                                         <button className={aSideStyle.filterCancelBtn}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className={aSideStyle.cancelIcon} viewBox="0 0 16 16">
                                                <path
                                                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className={aSideStyle.filterResults}>
                                    <div className={aSideStyle.filterResultsText}>PHP</div>
                                    <div className={aSideStyle.filterResultsBtn}>
                                         <button className={aSideStyle.filterCancelBtn}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className={aSideStyle.cancelIcon} viewBox="0 0 16 16">
                                                <path
                                                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className={aSideStyle.filterBlock}>
                            <div className={aSideStyle.filterLabelBlock}>
                                <label htmlFor="bySpecialism">{LangSystemText.By+""+LangSystemText.Knowledge}:</label>
                            </div>
                            <div className={aSideStyle.filterInputBlock}>
                                <input type="text" id="bySpecialism" className={aSideStyle.filterInput} placeholder={LangSystemText.Search} />
                                    <button className={aSideStyle.addButton}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className={aSideStyle.AddIcon} viewBox="0 0 16 16">
                                            <path
                                                d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"/>
                                        </svg>
                                    </button>
                            </div>
                            <div className={aSideStyle.filterInputResult}>
                                <div className={aSideStyle.filterResults}>
                                    <div className={aSideStyle.filterResultsText}>PHP</div>
                                    <div className={aSideStyle.filterResultsBtn}>
                                        <button className={aSideStyle.filterCancelBtn}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className={aSideStyle.cancelIcon} viewBox="0 0 16 16">
                                                <path
                                                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={aSideStyle.filterBlock}>
                            <div className={aSideStyle.filterLabelBlock}>
                                <label htmlFor="byUniversity">{LangSystemText.By+" "+LangSystemText.University}:</label>
                            </div>
                            <div className={aSideStyle.filterInputBlock}>
                                <input type="text" id="byUniversity" className={aSideStyle.filterInput} placeholder={LangSystemText.Search} />
                                    <button className={aSideStyle.addButton}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className={aSideStyle.AddIcon} viewBox="0 0 16 16">
                                            <path
                                                d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"/>
                                        </svg>
                                    </button>
                            </div>
                            <div className={aSideStyle.filterInputResult}>
                                <div className={aSideStyle.filterResults}>
                                    <div className={aSideStyle.filterResultsText}>PHP</div>
                                    <div className={aSideStyle.filterResultsBtn}>
                                         <button className={aSideStyle.filterCancelBtn}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className={aSideStyle.cancelIcon} viewBox="0 0 16 16">
                                                <path
                                                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                   <div className={aSideStyle.UseFilter}>
                       <button className={aSideStyle.UseBtn}>{LangSystemText.UseFilter}</button>
                   </div>

            </div>
        </div>
)
}

export default ASide;