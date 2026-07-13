import { useNavigate } from "react-router-dom";
import {useState} from 'react';

export default function Login() {
    const history = useNavigate();
    const [login, setLogin] = useState({
        userId: "",
        password: "",
    })

    const input = (e) => {
        const {name, value} = e.target;
        setLogin({
            ...login, [name]: value
        })
    }
    
    const loginSubmit = async(e) => {
        e.preventDefault();
        try{
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
        
            if(!response.ok) {
                const errorData = await response.json();
                alert(errorData.message || "로그인에 실패했습니다.");
                return;    
            }

            const data = await response.json();
            localStorage.setItem("loginUser", JSON.stringify(data));
            // loginStatus 
            window.dispatchEvent(new Event("loginStatus"));

            console.log("로그인 성공", data);
            history("/mainpage");
        } catch(e) {
            console.error(e);
            alert("서버연결에 실패했습니다.");
        }
    }

    return (
        <> 
            <form onSubmit={(e)=>loginSubmit(e)}>
                아이디 : 
                <input 
                    type="text" 
                    name="userId" 
                    onChange={(e)=>input(e)}
                /><br />
                비밀번호 : 
                <input 
                    type="password" 
                    name="password" 
                    onChange={(e)=>input(e)}
                /><br />
                <button type="submit">로그인</button>
                <button type="button" onClick={()=> history(-1)}>돌아가기</button>
            </form>
        </>
    );
}