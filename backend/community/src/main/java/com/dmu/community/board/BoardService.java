package com.dmu.community.board;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dmu.community.board.dto.BoardCreateRequest;
import com.dmu.community.board.dto.BoardCreateResponse;
import com.dmu.community.board.dto.BoardListResponse;
import com.dmu.community.user.User;
import com.dmu.community.user.UserRepository;

@Service
public class BoardService {
    private final BoardRepository boardRepository;
    private final UserRepository userRepository;

    public BoardService(
        BoardRepository boardRepository,
        UserRepository userRepository
    ){
        this.boardRepository = boardRepository;
        this.userRepository = userRepository;
    }

    @Transactional
    public BoardCreateResponse createBoard(String boardType, BoardCreateRequest request){

        validateBoardType(boardType);
        validateTitle(request.title());
        validateContent(request.content());

        User user = userRepository.findByUid(request.uid())
            .orElseThrow(()-> new IllegalArgumentException("존재하지 않는 유저입니다."));
        
        if(user.getIsDeleted()) {
            throw new IllegalArgumentException("탈퇴한 유저는 게시글을 작성할 수 없습니다.");
        }
    
        Board board = Board.create(
            request.title().trim(),
            request.content().trim(),
            user,
            boardType
        );
        // BoardRepository를 통해서 save()는 스프링 내에서 지원하는 메서드
        Board saveBoard = boardRepository.save(board);
        return BoardCreateResponse.from(saveBoard);
    }

    public List<BoardListResponse> getBoardList(String boardType) {
        if(!boardType.equals("talk") && !boardType.equals("question")) {
            throw new IllegalArgumentException("존재하지 않는 게시판입니다.");
        }

        return boardRepository
            .findByBoardTypeOrderByCreatedAtDesc(boardType) // 각 타입에 맞는 게시판 쿼리(List<Board>)를 받음
            .stream() // List<Board>를 stream<Board>로 변경해 가공할 수 있도록 변경
            .map(board -> BoardListResponse.from(board)) // 각 쿼리의 값을 dto에 맞도록 가공함
            .toList(); // 다시 List형태로 변경함
    }

    private void validateBoardType(String boardType) {
        if(!boardType.equals("question") && !boardType.equals("talk")) {
            throw new IllegalArgumentException("존재하지 않는 게시판입니다.");
        }
    }

    private void validateTitle(String title) {
        if(title == null || title.trim().isEmpty()) {
            throw new IllegalArgumentException("제목은 필수입니다.");
        }

        if (title.length() > 100) {
            throw new IllegalArgumentException("제목은 100자 이하로 입력해야 합니다.");
        }
    }

    private void validateContent(String content) {
        if (content == null || content.trim().isEmpty()){
            throw new IllegalArgumentException("내용은 필수입니다.");
        }
    }
}