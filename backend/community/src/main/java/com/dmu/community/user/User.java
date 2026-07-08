package com.dmu.community.user;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="`user`")
public class User {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long uid;
    
    @Column(name="user_id", nullable = false, length = 25, unique = true)
    private String userId;

    @Column(name = "password", nullable = false, length = 255)
    private String password;

    @Column(name = "nickname", nullable = false, length = 10, unique = true)
    private String nickname;

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt;

    @Column(name="is_deleted", nullable=false)
    private boolean isDeleted;

    protected User() {
    }

    public User(String userId, String password, String nickname){
        this.userId = userId;
        this.password = password;
        this.nickname = nickname;
        this.createdAt = LocalDateTime.now();
    }

    public Long getUid(){
        return uid;
    }

    public String getUserId(){
        return userId;
    }

    public String getNickname(){
        return nickname;
    }

    public LocalDateTime getCreatedAt(){
        return createdAt;
    }

    public String getPassword(){
        return password;
    }

    public boolean getIsDeleted(){
        return isDeleted;
    }
}
