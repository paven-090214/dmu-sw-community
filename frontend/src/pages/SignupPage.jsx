import { useNavigate } from "react-router-dom";

export default function SignupPage() { 
    const history = useNavigate();
    return (
        <>
            <h1>회원가입</h1><hr />
            <form method="post">
                닉네임 : <input type="text" /><br />
                아이디 : <input type="text" /><br />
                비밀번호 : <input type="password" /><br />
                <button type="button">회원가입</button>
                <button type="button" onClick={()=> history(-1)}>돌아가기</button>
            </form>
        </>
    );
}