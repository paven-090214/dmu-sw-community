import Navi from './Navi.jsx';
import Search from './Search.jsx';
export default function Header() { 
    return (
        <>
            <div>
                <img src="https://www.dongyang.ac.kr/sites/dmu/images/common/logo_b.svg" alt="동양미래대학교 로고" />

                {<Search />}
                
                {<Navi />}
                
                <input type="button" value="로그인" />
            </div>
            
        </>
    );
}