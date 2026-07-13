import Login from "./Login.jsx";
import Regis from "./Regis.jsx";
import './LoginPage.css';
import { useNavigate } from "react-router-dom";

export default function LoginBox({ whatView }) {
    const navigate = useNavigate();

    return (
        <>
            <div className="loginBox">
                <div className="loginBox__title">
                    {whatView === "login" && <h1>로그인</h1>}
                    {whatView === "regis" && <h1>회원가입</h1>}
                </div>
                <div className="loginBox__content">
                    {whatView === "login" && <Login />}
                    {whatView === "regis" && <Regis />}
                </div>
                <div className="loginBox__buttons">
                    <input type="button" value="로그인" onClick={() => navigate("/Login")} className="loginBox__loginBtn" />
                    <input type="button" value="회원가입" onClick={() => navigate("/Regis")} className="loginBox__regisBtn" />
                </div>

            </div>
        </>
    );
}