package com.dmu.community.board;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardRepository extends JpaRepository<Board, Long> {
    List<Board> findByBoardTypeOrderByCreatedAtDesc(String boardType);
}
