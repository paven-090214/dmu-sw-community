package com.dmu.community.board.dto;
// record : 프론트엔드가 보낸 JSON 데이터를 백엔드에서 잠깐 담아두기 위한 요청용 불변 객체
public record BoardCreateRequest (
    Long uid,
    String title,
    String content
) {
}
