import './App.css';
import ASide from "./Components/aSide/aSide";
import {BrowserRouter, Route} from "react-router-dom";
import MainContainer from "./Components/Main/MainContainer";
import NavbarContainer from "./Components/NavBar/NavbarContainer";

function App(props) {
    return (
        <BrowserRouter>
            <div className="App">
                <div className={props.AppClass}>
                    <Route exact path={["/","/store","/projects"]} >
                        <div className="mainContainer">
                            <NavbarContainer />
                            <MainContainer />
                            <ASide/>
                        </div>
                    </Route>
                <Route path={["/profile","/cart"]} >
                    <div className="mainContainer">
                    <NavbarContainer />
                    <MainContainer />
                    <ASide/>
                </div>
                </Route>
                    <Route path={["/chat","/store/product","/freelance/order","/projects/project","/add"]}>
                        <div className="chatContainer">
                            <NavbarContainer />
                            <MainContainer />
                        </div>
                    </Route>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
