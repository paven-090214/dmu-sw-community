import {Link} from 'react-router-dom';

export default function Header() { 
    return (
        <>
            <div>
                <Link to="/mainpage">
                    <img src="https://www.dongyang.ac.kr/sites/dmu/images/common/logo_b.svg" alt="동양미래대학교 로고" />
                </Link>

                <input type="text" placeholder="검색어를 입력하세요" />
                <input type="button" value="검색"/>
                

                <Link to="/loginpage"><button>로그인</button></Link>
                <Link to="/signuppage"><button>회원가입</button></Link>
            </div>
            
        </>
    );
}