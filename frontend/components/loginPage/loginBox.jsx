import Login from "./Login.jsx";
import Regis from "./Regis.jsx";
import { useState } from "react";

export default function LoginBox() {

    const [view, setView] = useState("login");


    return (
        <>  
            <input type="button" value="로그인" onClick={() => setView("login")} />
            <input type="button" value="회원가입" onClick={() => setView("regis")} />

            {view === "login" && <Login />}
            {view === "regis" && <Regis />}
        </>
    );
}