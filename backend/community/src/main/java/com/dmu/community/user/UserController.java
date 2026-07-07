package com.dmu.community.user;

import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.dmu.community.user.dto.LoginRequest;
import com.dmu.community.user.dto.SignupRequest;
import com.dmu.community.user.dto.UserResponse;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/signup")
    public UserResponse signup(@Valid @RequestBody SignupRequest request) {
        return userService.signup(request);
    }

    @PostMapping("/login")
    public UserResponse login(@Valid @RequestBody LoginRequest request) {
        return userService.login(request);
    }

    @GetMapping("/check-userId")
    public Map<String, Boolean> checkUserId(@RequestParam String id) {
        boolean exists = userService.checkUserId(id);

        return Map.of("exists", exists);
    }

    @GetMapping("/{uid}")
    public UserResponse findUser(@PathVariable Long uid) {
        return userService.findByUid(uid);
    }
}