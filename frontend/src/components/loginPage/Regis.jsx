import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import './LoginPage.css';

export default function Regis() {
    const history = useNavigate();
    const [user, setUser] = useState({
        userId: "",
        nickname: "",
        password: "",
    });

    const input = (e) => {
        const { name, value } = e.target;

        setUser({
            ...user, [name]: value
        });
    };

    const submit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("/api/users/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    userId: user.userId,
                    password: user.password,
                    nickname: user.nickname
                })
            })

            if (!response.ok) {
                const errorData = await response.json();
                alert(errorData.message || "회원가입에 실패했습니다.");
                return;
            }

            const data = await response.json();
            console.log("회원가입 성공", data);
            alert("회원가입 성공");
            history("/login");
        } catch (error) {
            console.error(error);
            alert("서버 연결에 실패했습니다.");
        }
    };

    return (
        <>
            <form onSubmit={submit} className="regisForm">
                <div className="regisForm__Box">
                    <div className="regisForm__titleText">닉네임</div>
                    <input
                        type="text"
                        name="nickname"
                        value={user.nickname}
                        onChange={(e) => input(e)}
                        className="regisForm__nickname"
                    />
                </div>
                <div className="regisForm__Box">
                    <div className="regisForm__titleText">아이디</div>
                    <input
                        type="text"
                        name="userId"
                        value={user.userId}
                        onChange={(e) => input(e)}
                        className="regisForm__ID"
                    />
                </div>
                <div className="regisForm__Box">
                    <div className="regisForm__titleText">비밀번호</div>
                    <input
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={(e) => input(e)}
                        className="regisForm__PW"
                    />
                </div>
                <button type="submit" className="regisForm__regisBtn">회원가입</button>
            </form >
        </>
    );
}