import { Link } from "react-router-dom";
import './MainPage.css';

function MainPage() {
    return (
        <div className="mainPage">
            <div className="mainPage__schoolNoticeContainer">
                <div className="mainPage__schoolNoticeTitleContainer">
                    <div className="mainPage__noticeTitle">학교 공지사항</div>
                    <Link to="/board/schoolNotice" className="mainPage__schoolNoticeLink">〓</Link>
                </div>
                <div className="mainPage__schoolNoticeContents">
                    <ul className="mainPage__schoolNoticeList">
                        <li>공지사항 1</li>
                        <li>공지사항 2</li>
                        <li>공지사항 3</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default MainPage;