import { boardConfig } from "../constants/boardConfig";
import { useParams, useNavigate } from "react-router-dom";


export default function BoardWritePage(){
    const {boardType} = useParams();
    const config = boardConfig[boardType];
    const history = useNavigate();
    return(
        <div>
            <h1>{config.title} 글쓰기</h1><hr />
            <form method="post">
                제목: <input type="text" /><br />
                내용<textarea></textarea><br />
                <button type="button">글 작성</button>
                <button type="button" onClick={()=>history(-1)}>돌아가기</button>
            </form>
        </div>
    )
}