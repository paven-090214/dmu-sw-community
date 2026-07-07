export default function SignupPage() { 
    return (
        <>
            <h1>회원가입</h1><hr />
            <form method="post">
                닉네임 : <input type="text" /><br />
                아이디 : <input type="text" /><br />
                비밀번호 : <input type="text" /><br />
                <button type="button">회원가입</button>
                <button type="button">돌아가기</button>
            </form>
        </>
    );
}