package com.dmu.community.user.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record  SignupRequest (
    @NotBlank(message="아이디는 필수입니다.")
    @Size(max = 25, message="아이디는 25자 이하여야 합니다.")
    String userId,

    @NotBlank(message="비밀번호는 필수입니다.")
    @Size(min = 4, max = 20, message = "비밀번호는 4자 이상 20자 이하여야 합니다.")
    String password,

    @NotBlank(message = "닉네임은 필수입니다.")
    @Size(max = 10, message = "닉네임은 10자 이하여야 합니다.")
    String nickname
){
    
}
