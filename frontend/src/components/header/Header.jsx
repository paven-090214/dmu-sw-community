import {Link, useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';

export default function Header() { 
    const history = useNavigate();
    const [loginUser, setLoginUser] = useState(() => {
        const data = localStorage.getItem("loginUser");
        if (!data) {
            return null;
        }
        return JSON.parse(data);
    })

    useEffect(()=>{
        const checkLogin = (()=>{
            const data = localStorage.getItem("loginUser");
    
            if (!data) {
                setLoginUser(null);
                return;
            }
            // parse: json을 js객체로 해석한다
            setLoginUser(JSON.parse(data));
        });

        window.addEventListener("loginStatus", checkLogin);

        return ()=>{
            window.removeEventListener("loginStatus", checkLogin);
        }

    }, []);

    const logout = () =>{
        localStorage.removeItem("loginUser");
        setLoginUser(null);
        window.dispatchEvent(new Event("loginStatus"));
        history("/mainpage");
    }

    return (
        <>
            <div>
                <Link to="/mainpage">
                    <img src="https://www.dongyang.ac.kr/sites/dmu/images/common/logo_b.svg" alt="동양미래대학교 로고" />
                </Link>
                <input type="text" placeholder="검색어를 입력하세요" />
                <input type="button" value="검색"/>
            </div>
            {loginUser ? (
                <div>
                    <span>{loginUser.nickname}</span>
                    <Link to="/mypage">
                        <button type="button">내 정보 보기</button>
                    </Link>
                    <button type="button" onClick={logout}>로그아웃</button>
                </div>
            ) :(
                <div>
                <Link to="/loginpage"><button>로그인</button></Link>
                <Link to="/signuppage"><button>회원가입</button></Link>
            </div>
            )
        }
        </>
    );
}