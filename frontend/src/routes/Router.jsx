import {BrowserRouter, Route, Routes} from 'react-router-dom';

import MainPage from '../pages/MainPage';
import Header from '../components/header/Header';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';

function Router(){
    return(
        <Routes>
            <Route path="/mainpage" element={<MainPage />} />
            <Route path="/signuppage" element={<SignupPage />}/>
            <Route path="/loginpage" element={<LoginPage />}/>
        </Routes>
    )
}
export default Router;