import {useParams, Link, useNavigate} from 'react-router-dom';
import {boardConfig} from '../constants/boardConfig';

export default function BoardPage(){
    const {boardType} = useParams();
    const config = boardConfig[boardType];
    const history = useNavigate();

    if(!config) {
        return(
            <div>
                <h1>존재하지 않는 게시판입니다.</h1>
                <Link to="/mainpage">메인페이지로 이동</Link>
            </div>
        )
    }

    return(
        <div>
            <h1>{config.title}</h1><hr />
            <p>{config.description}</p>
            {config.canWrite && (
                <Link to={`/board/${boardType}/write`}><button>글 작성</button></Link>
            )}
            <button type="button" onClick={()=>history(-1)}>돌아가기</button>
        </div>
    )
}