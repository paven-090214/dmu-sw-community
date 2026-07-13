import { Link } from "react-router-dom";
import Header from "../header/Header";

function MainPage() {
    return(
        <div>
            <div>
                <Link to="/board/school">
                    <h1>학교 공지사항</h1>
                </Link>
                <p>학과 공지사항 페이지입니다.</p>
            </div>
            <div>
                <Link to="/board/department">
                    <h1>학과 공지사항</h1>
                </Link>
                <p>학과 공지사항 페이지입니다.</p>
            </div>
            <div>
                <Link to="/board/talk">
                    <h1>자유 게시판</h1>
                </Link>
                <p>잡담</p>
            </div>
            <div>
                <Link to="/board/question">
                    <h1>QnA</h1>
                </Link>
                <p>질문</p>
            </div>
        </div>
        
    );
}
export default MainPage;