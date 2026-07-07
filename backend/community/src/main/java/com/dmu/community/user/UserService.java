package com.dmu.community.user;

import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.dmu.community.user.dto.LoginRequest;
import com.dmu.community.user.dto.SignupRequest;
import com.dmu.community.user.dto.UserResponse;

@Service
public class UserService {
    
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserService(
        UserRepository userRepository,
        PasswordEncoder passwordEncoder
    ) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public UserResponse signup(SignupRequest request){
        if (userRepository.existsByUserId(request.userId())) {
            throw new ResponseStatusException(
                HttpStatus.CONFLICT,
                "이미 사용중인 아이디입니다."
            );
        }

        if (userRepository.existsByNickname(request.nickname())){
            throw new ResponseStatusException(
                HttpStatus.CONFLICT,
                "이미 사용중인 닉네임입니다."
            );
        }

        String encodedPassword = passwordEncoder.encode(request.password());

        User user = new User(
            request.userId(),
            encodedPassword,
            request.nickname()
        );

        User saveUser = userRepository.save(user);

        return toResponse(saveUser);

    }

    public UserResponse login(LoginRequest request) {
        User user = userRepository.findByUserId(request.userId())
            .orElseThrow(() -> new ResponseStatusException(
                HttpStatus.UNAUTHORIZED,
                "아이디 또는 비밀번호가 올바르지 않습니다."
            ));

        boolean passwordMatched = passwordEncoder.matches(
            request.password(),
            user.getPassword()
        );

        if (!passwordMatched) {
            throw new ResponseStatusException(
                HttpStatus.UNAUTHORIZED,
                "아이디 또는 비밀번호가 올바르지 않습니다."
            );
        }

        return toResponse(user);   
    }

    public boolean checkUserId(String userId) {
        return userRepository.existsByUserId(userId);
    }

    public UserResponse findByUid(Long uid) {
        User user = userRepository.findByUid(uid)
            .orElseThrow(() -> new ResponseStatusException(
                HttpStatus.NOT_FOUND,
                "존재하지 않는 유저입니다."
            ));
        return toResponse(user);  
    }

    private UserResponse toResponse(User user) {
        return new UserResponse(
            user.getUid(),
            user.getUserId(),
            user.getNickname(),
            user.getCreatedAt()
        );
    }

}
