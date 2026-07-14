package com.dmu.community.board.dto;

import java.time.LocalDateTime;

import com.dmu.community.board.Board;

public record BoardListResponse(
    Long bNumber,
    String title,
    String content,
    Long uid,
    String nickname,
    String boardType,
    int viewCount,
    LocalDateTime createdAt
) {
    public static BoardListResponse from(Board board) {
        return new BoardListResponse(
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