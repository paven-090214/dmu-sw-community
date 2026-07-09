import { useNavigate } from "react-router-dom";
import {useState} from 'react';

export default function SignupPage() {
    const history = useNavigate();
    const [user, setUser] = useState({
        userId : "",
        nickname: "",
        password: "",
    });

    const input = (e) => {
        const {name, value} = e.target;

        setUser({
            ...user,[name]:value
        });
    };

    const submit = async(e) => {
        e.preventDefault();
        try{
            const response = await fetch("/api/users/signup", {
                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    userId: user.userId,
                    password: user.password,
                    nickname: user.nickname
                })
            })

            if(!response.ok) {
                const errorData = await response.json();
                alert(errorData.message || "회원가입에 실패했습니다.");
                return;
            }

            const data = await response.json();
            console.log("회원가입 성공", data);
            alert("회원가입 성공");
            history("/loginpage");
        } catch(error) {
            console.error(error);
            alert("서버 연결에 실패했습니다.");
        }
    };

      return (
        <>
            <h1>회원가입</h1><hr />
            <form onSubmit={submit}>
                닉네임 : 
                <input 
                    type="text" 
                    name="nickname" 
                    value={user.nickname}
                    onChange={(e)=>input(e)}
                /><br />
                아이디 : 
                <input 
                    type="text"
                    name="userId"
                    value={user.userId}
                    onChange={(e)=>input(e)}
                /><br />
                비밀번호 : 
                <input 
                    type="password" 
                    name="password" 
                    value={user.password}
                    onChange={(e)=>input(e)}
                /><br />
                <button type="submit">회원가입</button>
                <button type="button" onClick={()=> history(-1)}>돌아가기</button>
            </form>
        </>
    );
}