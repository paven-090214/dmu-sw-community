package com.dmu.community.board;

import java.time.LocalDateTime;

import com.dmu.community.user.User;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="board")
public class Board {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name= "b_number")
    private Long bNumber;

    @Column(name = "title", nullable = false, length = 100)
    private String title;

    @Column(name = "content", nullable = false, columnDefinition = "TEXT")
    private String content;

    @ManyToOne(fetch = FetchType.LAZY) // user프록시 객체의 형태로 존재한다.
    @JoinColumn(name = "uid", nullable = false)// user전체의 객체가 아니라 uid만을 저장함
    private User user;

    @Column(name = "board_type", nullable = false, length = 20)
    private String boardType;

    @Column(name = "view_count", nullable = false)
    private int viewCount;

    @Column(name = "b_created_at", nullable=false)
    private LocalDateTime createdAt;

    protected Board(){

    }// 값이 없는 객체 생성을 보호
    // bNumber는 자동증가하는 PK이기 때문에 작성하지 않음
    private Board(String title, String content, User user, String boardType){
        this.title = title;
        this.content = content;
        this.user = user;
        this.boardType = boardType;
        this.viewCount = 0;
        this.createdAt = LocalDateTime.now();
    }
    // 외부에서 실행하는 게시판 생성 생성자
    public static Board create(String title, String content, User user, String boardType) {
        return new Board(title, content, user, boardType);
    }

    public Long getBNumber(){
        return bNumber;
    }

    public String getTitle(){
        return title;
    }

    public String getContent(){
        return content;
    }

    public User getUser(){
        return user;
    }

    public String getBoardType(){
        return boardType;
    }

    public int getViewCount(){
        return viewCount;
    }

    public LocalDateTime getCreatedAt(){
        return createdAt;
    }
}
