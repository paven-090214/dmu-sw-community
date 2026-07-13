import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import './LoginPage.css';

export default function Login() {
    const history = useNavigate();
    const [login, setLogin] = useState({
        userId: "",
        password: "",
    })

    const input = (e) => {
        const { name, value } = e.target;
        setLogin({
            ...login, [name]: value
        })
    }

    const loginSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("/api/users/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    userId: login.userId,
                    password: login.password,
                })
            })

            if (!response.ok) {
                const errorData = await response.json();
                alert(errorData.message || "로그인에 실패했습니다.");
                return;
            }

            const data = await response.json();
            localStorage.setItem("loginUser", JSON.stringify(data));
            // loginStatus 
            window.dispatchEvent(new Event("loginStatus"));

            console.log("로그인 성공", data);
            history("/mainPage");
        } catch (e) {
            console.error(e);
            alert("서버연결에 실패했습니다.");
        }
    }

    return (
        <>
            <form onSubmit={(e) => loginSubmit(e)} className="loginForm">
                <div className="loginForm__Box">
                    <div className="loginForm__titleText">아이디</div>
                    <input
                        type="text"
                        name="userId"
                        onChange={(e) => input(e)}
                        className="loginForm__ID"
                    />
                </div>
                <div className="loginForm__Box">
                    <div className="loginForm__titleText">비밀번호</div>
                    <input
                        type="password"
                        name="password"
                        onChange={(e) => input(e)}
                        className="loginForm__PW"
                    />
                </div>
                <button type="submit" className="loginForm__loginBtn">로그인</button>
            </form>
        </>
    );
}