import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import MainPage from '../pages/MainPage';
import Header from '../components/header/Header';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import BoardPage from '../pages/BoardPage';
import BoardWritePage from '../pages/BoardWritePage';

function Router(){
    return(
        <Routes>
            <Route path="/" element={<Navigate to="/mainpage" replace />} />
            <Route path="/mainpage" element={<MainPage />} />
            <Route path="/signuppage" element={<SignupPage />}/>
            <Route path="/loginpage" element={<LoginPage />}/>
            <Route path="/board/:boardType" element={<BoardPage />} />
            <Route path="/board/:boardType/write" element={<BoardWritePage />} />
        </Routes>
    )
}
export default Router;