import './App.css';
import { BrowserRouter, Route, Link, Routes} from "react-router-dom";
import DocumentTitle from 'react-document-title'
import UnauthorizedPage from "./pages/UnauthorizedPage";
import MainTitle from "./components/MainTitle";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MainPage from "./pages/MainPage";
import {Container, CssBaseline, Paper, Typography} from "@mui/material";

function App() {
  return (
      // <DocumentTitle title={'Notes'}>
        <BrowserRouter basename="/" >
            <Container
                maxWidth={false} disableGutters
                // sx={{width:'100%',border:"2px solid gray"}}
            >

                {/*<MainTitle/>*/}

                <Routes>
                    <Route exact path={'/'} element={<UnauthorizedPage/>}/>
                    <Route exact path={'/login'} element={<LoginPage/>}/>
                    <Route exact path={'/register'} element={<RegisterPage/>}/>
                    <Route exact path={'/notes'} element={<MainPage/>}/>
                </Routes>

            </Container>


        </BrowserRouter>
      // </DocumentTitle>
  );
}

export default App;
