package com.dmu.community.board.dto;

import com.dmu.community.board.Board;
import java.time.LocalDateTime;
// 백엔드에서 프론트엔드로 주는 응답 dto
public record BoardCreateResponse(
    Long bNumber,
    String title,
    String content,
    Long uid,
    String nickname,
    String boardType,
    int viewCount,
    LocalDateTime createdAt
) {
    // from메서드에 board타입의 값을 받아서 응답 객체를 생성한다.
    public static BoardCreateResponse from(Board board) {
        return new BoardCreateResponse(
            board.getBNumber(),
            board.getTitle(),
            board.getContent(),
            board.getUser().getUid(),
            board.getUser().getNickname(),
            board.getBoardType(),
            board.getViewCount(),
            board.getCreatedAt()
        );
    }
}
