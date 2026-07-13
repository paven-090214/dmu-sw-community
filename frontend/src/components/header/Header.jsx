import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Header.css';

export default function Header() {

    const [loginUser, setLoginUser] = useState(() => {
        const data = localStorage.getItem("loginUser");
        if (!data) {
            return null;
        }
        return JSON.parse(data);
    })

    useEffect(() => {
        const checkLogin = (() => {
            const data = localStorage.getItem("loginUser");

            if (!data) {
                setLoginUser(null);
                return;
            }

            setLoginUser(JSON.parse(data));
        });

        window.addEventListener("loginStatus", checkLogin);

        return () => {
            window.removeEventListener("loginStatus", checkLogin);
        }

    }, []);

    return (
        <>
            <div className="header">
                <div className="header__logo_img">
                    <Link to="/mainPage">
                        <img src="https://www.dongyang.ac.kr/sites/dmu/images/common/logo_b.svg" alt="동양미래대학교 로고" />
                    </Link>
                </div>
                <div className="header__search">
                    <input type="text" placeholder="검색어를 입력하세요"  className="header__searchBox" />
                    <input type="button" value="검색" className="header__searchButton" />
                </div>
                    {loginUser ? (
                        <div className="header__loginInfo">
                            <span>{loginUser.nickname}</span>
                            <Link to="/mypage">
                                <button type="button" className="header__loginInfoBtn">내 정보 보기</button>
                            </Link>
                        </div>
                    ) : (
                        <div className="header__loginInfo">
                            <Link to="/Login"><button className='header__loginBtn'>로그인</button></Link>
                            <Link to="/Regis"><button className='header__regisBtn'>회원가입</button></Link>
                        </div>
                    )
                    }
            </div>

        </>
    );
}