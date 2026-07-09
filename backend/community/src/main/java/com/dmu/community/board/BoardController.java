package com.dmu.community.board;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dmu.community.board.dto.BoardCreateRequest;
import com.dmu.community.board.dto.BoardCreateResponse;

@RestController
@RequestMapping("/api/boards")
public class BoardController {
    private final BoardService boardService;

    public BoardController(BoardService boardService){
        this.boardService = boardService;
    }

    // ResponseEntity는 HTTP 응답의 상태 코드, 헤더, 바디를 설정할 수 있는 객체이고,
    // body에는 자바 객체가 들어가며,
    // 스프링이 그 자바 객체를 JSON으로 변환해서 클라이언트에게 보낸다.
    @PostMapping("/{boardType}")
    public ResponseEntity<BoardCreateResponse> createBoard(
        @PathVariable String boardType,
        // 클라이언트가 보낸 요청 body의 JSON을 가져오는 것임
        @RequestBody BoardCreateRequest request
    ) {
        BoardCreateResponse response = boardService.createBoard(boardType, request);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
}
