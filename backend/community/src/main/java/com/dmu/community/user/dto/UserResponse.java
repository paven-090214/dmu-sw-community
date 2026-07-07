package com.dmu.community.user.dto;

import java.time.LocalDateTime;

public record UserResponse(
    Long uid,
    String userId,
    String nickname,
    LocalDateTime createdAt
) {
    
}
