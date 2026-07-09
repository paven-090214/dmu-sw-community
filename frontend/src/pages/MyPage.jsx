
export default function MyPage(){

    const myData = localStorage.getItem("loginUser");
    const loginUser = myData ? JSON.parse(myData) : null;

    return(
        <div>
            <h1>내 정보</h1><hr />
            <p>닉네임 : {loginUser.nickname}</p>
            <p>아이디 : {loginUser.userId}</p>
            <p>uid : {loginUser.uid}</p>
        </div>
    )
}