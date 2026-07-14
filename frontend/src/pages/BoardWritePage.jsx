import { boardConfig } from "../constants/boardConfig";
import { useParams, useNavigate } from "react-router-dom";
import {useState} from 'react';

export default function BoardWritePage(){
    const {boardType} = useParams();
    const config = boardConfig[boardType];
    const history = useNavigate();

    const [board, setBoard] = useState({
        title: "",
        content: "",
    })

    const input = (e) => {
        const {name, value} = e.target;
        setBoard({
            ...board,[name]: value
        })
    }

    const data = localStorage.getItem("loginUser");
    const loginUser = data ?
        JSON.parse(data) : null;

    const createBoard = async(e) => {
        e.preventDefault();
        try{
            const response = await fetch(`/api/board/${boardType}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                // 서버에 전송할 때에는 문자열 형태로 반환해서 보내야함
                body: JSON.stringify({
                    uid: loginUser.uid,
                    title: board.title,
                    content: board.content,
                })
            })

            if(!response.ok) {
                const errorData = await response.json();
                alert(errorData.message || "글 작성에 실패하였습니다.");
                return;
            }

            console.log("글 작성 성공");
            history(`/board/${boardType}`);

        } catch (e) {
            console.log(e);
            alert("서버연결에 실패했습니다.");
        }
    }
    
    return(
        <div>
            <h1>{config.title} 글쓰기</h1><hr />
            <form onSubmit={(e)=>createBoard(e)}>
                제목: <input 
                    type="text" 
                    name="title" 
                    onChange={(e)=>{input(e)}}
                    /><br />
                내용<textarea 
                    name="content" 
                    onChange={(e)=>{input(e)}} 
                    >
                    </textarea><br />
                <button type="submit">글 작성</button>
                <button type="button" onClick={()=>history(-1)}>돌아가기</button>
            </form>
        </div>
    )
}