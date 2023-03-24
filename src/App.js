import './App.css';
import { BrowserRouter, Route, Link, Routes} from "react-router-dom";
import DocumentTitle from 'react-document-title'
import UnauthorizedPage from "./pages/UnauthorizedPage";
import MainTitle from "./components/MainTitle";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MainPage from "./pages/MainPage";

function App() {
  return (
      <DocumentTitle title={'Notes'}>
        <BrowserRouter basename="/" >
            <div>
                <MainTitle/>
                <Routes>
                    <Route exact path={'/'} element={<UnauthorizedPage/>}/>
                    <Route exact path={'/login'} element={<LoginPage/>}/>
                    <Route exact path={'/register'} element={<RegisterPage/>}/>
                    <Route exact path={'/notes'} element={<MainPage/>}/>
                </Routes>
            </div>


        </BrowserRouter>
      </DocumentTitle>
  );
}

export default App;
