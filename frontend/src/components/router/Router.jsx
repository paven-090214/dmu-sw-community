import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import App from '../../App.jsx';
import LoginBox from '../loginPage/LoginBox.jsx';
import MainPage from '../pages/MainPage.jsx';

function Router(){
    return(
        <Routes>
            <Route path="/" element={<Navigate to="/mainPage" replace />} />
            <Route path="/mainPage" element={<MainPage />} />
            <Route path="/Login" element={<LoginBox whatView="login" />} />
            <Route path="/Regis" element={<LoginBox whatView="regis" />}/>
        </Routes>
    )
}
export default Router;