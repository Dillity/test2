import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";

import {UsersContainer} from "./components/Users/UsersContainer";
import {SignUpContainer} from "./components/SignUp/SignUpContainer";
import {SuccessContainer} from "./components/Success/SuccessContainer";


const App = () => {
    return (
        <>
            <Header/>

            <div>
                <MainContent/>
                <UsersContainer/>
                <SignUpContainer />
                <SuccessContainer/>
            </div>
        </>
    )
}

export default App;
