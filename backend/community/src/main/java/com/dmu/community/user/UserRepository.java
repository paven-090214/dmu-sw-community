package com.dmu.community.user;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface  UserRepository extends JpaRepository<User, Long>{
    boolean existsByUserId(String userId);

    boolean existsByNickname(String nickname);

    Optional<User> findByUid(Long uid);

    Optional<User> findByUserId(String userId);
}
