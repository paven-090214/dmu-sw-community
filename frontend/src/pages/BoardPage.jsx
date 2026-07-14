import {useParams, Link, useNavigate} from 'react-router-dom';
import {boardConfig} from '../constants/boardConfig';
import { useState, useEffect } from 'react';

export default function BoardPage(){
    const {boardType} = useParams();
    const config = boardConfig[boardType];
    const history = useNavigate();
    const [boardList, setBoardList] = useState([]);

    useEffect(()=>{
        const getBoardList = async()=> {
            try{
                const response = await fetch(`/api/board/${boardType}`);
                if(!response.ok) {
                    throw new Error("게시글 조회에 실패했습니다.");
                }

                const data = await response.json();
                setBoardList(data);
            } catch(e) {
                console.error(e);
                alert("게시글 조회에 실패했습니다.");
            }
        };
        getBoardList();
    },[boardType]);

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
            {boardList.length === 0 ? (
                <h2>작성된 글이 없습니다.</h2>
            ) : (
                <div>
                    {boardList.map((board)=>(
                        <div key={board.bNumber}>
                            <h3>{board.title}</h3>
                            <span>작성자 : {board.nickname}</span>
                            <span>조회수 : {board.viewCount}</span>
                            <span>작성일 : {board.createdAt}</span>
                        </div>
                    ))}
                </div>
            )}
            {config.canWrite && (
                <Link to={`/board/${boardType}/write`}><button>글 작성</button></Link>
            )}
            <button type="button" onClick={()=>history(-1)}>돌아가기</button>
        </div>
    )
}