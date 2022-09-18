import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";

import {Container} from "@mui/material";

import {UsersContainer} from "./components/Users/UsersContainer";
import {SignUpContainer} from "./components/SignUp/SignUpContainer";
import {SuccessContainer} from "./components/Success/SuccessContainer";



const App = () => {
    return (
        <>
            <Header/>

            <Container>
                <MainContent/>
                <UsersContainer/>
                <SignUpContainer />
                <SuccessContainer/>
            </Container>
        </>
    )
}

export default App;
